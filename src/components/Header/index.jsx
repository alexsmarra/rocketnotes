import { RiShutDownLine } from "react-icons/ri" 
import { Container, Profile, Logout } from "./styles"

export function Header() {
   return (
      <Container>
         {/* fizemos a importação do Link pelo css, igual fizemos em pages/Home . We imported the Link through css, just like we did in pages/home */}
         <Profile to="/profile">
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