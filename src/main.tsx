import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from './navigation/Routing'
import { Navbar } from './navigation/Navbar'
import { DarkModeProvider } from './context/DarkModeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </DarkModeProvider>
  </StrictMode>,
)
