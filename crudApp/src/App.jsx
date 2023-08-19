import React from 'react'
import Navbar from './components/Navbar'
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlinePlusCircle} from 'react-icons/ai'
const App = () => {
  return (
    <div className=' max-w-[370px] mx-auto px-4'>
     <Navbar /> 
     <div className='flex gap-2'>
     <div className='flex relative items-center flex-grow'>
     <BiSearchAlt className=' ml-2 text-white absolute text-3xl position '/>
      <input type="text" className=' pl-10 text-white flex-grow bg-transparent border-white h-10 rounded-md border' />
     </div>
     
      <AiOutlinePlusCircle className='text-white cursor-pointer text-5xl '/>
      
     </div>
    </div>
  )
}

export default App
