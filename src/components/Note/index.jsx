import { Container } from './styles'
import { Tag } from '../../components/Tag'

export function Note({ data, ...rest }) {
   return (
      <Container {...rest}>
         <h1>{data.title}</h1>

         {
            data.tags && 
               <footer>
                  {
                     data.tags.map(tag => {
                        // in lists the key is recommended for application performance, react uses keys to render only what is needed. 
                        return <Tag key={tag.id} title={tag.name}/>
                     })
                  }
               </footer>
         }
      </Container>
   )
}