import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Advice from './Advice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Advice />
  </StrictMode>,
)
