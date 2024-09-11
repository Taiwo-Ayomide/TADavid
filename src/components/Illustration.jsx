import React from 'react'
import { Link } from 'react-router-dom'

const Illustration = () => {
  return (
    <div className='xl:ml-20 xl:mt-24 mt-10 xl:mr-32 mr-4 ml-4'>
      <h1 className='text-blue-900 xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl text-2xl font-bold w-auto' style={{ fontFamily: "Rockwell" }}>DO YOU HAVE A DREAM TO BECOME A GRAPHIC DESIGNER?</h1>
      <div className='xl:mt-14 mt-5'>
      <Link to='/register'>
        <button type='submit' className='bg-green-300 xl:w-96 lg:w-96 w-full px-5 py-3 rounded-lg text-blue-900 font-bold'>START HERE</button>
      </Link>
      </div>
    </div>
  )
}

export default Illustration