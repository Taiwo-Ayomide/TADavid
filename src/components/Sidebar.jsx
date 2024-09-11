import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 bg-gray-100 p-4 border-r border-gray-300'>
      <ul>
        <li>
          <a href="#" className='text-gray-600 hover:text-gray-800'>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className='text-gray-600 hover:text-gray-800'>
            Courses
          </a>
        </li>
        <li>
          <a href="#" className='text-gray-600 hover:text-gray-800'>
            Assignments
          </a>
        </li>
        <li>
          <a href="#" className='text-gray-600 hover:text-gray-800'>
            Grades
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar