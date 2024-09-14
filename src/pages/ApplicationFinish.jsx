import React from 'react'
import { Link } from 'react-router-dom'

const ApplicationFinish = () => {
  return (
    <div>
        <div className='text-center mt-32 xl:mx-20 lg:mx-20 mx-12'>
            <h1 className='xl:text-6xl lg:text-6xl text-2xl'>Your admission request has been submitted. An email will be sent to you as soon as your admission is accepted. Thank you for choosing T.A.D<br/> Go back <Link className='text-blue-500' to="/">Home</Link></h1>
        </div>
    </div>
  )
}

export default ApplicationFinish