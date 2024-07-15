import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import './App.css'

//Creating routes for different pages 
const router = createBrowserRouter([
  {
    path: '/',
  element: <div><Login /></div>
},

{
  path: '/Dashboard',
  element: <div><Dashboard /></div>
  
},
{
  path: '/Register',
  element: <div><Register /></div>
}
])

// creating functin for App.jsx

function App() {
 

  return (
   <div>
   <RouterProvider router={router} />


   </div>
  )
}

export default App
