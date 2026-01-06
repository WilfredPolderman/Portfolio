import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from './navigation/Routing'
import { Navbar } from './navigation/Navbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="pt-16">
        <Routing />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
