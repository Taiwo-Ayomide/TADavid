import React from 'react';
import { Link } from 'react-router-dom'

const Courses = () => {
    const classes = [
        {
            nature: "Beginners class",
            description: "A free seasoned and quarterly programme for those intending to start a career in Graphic Designing. The class focuses on the fundamentals of Graphic Designing.",
            linkText: "Register Here",
            ancor: '/register'
        },
        {
            nature: "Master class",
            description: "A paid class that focuses on more advanced concepts of graphic design and implementation. The class pays more attention to the rudiments of graphic designing.",
            linkText: "CLOSED",
            ancor: "/register"
        },
    ];

    return (
        <div className='w-full h-auto py-20 mt-12 bg-blue-900'>
            <div className='text-center'>
                <h1 className='text-green-300 font-bold text-2xl'>OUR COURSES</h1>
            </div>
            <section className='flex flex-wrap justify-evenly px-5 pb-10'>
                {classes.map((item, index) => (
                    <div 
                        key={index} 
                        className='w-full sm:w-96 bg-white mt-10 p-5 flex flex-col items-center'
                    >
                        <h1 className='font-bold text-xl uppercase text-blue-900'>{item.nature}</h1>
                        <p className='text-lg text-center pt-5'>{item.description}</p>
                        <Link to={item.ancor}>
                        <h1 className='font-semibold text-xl px-3 text-white bg-blue-900 mt-5 py-1'>{item.linkText}</h1>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Courses;
