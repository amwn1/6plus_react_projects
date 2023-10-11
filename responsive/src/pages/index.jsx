import React,{useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'

const index = () => {

  const[isOpen,setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
    <Sidebar isOpen={isOpen}/>
    <Navbar />
    </>
  )
}

export default index