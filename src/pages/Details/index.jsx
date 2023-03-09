// importando de styles.js
import { Container } from "./styles"
import { Button } from "../../components/Button"


export function Details() {
  return (
    // encapsulando o que foi importado para funcionar o CSS
    <Container>
      <h1>Olá a todos!</h1>
      <p>Hoje, vamos falar sobre..</p>
      {/* loading é uma propriedade boleana (true or false), para desabilitarmos o botão quando necessário */}
      <Button title="entrar" loading/>
      <Button title="cadastrar"/>
      <Button title="voltar"/>
    </Container>
  )
}




