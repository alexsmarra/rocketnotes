import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'
// para colocarmos no lugar das tags <a /> por exemplo, para links. Ele guarda o histórico de navegação, tem alguns benefícios que facilitam o trabalho
import { Link } from 'react-router-dom'

export function SignIn() {
   // 'email' é a variável, 'setEmail' é a função para alterarmos o valor de 'email', 'useState' é a função que permite criar o nosso estado, inclusive podemos colocar um valor inicial nela, como "" por exemplo, que é vazio, ou um objeto {}, etc
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const { signIn } = useAuth()

   function handleSignIn() {
      signIn({email, password})
   }

   return (
      <Container>
         <Form>
            <h1>Rocket Notes</h1>
            <p>Aplicação para gerenciar e salvar seus links úteis</p>
            <h2>Faça seu login</h2>

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

            <Button title="Entrar" onClick={handleSignIn}/>
            
            <Link to="/register">
               Criar conta
            </Link>
         </Form>

         <Background />
      </Container>
   )
}