import React from "react"
import { Link } from 'react-router-dom'

const Join = () => {
    return (
        <div className=" w-full h-auto bg-blue-900 py-24 text-center px-5">
            <h1 className="text-white text-4xl">Do you want to give it a try?<br/>Click the button below to register</h1>
            <div className="mt-12">
                <Link to="/register">
                    <button type='submit' className='bg-green-300 xl:w-96 lg:w-96 w-full px-5 py-3 rounded-lg text-blue-900 font-bold'>START APPLICATION</button>
                </Link>
            </div>
        </div>
    )
}

export default Join