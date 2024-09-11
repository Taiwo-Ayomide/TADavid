import React from 'react'

const ProfileCard = () => {
  return (
    <>
    <div className="flex justify-center">
        <div className="w-96 h-auto px-12 py-12 rounded-lg bg-gray-200 border-blue-900 border-2 flex justify-center">
            <section className='block'>
                <div className='flex justify-center'>
                    <img src="Flicks.png" className='w-20 rounded-full' alt="" />
                </div>
                <div className='text-center'>
                    <h1 className='uppercase text-blue-900 text-xl font-bold'>taiwo ayomide</h1>
                    <p className='text-xs font-bold text-blue-900'>T.A.D BEGINNERS CLASS</p>
                    <p className='text-xs font-bold text-blue-900'>ADMITTED</p>
                </div>
            </section>
        </div>
    </div>
    <div className='w-auto h-auto px-12 py-12 bg-transparent border-blue-900 border-2 rounded-xl mt-12'>
        <h1 className='uppercase xl:text-4xl lg:text-4xl text-xl text-blue-900' style={{ fontFamily: 'impact' }}>Welcome to Think and design class</h1>
        <p>Your journey to become a professional Graphic Designer starts here.</p>
    </div>
    <div>
        <h1 className='xl:text-2xl lg:text-2xl text-xl mt-12 font-serif'>
            Please download your Admission Letter here
        </h1>
    </div>
    </>

  )
}

export default ProfileCard