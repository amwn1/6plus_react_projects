import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages'

function App() {
  

  return (
      <Router>
        <Home/>
       </Router>
   
  )
}



export default App

