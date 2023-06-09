import { useState } from 'react'
import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { Container, Form } from './styles'

export function New() {
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")

   const navigate = useNavigate()

   const [links, setLinks] = useState([])
   const [newLink, setNewLink] = useState("")
   
   const [tags, setTags] = useState([])
   const [newTag, setNewTag] = useState("")

   async function handleNewNote() {
      if(!title) {
         return alert("Enter the title of the note please.")
      }
      
      if(newLink || newTag) {
         return alert("There are items that were not added, are you sure you want to save?")
      }

      await api.post("/notes", {
         title,
         description,
         tags,
         links
      })

      alert("Successfully created note!")
      // levar o usuário para a nossa page Home
      navigate("/")
   }

   function handleAddLink() {
      // "prevState" pega o que já tem em "links"
      setLinks(prevState => [...prevState, newLink])
      setNewLink("")
   }

   function handleRemoveLink(deleted) {
      setLinks(prevState => prevState.filter(link => link !== deleted))
   }

   function handleAddTag() {
      setTags(prevState => [...prevState, newTag])
      setNewTag("")
   }

   function handleRemoveTag(deleted) {
      setTags(prevState => prevState.filter(tag => tag !== deleted))
   }

   return (
      <Container>
        <Header /> 

        <main>
         <Form>
            <header>
               <h1>Criar nota</h1>
               <Link to="/">voltar</Link>
            </header>

            <Input 
               placeholder="Título"
               onChange={e => setTitle(e.target.value)}
            />

            <Textarea 
               placeholder="Observações"
               onChange={e => setDescription(e.target.value)}   
            />

            <Section title="Links úteis">
               {
                  links.map((link, index) => (
                     <NoteItem 
                        key={String(index)}
                        value={link}
                        // quando a função tem params, temos que colocar dessa forma com uma arrow function, caso contrário ela tentará executar sozinha (palavras do professor)
                        onClick={() => {handleRemoveLink(link)}}
                     /> 
                  ))
               }                                             
               <NoteItem 
                  isNew 
                  placeholder="Novo Link"
                  value={newLink}
                  onChange={e => setNewLink(e.target.value)}
                  onClick={handleAddLink}
               />
            </Section>
            
            <Section title="Marcadores">
               <div className="tags">
                  {
                     tags.map((tag, index) => (
                        <NoteItem 
                           key={String(index)}
                           value={tag}
                           onClick={() => {handleRemoveTag(tag)}}
                        />
                     ))
                  } 
                  <NoteItem 
                     isNew 
                     placeholder="Nova tag"
                     onChange={e => setNewTag(e.target.value)}
                     value={newTag}
                     onClick={handleAddTag}
                  /> 
               </div>
            </Section>

            <Button 
               title="Salvar"
               onClick={handleNewNote}
            />
         </Form>
        </main>
      </Container>
   )
}