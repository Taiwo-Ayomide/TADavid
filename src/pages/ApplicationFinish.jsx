import React from 'react'
import { Link } from 'react-router-dom'

const ApplicationFinish = () => {
  return (
    <div>
        <div className='text-center mt-32 xl:mx-20 lg:mx-20 mx-12'>
            <h1 className='xl:text-6xl lg:text-6xl text-2xl'>Your application has been recieved. Kindly await a message from us about your admission status. Thanks for choosing T.A.D. <br/> Go back <Link className='text-blue-500' to="/">Home</Link></h1>
        </div>
    </div>
  )
}

export default ApplicationFinish