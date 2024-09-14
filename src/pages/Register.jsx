import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    if (!email || !password) {
      alert('Please fill below fields')
    }

    try {
      const user = { email, password }

      if (email && password) {
        axios.post('https://tadbackend.onrender.com/user/signup', user)
        navigate('/mailConfirm')
      }
    } catch (error) {
      alert('Error in registration')
    } finally {
      setLoading(false)
    }
  }

  return (
    <fieldset>
      <div className='text-center mt-36'>
        <h1 className='text-blue-900 font-bold text-2xl'>Create Account</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <section className='flex justify-center p-4'>
          <aside className='w-full max-w-lg border-2 border-black rounded-lg p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='text-sm font-semibold' htmlFor="name">Email:</label>
                <input
                  className='border h-12 w-full outline-none px-4 mt-2'
                  type="email"
                  name="email"
                  id="mail"
                  placeholder='example@gmail.com'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className='text-sm font-semibold' htmlFor="password">Password:</label>
                <div className='relative'>
                  <input
                    className='border h-12 w-full outline-none px-4 mt-2'
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    id="password"
                    placeholder='Enter password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className='absolute right-3 top-4 text-sm text-gray-600'
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
            </div>
            <div className='pt-3'>
              <p className='font-serif'>
                Go back <Link className='text-blue-500' to="/">Here</Link>
              </p>
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
