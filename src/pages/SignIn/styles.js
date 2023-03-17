import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
   height: 100vh;
   
   display: flex;
   align-items: stretch;
`

export const Form = styled.form`
   padding: 0 136px;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   text-align: center; 

   > h1 {
      font-size: 48px;
      color: ${({ theme }) => theme.COLORS.ORANGE};
   }

   > h2 {
      font-size: 24px;
      margin-top: 84px;
      margin-bottom: 24px;
   }

   > p {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
   }

   > a {
      margin-top: 124px;
      color: ${({ theme }) => theme.COLORS.ORANGE};
   }
 `

 export const Background = styled.div`
   flex: 1;
   // para pegar uma imagem importada de nossos arquivos é dessa forma com o cifrão quando estamos usando o styled component (pelo css) - to get a import image of our files is like this way
   background: url(${backgroundImg}) no-repeat center center;
   background-size: cover;
 `