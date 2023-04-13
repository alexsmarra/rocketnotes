import { createContext, useContext, useState } from "react";

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
   // 'data' é a variável, 'setData' é a função para alterarmos o valor de 'data', 'useState' é a função que permite criar o nosso estado, inclusive podemos colocar um valor inicial nela, como "" (vazio) por exemplo, ou um objeto {}, etc.
   const [data, setData] = useState({})

   // passou em chaves os params para buscá-los independente da posição
   async function signIn({ email, password }) {
      try {
         const response = await api.post("/sessions", { email, password })
         const { user, token } = response.data

         // inserindo token em todas as requisições que o usuário fizer
         api.defaults.headers.authorization = `Bearer ${token}`
         // armazenando informações
         setData({ user, token })
         console.log(user, token)

      } catch(error) {
         if(error.response) {
            alert(error.response.data.message)
         } else {
            alert("Could not enter!")
         }
      }
   } 

   return (
   <AuthContext.Provider value={{ signIn, user: data.user }}>
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