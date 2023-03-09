// importando de styles.js
import { Container } from "./styles"
import { Button } from "../../components/Button"


export function Details() {
  return (
    // encapsulando o que foi importado para funcionar o CSS
    <Container>
      <h1>Olá a todos!</h1>
      <p>Hoje, vamos falar sobre..</p>
      <Button/>
    </Container>
  )
}




