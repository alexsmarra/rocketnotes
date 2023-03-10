import { Container, Profile } from "./styles"


export function Header() {
   return (
      <Container>
         <Profile>
            <img src="https://github.com/alexsmarra.png" alt="User img" />
            <div>
               <span>Welcome,</span>
               <strong>Alexandre Simões Marra</strong>
            </div>
         </Profile>
      </Container>
   )
}