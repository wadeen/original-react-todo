import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './destyle.css'
import App from './App'

import { CookiesProvider } from 'react-cookie'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
)
