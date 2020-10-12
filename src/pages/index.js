import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

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
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <Services />
    <InfoSection {...homeObjThree}/>
    <Footer />
   </>
  )
}

export default Home
