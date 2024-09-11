import React from 'react'

const Mission = () => {
  return (
    <>
        <div className="mt-32 text-center">
            <h1 className='text-4xl font-bold text-blue-900'>Mission, Vision and Values</h1>
        </div>
        <section className="pt-14">
            <div className="w-full h-auto px-4 py-8 lg:px-24 bg-white border-y-2 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/3 font-bold text-xl">Our Mission</div>
                <div className="lg:w-2/3 text-xl mt-4 lg:mt-0 lg:ml-8 text-center lg:text-left">
                To provide top-quality, hands-on education in graphic design, empowering students with the skills, creativity, and confidence needed to thrive in the design industry.
                </div>
            </div>
            <div className="w-full h-auto px-4 py-8 lg:px-24 bg-blue-100 border-y-2 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/3 font-bold text-xl">Our Vision</div>
                <div className="lg:w-2/3 text-xl mt-4 lg:mt-0 lg:ml-8 text-center lg:text-left">
                To be a leading institution recognized globally for shaping the future of graphic design by cultivating innovative and creative professionals who inspire change through design.
                </div>
            </div>
            <div className="w-full h-auto px-4 py-8 lg:px-24 bg-white border-y-2 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/3 font-bold text-xl">Our Values</div>
                <div className="lg:w-2/3 text-xl mt-4 lg:mt-0 lg:ml-8 text-center lg:text-left">
                Embracing new technologies and trends to stay ahead in design education.
                </div>
            </div>
        </section>
    </>
  )
}

export default Mission