import React from 'react'
import ReactDOM from 'react-dom/client'
// para compartilhar um tema para o app
import { ThemeProvider } from "styled-components"
// O nosso tema. Em nosso root mais abaixo, encapsulamos o conteúdo com o "<ThemeProvider>" e colocamos o "theme={theme}", para dessa forma compartilhar para todo o app o conteúdo da pasta "./styles/theme.js"
import theme from "./styles/theme"
import GlobalStyles from "./styles/global"
import { SignIn } from './pages/SignIn'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
