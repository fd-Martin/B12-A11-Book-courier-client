import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Routes/router.jsx'
import { RouterProvider } from 'react-router'
import { QueryClient, QueryClientContext, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './Context/AuthProvider.jsx'

const queryclient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryclient}>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </QueryClientProvider>,
)
