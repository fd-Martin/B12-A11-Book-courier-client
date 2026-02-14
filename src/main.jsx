import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Routes/router.jsx'
import { RouterProvider } from 'react-router'
import { QueryClientContext } from '@tanstack/react-query'

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={QueryClientContext}>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </QueryClientProvider>,
)
