import React from 'react'
import NavbarDefault from '../components/Navbar'
import Illustration from '../components/Illustration'
import Text from '../components/Text'
import Courses from '../components/Courses'
import Mission from '../components/Mission'
import Testimony from '../components/Testimony'
import Join from '../components/Join'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

const Home = () => {
  return (
    <div>
        <NavbarDefault/>
        <Illustration/>
        <Text/>
        <Courses/>
        <Mission/>
        <Testimony/>
        <Join/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default Home