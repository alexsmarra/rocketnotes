import { RiShutDownLine } from "react-icons/ri" 
import { Container, Profile, Logout } from "./styles"
import { useAuth } from "../../hooks/auth"
import { api } from '../../services/api'

export function Header() {
   const { signOut, user } = useAuth()

   // primeira condição é url que vai buscar a imagem do usuario no backend
   const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` 
                                 : avatarPlaceholder

   return (
      <Container>
         {/* fizemos a importação do Link pelo css, igual fizemos em pages/Home . We imported the Link through css, just like we did in pages/home */}
         <Profile to="/profile">
            <img src={avatarUrl} alt={user.name} />
            <div>
               <span>Welcome,</span>
               <strong>{user.name}</strong>
            </div>
         </Profile>
         <Logout onClick={signOut}>
            <RiShutDownLine/>
         </Logout>
      </Container>
   )
}