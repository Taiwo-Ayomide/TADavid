import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const { id } = useParams(); // Get id from the URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [religion, setReligion] = useState("") 
  const [phone, setPhone] = useState("")
  const [state, setState] = useState("")
  
  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const user = { firstname, lastname, age, gender, religion, phone, state }

      if (firstname && lastname && age && gender && religion && phone && state) {
        axios.put(`https://tadbackend.onrender.com/user/update/${id}`, user)
        navigate(`/uploadPassport/${id}`)
      }
    } catch (error) {
      alert('Error in registration')
    } finally {
      setLoading(false)
    }
  }

  return (
    <fieldset>
      <div className='text-center mt-12'>
        <h1 className='text-blue-900 font-bold text-2xl'>Registration Form</h1>
      </div>
      <form onSubmit={handleForm}>
      <section className='flex justify-center p-4'>
      <aside className='w-full max-w-lg border-2 border-black rounded-lg p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='text-sm font-semibold' htmlFor="name">Firstname:</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="text"
              name="firstname"
              id="name"
              placeholder='John'
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <label className='text-sm font-semibold' htmlFor="email">Lastname:</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="text"
              name="lastname"
              id="lastname"
              placeholder='Joe'
              required
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
          <div>
            <label className='text-sm font-semibold' htmlFor="request">Age:</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="number"
              name="age"
              id="request"
              placeholder='Age'
              required
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label className='text-sm font-semibold' htmlFor="phone">Gender:</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="text"
              name="gender"
              id="gender"
              placeholder='Your Gender'
              required
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
          <div>
            <label className='text-sm font-semibold' htmlFor="request">Religion</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="text"
              name="religion"
              id="religion"
              placeholder='Religion'
              required
              onChange={(e) => setReligion(e.target.value)}
            />
          </div>
          <div>
            <label className='text-sm font-semibold' htmlFor="phone">Phone:</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="tel"
              name="phone"
              id="gender"
              placeholder='Mobile Number'
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
          <div>
            <label className='text-sm font-semibold' htmlFor="phone">State:</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="text"
              name="state"
              id="state"
              placeholder='State of Origin'
              required
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className='flex justify-end mt-6'>
            <input
              type="submit"
              value={loading ? "Loading..." : "Register"}  // Change the button text based on loading state
              disabled={loading}  // Disable the button while loading
              className='bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700'
            />
        </div>
      </aside>
    </section>
      </form>
    </fieldset>
  );
};

export default Register;
