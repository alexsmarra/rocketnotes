import { RiShutDownLine } from "react-icons/ri" 
import { Container, Profile, Logout } from "./styles"

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
         <Logout>
            <RiShutDownLine/>
         </Logout>
      </Container>
   )
}