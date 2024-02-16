import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Footer from './componates/Footer.jsx'
import Home from './componates/Home.jsx'
import About from './componates/About.jsx'
import Contact from './componates/Contact.jsx'
import User from './componates/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Footer' element={<Footer/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/User/:id' element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
