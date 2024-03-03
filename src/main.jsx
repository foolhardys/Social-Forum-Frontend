import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ActiveNavbarProvider } from './Context/ActiveNavbarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ActiveNavbarProvider>
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false} />
      <App />
    </BrowserRouter>
  </ActiveNavbarProvider>
  // </React.StrictMode>,
)
