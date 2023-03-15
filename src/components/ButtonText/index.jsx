import { Container } from "./styles"

export function ButtonText({ title, isActive = false, ...rest }) {
   return (
      <Container 
         type="button"
         // for the activated button 
         isActive={isActive}
         {...rest}
      >
         {title}
      </Container>
   )
}