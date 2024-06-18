import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routers from './router/index.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './QueryClaint/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routers>
          <App />
        </Routers>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
