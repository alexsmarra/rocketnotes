import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Link } from 'react-router-dom'

export function Profile() {
   const { user, updateProfile } = useAuth()

   // em 'useState()', pegando name já cadastrado do usuário
   const [name, setName] = useState(user.name)
   // em 'useState()', pegando email já cadastrado do usuário
   const [email, setEmail] = useState(user.email)
   const [oldPassword, setOldPassword] = useState()
   const [newPassword, setNewPassword] = useState()

   // primeira condição é url que vai buscar a imagem do usuario no backend
   const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` 
                                 : avatarPlaceholder
   // para exibir o avatar de fato
   const [avatar, setAvatar] = useState(avatarUrl)
   // para guardar o arquivo selecionado
   const [avatarFile, setAvatarFile] = useState(null)

   async function handleUpdate() {
      const user = {
         name,
         email, 
         password: newPassword,
         old_password: oldPassword
      }

      await updateProfile({ user, avatarFile })
   }

   function handleChangeAvatar(event) {
      const file = event.target.files[0]
      setAvatarFile(file)

      const imagePreview = URL.createObjectURL(file)
      setAvatar(imagePreview)
   }

    return (
      <Container>
          <header>
            <Link to="/">
               <FiArrowLeft/>
            </Link>
          </header>

          <Form>
            <Avatar>
               <img 
                  src={avatar}
                  alt="user img"
               />
               <label htmlFor="avatar">
                  <FiCamera />

                  <input
                     id="avatar"
                     type="file"
                     onChange={handleChangeAvatar}
                  />
               </label>
            </Avatar>
            <Input 
               placeholder="Nome"
               type="text"
               icon={FiUser}
               value={name}
               onChange={e => setName(e.target.value)}
            />
            <Input 
               placeholder="E-mail"
               type="text"
               icon={FiMail}
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
            <Input 
               placeholder="Senha atual"
               type="password"
               icon={FiLock}
               onChange={e => setOldPassword(e.target.value)}
            />
            <Input 
               placeholder="Nova senha"
               type="password"
               icon={FiLock}
               onChange={e => setNewPassword(e.target.value)}
            />

            <Button title="Salvar" onClick={handleUpdate}/>
          </Form>
      </Container>
    )
}