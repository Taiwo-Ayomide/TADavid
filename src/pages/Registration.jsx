import React, { useState } from 'react';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [religion, setReligion] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [state, setState] = useState("")
  const [password, setPassword] = useState("")

  return (
    <fieldset>
      <div className='text-center mt-12'>
        <h1 className='text-blue-900 font-bold text-2xl'>Registration Form</h1>
      </div>
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
              onChange={(e) => setPhone(e.target.value)}
            />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
          <div>
            <label className='text-sm font-semibold' htmlFor="request">Email</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="email"
              name="email"
              id="request"
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className='text-sm font-semibold' htmlFor="phone">State:</label>
            <input
              className='border h-12 w-full outline-none px-4 mt-2'
              type="text"
              name="state"
              id="state"
              placeholder='State of Origin'
              onChange={(e) => setState(e.target.value)}
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

        <div className='flex justify-end mt-6'>
          <button
            type="submit"
            className='bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700'
          >
            Submit
          </button>
        </div>
      </aside>
    </section>
    </fieldset>
  );
};

export default Register;
