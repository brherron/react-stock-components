import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
   <>
    <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
    <Navbar toggleIsOpen={toggleIsOpen} />
    <Hero />
   </>
  )
}

export default Home
