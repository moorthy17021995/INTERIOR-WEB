import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Import the Router
import './index.css'
import App from './App.jsx'

// 2. Define the path for GitHub vs Localhost
const basename = import.meta.env.DEV ? '/' : '/INTERIOR-WEB';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 3. Wrap everything in the Router here */}
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)