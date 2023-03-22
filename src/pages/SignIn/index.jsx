import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'
// para colocarmos no lugar das tags <a /> por exemplo, para links. Ele guarda o histórico de navegação, tem alguns benefícios que facilitam o trabalho
import { Link } from 'react-router-dom'

export function SignIn() {
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
            />
            <Input 
               placeholder="Senha"
               type="password"
               icon={FiLock}
            />

            <Button title="Entrar" />
            
            <Link to="/register">
               Criar conta
            </Link>
         </Form>

         <Background />
      </Container>
   )
}