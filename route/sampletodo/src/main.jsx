import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoProvider } from './context/TodoCT.jsx'
import { ThemeContextprovider } from './context/themeContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextprovider>
  <TodoProvider>
    <App/>
  </TodoProvider>
  </ThemeContextprovider>
)
