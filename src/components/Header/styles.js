import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled.header`
   grid-area: header;
   height: 105px;
   width: 100%;
   border-bottom-width: 1px;
   border-bottom-style: solid;
   border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
   display: flex;
   justify-content: space-between;
   padding: 0 80px;
`
export const Profile = styled(Link)`
   display: flex;
   align-items: center;
   /* esse sinal de ">" é para garantir que vamos estilizar somente a img que está dentro de Profile */
   > img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
   }

   > div {
      display: flex;
      flex-direction: column; 
      margin-left: 16px;
      line-height: 24px;
      /* span dentro da div */
      span {
         font-size: 14px;
         color: ${({ theme }) => theme.COLORS.GRAY_100}
      }
      /* para strong dentro da div */
      strong {
         font-size: 18px;
         color: ${({ theme }) => theme.COLORS.WHITE}
      }
   }
`

export const Logout = styled.button`
   border: none;
   background: none;

   /* the imgs imported from react-icons are in svg format automatically */
   > svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 36px;
   }
`
