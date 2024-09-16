import React, { useState, useEffect } from "react";
import { FaHome, FaBook, FaUser, FaClipboard, FaSignOutAlt } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import DashHome from "./DashHome";
import DashCourses from "./DashCourses";
import DashProfile from "./DashProfile";
import DashGrade from "./DashGrade";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [candidateData, setCandidateData] = useState(null);
  const navigate = useNavigate();

  // Mapping page names to components
  const pages = {
    Home: <DashHome />,
    Courses: <DashCourses />,
    Grades: <DashGrade />,
    Profile: <DashProfile />,
  };

  // Fetch candidate data on component mount
  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        const response = await axios.get('https://tadbackend.onrender.com/api/user/candidate');
        setCandidateData(response.data);
      } catch (err) {
        console.error('Error fetching candidate data:', err);
      }
    };
    fetchCandidateData();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post("https://tadbackend.onrender.com/api/user/logout", {}, { withCredentials: true });
      if (response.status === 200) {
        console.log("Logout successful");
        // Redirect or update UI after successful logout
        navigate("/login"); // Redirect to login page after logout
      }
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Overlay for mobile sidebar */}
      <div
        className={`fixed z-20 inset-0 bg-gray-800 bg-opacity-75 lg:hidden transition-opacity duration-300 ${sidebarOpen ? "block" : "hidden"}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`fixed lg:static z-30 inset-y-0 left-0 w-64 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out bg-blue-900 lg:translate-x-0`}>
        <div className="h-full flex flex-col justify-between p-4">
          <div>
            <h2 className="text-white text-xl font-bold mb-6">Student Dashboard</h2>
            <nav>
              <ul>
                {[
                  { name: "Home", icon: FaHome },
                  { name: "Courses", icon: FaBook },
                  { name: "Grades", icon: FaClipboard },
                  { name: "Profile", icon: FaUser },
                ].map((item) => (
                  <li key={item.name} className="mb-2">
                    <button
                      onClick={() => {
                        setActivePage(item.name);
                        setSidebarOpen(false); 
                      }}
                      className="flex items-center text-white py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
                    >
                      <item.icon className="mr-2" /> {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Logout Button */}
          <div>
            <button
              onClick={handleLogout}
              className="flex items-center text-white py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 shadow">
          <button
            className="lg:hidden text-blue-900"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold uppercase text-blue-900">{activePage}</h1>
        </div>

        {candidateData ? (
          <div>
            {/* Display Area */}
            <div className="flex-1 p-4">
              {pages[activePage]} {/* Render the page dynamically */}
            </div>
          </div>
        ) : (
          <p>Loading candidate data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
