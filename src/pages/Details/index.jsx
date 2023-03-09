// importando de styles.js
import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

export function Details() {
  return (
    // encapsulando o que foi importado para funcionar o CSS
    <Container>
      <Header/>
      <Button title="voltar"/>
    </Container>
  )
}




