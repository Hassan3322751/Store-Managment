import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Context from './Context/Context.jsx'
import { AuthProvider } from './Context/Auth.jsx'
import { ToastContainer } from 'react-toastify';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <AuthProvider>
        <App />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AuthProvider>
    </Context>,
  </StrictMode>,
)
