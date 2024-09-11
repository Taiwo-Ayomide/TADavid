import React from 'react'

const DashProfile = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h1 className="text-lg font-bold">Firstname</h1>
          <p className="text-gray-600">Ayomide</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Lastname</h1>
          <p className="text-gray-600">Taiwo</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Age</h1>
          <p className="text-gray-600">12</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Gender</h1>
          <p className="text-gray-600">Male</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Religion</h1>
          <p className="text-gray-600">Christian</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Phone</h1>
          <p className="text-gray-600">08141242512</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Email</h1>
          <p className="text-gray-600">taiwoayomide202@gmail.com</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">State of Origin</h1>
          <p className="text-gray-600">Osun</p>
        </div>
      </div>
    </div>
  )
}

export default DashProfile
