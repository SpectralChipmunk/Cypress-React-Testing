import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import CartStateProvider from "./context/CartContext";
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartStateProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartStateProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
