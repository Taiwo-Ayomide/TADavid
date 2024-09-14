import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/login', { email, password });
      if (response.status === 200) {
        // Store user session data if needed (optional)
        navigate('/dashboard'); // Redirect to dashboard after successful login
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError('Wrong email');
      } else if (err.response && err.response.status === 401) {
        setError('Wrong password');
      } else {
        setError('Server error');
      }
    }
  };

  return (
    <fieldset>
      <div className='text-center mt-36'>
        <h1 className='text-blue-900 font-bold text-2xl'>T.A.D STUDENT LOGIN</h1>
      </div>
      <form onSubmit={handleLogin}>
      <section className='flex justify-center p-4'>
        <aside className='w-full max-w-lg border-2 border-black rounded-lg p-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='text-sm font-semibold' htmlFor="name">Email:</label>
              <input
                className='border h-12 w-full outline-none px-4 mt-2'
                type="email"
                name="email"
                id="main"
                placeholder='you@example.com'
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
              Go back to homepage <Link className='text-blue-500' to="/">Here</Link>
            </p>
          </div>
          <div className='flex justify-end mt-6'>
            <button
              type="submit"
              className='bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700'
            >
              Login
            </button>
          </div>
          {error && <p>{error}</p>}
        </aside>
      </section>
      </form>
    </fieldset>
  );
};

export default Login;
