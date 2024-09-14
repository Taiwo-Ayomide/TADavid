import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DashProfile = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user profile data based on session
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://tadbackend.onrender.com/user/candidate'); // API to get user data from session
        setUserData(response.data); // Assuming response.data contains the user profile info
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };
    fetchUserData();
  }, []);

  // Show loading if data is not yet fetched
  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h1 className="text-lg font-bold">Firstname</h1>
          <p className="text-gray-600">{userData.firstname}</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Lastname</h1>
          <p className="text-gray-600">{userData.lastname}</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Age</h1>
          <p className="text-gray-600">{userData.age}</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Gender</h1>
          <p className="text-gray-600">{userData.gender}</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Religion</h1>
          <p className="text-gray-600">{userData.religion}</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Phone</h1>
          <p className="text-gray-600">{userData.phone}</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Email</h1>
          <p className="text-gray-600">{userData.email}</p>
        </div>
        <div>
          <h1 className="text-lg font-bold">State of Origin</h1>
          <p className="text-gray-600">{userData.state}</p>
        </div>
      </div>
    </div>
  )
}

export default DashProfile
