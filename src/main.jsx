import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Context from './Context/Context.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <App />
    </Context>,
  </StrictMode>,
)
