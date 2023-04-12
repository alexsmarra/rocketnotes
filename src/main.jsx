import React from 'react'
import ReactDOM from 'react-dom/client'
// para compartilhar um tema para o app
import { ThemeProvider } from "styled-components"
// O nosso tema. Em nosso root mais abaixo, encapsulamos o conteúdo com o "<ThemeProvider>" e colocamos o "theme={theme}", para dessa forma compartilhar para todo o app o conteúdo da pasta "./styles/theme.js"

// to routes (para ficar com as rotas auth e app automatizadas)
import { MyContext } from './myContext'

import theme from "./styles/theme"
import GlobalStyles from "./styles/global"
import { Routes } from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <MyContext.Provider value={{ email: 'alexsmarra@gmail.com' }}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
