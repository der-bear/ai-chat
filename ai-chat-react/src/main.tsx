import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import CoreUI CSS and Icons
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/icons/css/all.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
