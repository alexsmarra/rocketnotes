// importando de styles.js
import { Container, Links } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
 
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
      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>
      </Section>
      <Button title="voltar"/>
    </Container>
  )
}




