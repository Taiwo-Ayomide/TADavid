import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user profile data based on session
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/candidate'); // API to get user data from session
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
    <>
      <div className="flex justify-center">
        <div className="w-full xl:w-96 lg:w-96 h-auto px-12 py-12 rounded-lg bg-gray-200 border-blue-900 border-2 flex justify-center">
          <section className='block'>
            <div className='flex justify-center'>
              {/* Dynamically display the user's profile picture */}
              <img src={userData.profilePicture || 'defaultProfile.png'} className='w-20 rounded-full' alt="Profile" />
            </div>
            <div className='text-center'>
              {/* Dynamically display the user's name */}
              <h1 className='uppercase text-blue-900 text-xl font-bold'>{userData.firstname}{userData.lastname}</h1>
              {/* Display the user's class and status */}
              <p className='text-xs font-bold text-blue-900'>T.A.D BEGINNER'S CLASS</p>
              <p className='text-xs font-bold text-blue-900'>FREE TIER</p>
            </div>
          </section>
        </div>
      </div>
      <div className='w-auto h-auto px-12 py-12 bg-transparent border-blue-900 border-2 rounded-xl mt-12'>
        <h1 className='uppercase xl:text-4xl lg:text-4xl text-xl text-blue-900' style={{ fontFamily: 'impact' }}>Welcome to think and Design classs</h1>
        <p>Your journey to become a professional Graphic Designer starts here.</p>
      </div>
      <div>
        <h1 className='xl:text-2xl lg:text-2xl text-xl mt-12 font-serif'>
          Please download your Admission Letter here
        </h1>
      </div>
    </>
  );
};

export default ProfileCard;
