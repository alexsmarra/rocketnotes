// importando de styles.js
import { Container, Links, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
 
export function Details() {
  return (
    // encapsulando o que foi importado para funcionar o CSS
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir nota "/>
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, qui quod, doloribus impedit voluptatum ea molestias nostrum ratione ducimus expedita unde est ipsum. A possimus consectetur blanditiis excepturi natus veniam. Qantum ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestias doloremque inctio natus blanditiis quam laborum corrupti excepturi nihil. Another pril and all of us is on tender to pass the password.</p>
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
        </Content>
      </main>
    </Container>
  )
}




