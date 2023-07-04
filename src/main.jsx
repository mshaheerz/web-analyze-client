import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

axios.defaults.baseURL='https://api-anlyz.onrender.com/'
axios.defaults.withCredentials =true

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
