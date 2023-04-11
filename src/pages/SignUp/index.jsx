// create states to collect data entered by the user in the user registration field (name, email, password..)
import { useState } from "react"
import { api } from "../../services/api"

import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
// useNavigate is to send user to another page after registered
import { Link, useNavigate } from 'react-router-dom'

export function SignUp() {
   // initial value is empty ""
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const navigate = useNavigate()

   function handleSignup() {
      if(!name || !email || !password) {
         return alert("Fill in all fields!")
      }

      api.post("/users", { name, email, password })
      // instead of async await
      .then(() => {
         alert("Successfully registered user")
         // to send user to SingIn page after success registered.
         navigate("/")
      })
      .catch(error => {
         if(error.response) {
            alert(error.response.data.message)
         } else {
            alert("Could not register!")
         }
      })

   }

   return (
      <Container>
         <Background />

         <Form>
            <h1>Rocket Notes</h1>
            <p>Aplicação para gerenciar e salvar seus links úteis</p>
            <h2>Crie sua conta</h2>

            <Input 
               placeholder="Nome"
               type="text"
               icon={FiUser}
               onChange={e => setName(e.target.value)}
            />
            <Input 
               placeholder="E-mail"
               type="text"
               icon={FiMail}
               onChange={e => setEmail(e.target.value)}
            />
            <Input 
               placeholder="Senha"
               type="password"
               icon={FiLock}
               onChange={e => setPassword(e.target.value)}
            />

            <Button title="Cadastrar" onClick={handleSignup}/>
            
            <Link to="/">
               Voltar para o login
            </Link>
         </Form>
      </Container>
   )
}