import React, { useState, useEffect } from 'react';
import { FaUser, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom for navigation

const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Student Login', url: '/login' },
    { title: 'Apply Now', url: '/register' },
    { title: 'Contact', url: '/contact' }
];

const iconList = [
    { icon: <FaUser /> },
    { icon: <FaHeart /> },
];

const bgColor = 'bg-white'; 
const modalColor = 'bg-white';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleBarsIconClick = () => {
        toggleModal();
    };

    return (
        <>
            {!isMobile ? (
                // Laptop Navbar Code
                <nav className={`h-auto ${bgColor} border-b-2`}>
                    <div className="flex justify-between mx-auto items-center py-4 px-24">
                        <div className="text-blue-900 font-bold text-xl">THINK AND DESIGN</div>
                        <ul className="flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
                            {navLinks.map((link, index) => (
                                <li key={index} className="text-blue-900 font-bold text-sm">
                                    <Link to={link.url}>{link.title}</Link>  {/* Make links clickable */}
                                </li>
                            ))}
                        </ul>
                        <ul className="flex text-blue-900 gap-6 font-bold items-center cursor-pointer">
                            {iconList.map((item, index) => (
                                <div key={index}>{item.icon}</div>
                            ))}
                        </ul>
                    </div>
                </nav>
            ) : (
                // Mobile Navbar Code
                <nav className={`h-auto ${bgColor} py-4 px-4 border-b-2`}>
                    <div className="mx-auto flex justify-between items-center ">
                        <div className="text-blue-900 font-bold text-xl">THINK AND DESIGN</div>
                        <div className="flex justify-end items-center font-bold gap-6 text-blue-900 cursor-pointer">
                            {iconList.map((item, index) => (
                                <div key={index} onClick={index === iconList.length - 1 ? handleBarsIconClick : null}>{item.icon}</div>
                            ))}
                            <FaBars onClick={handleBarsIconClick} className="text-blue-900 cursor-pointer" />
                        </div>
                    </div>
                    {showModal && (
                        <div className="fixed inset-0 flex justify-center items-center">
                            <div className={`absolute inset-0 ${modalColor}`} />
                            <FaTimes
                                className="absolute top-6 right-4 text-blue-900 cursor-pointer"
                                onClick={toggleModal}
                                style={{ fontSize: '16px' }}
                            />
                            <div className="relative text-white w-full">
                                <div className="flex flex-col gap-8 items-center justify-center h-full">
                                    {navLinks.map((link, index) => (
                                        <span key={index} className="text-blue-900 font-bold text-2xl cursor-pointer">
                                            <Link to={link.url} onClick={toggleModal}>{link.title}</Link>  {/* Make modal links clickable */}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    );
}

export default Navbar;
