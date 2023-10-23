
import styled from 'styled-components'
import './App.css'

import {BrowserRouter as Router} from 'react-router-dom'

import Home from './pages'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  

  return (
    <Router>
        <Home/> 
       </Router>
   
  )
}



export default App

