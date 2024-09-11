import React from 'react'
import NavbarDefault from '../components/Navbar'
import Mission from '../components/Mission'
import Courses from '../components/Courses'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

const About = () => {
  return (
    <div>
        <NavbarDefault/>
        <Mission/>
        <Courses/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default About