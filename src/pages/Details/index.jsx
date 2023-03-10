// importando de styles.js
import { Container, Links } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
 
export function Details() {
  return (
    // encapsulando o que foi importado para funcionar o CSS
    <Container>
      <Header/>
      <Section title="Links úteis">
        {/* tudo aqui dentro é referente ao "children" */}
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
        </Links>
      </Section>
      <Button title="voltar"/>
    </Container>
  )
}




