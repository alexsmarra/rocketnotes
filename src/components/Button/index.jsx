import { Container } from "./styles"

// dentro dos parêntesis, para recuperar uma propriedade passada de um componente, desestruturando (para pegar os vários estilos de botões). O Button tem inúmeras propriedades, mas caso não queiramos mencionar todas, mas especificar somente as que queiramos, basta usar o "...rest"
export function Button({ title, loading = false, ...rest }) {
   return (
      <Container 
         type="button"
         // if "loading" is true, disable the button
         disabled={loading}
         {...rest}
         >
            {/* if ternário */}
            { loading ? "loading.." : title }
      </Container>
   )
}