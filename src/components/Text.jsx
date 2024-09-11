import React from 'react'
import { Link } from 'react-router-dom'

const Text = () => {
  return (
    <div className='text-center xl:mx-40 mx-8 xl:mt-40 mt-24'>
        <h1 className='text-3xl text-blue-900 font-semibold' style={{ fontFamily: 'Arial' }}> A specialist institution whose mission is to equip creative minds with graphic design abilities that are relevant to the industry.</h1>
        <div className='xl:mt-12 mt-5'>
          <Link to="/register">
            <button type='submit' className='bg-green-300 xl:w-96 lg:w-96 w-full px-5 py-3 rounded-lg text-blue-900 font-bold hover:bg-black hover:text-white'>REGISTER NOW</button>
          </Link>
        </div>
    </div>
  )
}

export default Text