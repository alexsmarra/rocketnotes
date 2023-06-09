// useEffect para pegar os dados no localStorage
import { createContext, useContext, useState, useEffect } from "react";

// para enviar as informações (dados) para o nosso backend
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
   // 'data' é a variável, 'setData' é a função para alterarmos o valor de 'data', 'useState' é a função que permite criar o nosso estado, inclusive podemos colocar um valor inicial nela, como "" (string vazia) por exemplo, ou um objeto {}, etc.
   const [data, setData] = useState({})

   // Authentication function. Passou em chaves os params para buscá-los independente da posição
   async function signIn({ email, password }) {
      try {
         const response = await api.post("/sessions", { email, password })
         // destructuring user and token from response.data
         const { user, token } = response.data

         // to store in localStorage, it needs to be in text format
         localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
         // the token is already in text form, so don't need the stringify function
         localStorage.setItem("@rocketnotes:token", token)

         // inserindo um token do tipo Bearer em todas as requisições que o usuário fizer
         api.defaults.headers.common['Authorization'] = `Bearer ${token}`
         // armazenando informações
         setData({ user, token })
         console.log(user, token)
         // if it goes wrong, it will catch the message and put it in the 'error' variable.
      } catch(error) {
         // if our error has a response..
         if(error.response) {
            alert(error.response.data.message)
         } else {
            alert("Could not enter!")
         }
      }
   } 

   // para logout
   function signOut() {
      localStorage.removeItem("@rocketnotes:token")
      localStorage.removeItem("@rocketnotes:user")

      setData({})
   }

   async function updateProfile({ user, avatarFile }) {
      try {
         if(avatarFile) {
            // new FormData() pq precisamos no formato de aquivo
            const fileUploadForm = new FormData()
            // igual fizemos no Insomnia, na pasta Users / Patch / Avatar, mas aqui está em forma de código
            fileUploadForm.append("avatar", avatarFile)

            const response = await api.patch("/users/avatar", fileUploadForm)
            user.avatar = response.data.avatar
         }


         await api.put("/users", user)
         localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
        
        setData({ user, token: data.token})
        alert("Updated profile")

      } catch(error) {
         // if our error has a response..
         if(error.response) {
            alert(error.response.data.message)
         } else {
            alert("Unable to update profile!")
         }
      }
   }

   // Always leave the closest to the return. When we leave the [] empty, the app will be loader only once after rendering our component (o app será carregado apenas uma vez após nosso componente ser renderizado, dessa forma, quando o usuário fizer o login e for direcionando para a page Home, se atualizarmos a tela, manterá na tela Home. Sem o useEffect, caso atualizássemos a tela após o usuário fazer o login, voltaria para a tela de login). Se colocarmos uma variável dentro dos [], isso quer dizer que, toda vez que essa variável mudar, o useEffect será executado.
   useEffect(() => {
      const token = localStorage.getItem("@rocketnotes:token")
      const user = localStorage.getItem("@rocketnotes:user")

      if(token && user) {
         api.defaults.headers.common['Authorization'] = `Bearer ${token}`

         setData({
            token,
            user: JSON.parse(user)
         })
      }
   }, [])

   return (
      // sharing function signIn, signOut, updateProfile and data.user on user variable in our context
   <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user }}>
      {children}
   </AuthContext.Provider>
   )
}

// hook
function useAuth() {
   const context = useContext(AuthContext)

   return context 
}

export { AuthProvider, useAuth }