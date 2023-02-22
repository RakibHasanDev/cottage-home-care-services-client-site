import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import navLogo from '../../../src/Assets/Images/Cottage Home.png'
import './Nav.css'


const NavBar = () => {
    const { pathname } = useLocation();

    const [navColor, setNavColor] = useState(false)

    useEffect(() => {

        if (pathname === '/contacts') {
            setNavColor(true)


        }


        else {
            setNavColor(false)
        }



    }, [pathname])

    // #49465D

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // top-0 z-50
    // #164273

    window.onscroll = function () { myFunction() };

    function myFunction() {
        if (window.scrollY > 5) {
            document.getElementById("navBar").className = "customColor";
        }
        if (window.scrollY < 5) {
            document.getElementById("navBar").className = "";
        }
    }

    return (
        <div className=" sticky top-0 z-50 roboto  " id='navBar'>
            <div className="px-4 pt-4 pb-6 mx-auto w-[95%]">
                <div className="relative flex items-center justify-between">
                    <NavLink
                        to='/'
                        aria-label="Learn With Programming"
                        title="Learn With Programming"
                        className="inline-flex items-center"
                    >
                      <div>
                      <div className='flex  items-center '>
                        <img src={navLogo} className='w-[90px] h-[90px] shadow-2xl p-2 border-2 border-primary rounded-full' alt="" />
                        <p className={` ml-4 text-lg md:text-3xl font-semibold tracking-wide text-[#00A6B2] transition-colors duration-200 `}>
                            Cottage Home Care Services     
                        </p>
                        </div> 
                        <hr className='mt-1 border-[1px] border-[#a5a4ad]' />
                        <p className='font-semibold text-base text-center text-[#49465D]'>We Care</p>
                        
                        </div>   
                        
                    </NavLink>

                    <ul className="flex items-center hidden space-x-6 lg:flex">
                        <li>
                            <NavLink
                                to='/home'
                                aria-label="Home"
                                title="Home"
                                className={`font-medium  text-lg  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white `}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/services'
                                aria-label="services"
                                title="services"
                                className={`font-medium  text-lg  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white `}
                            >
                                Services
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to='/contacts'
                                aria-label="Blog"
                                title="Blog"
                                className={`font-medium  text-lg  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white `}
                            >
                                Contact US
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to='/covid'
                                aria-label="Blog"
                                title="Blog"
                                className={`font-medium  text-lg  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white `}
                            >
                                Covid-19
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to='/hhaCertification'
                                aria-label="Blog"
                                title="Blog"
                                className={`font-medium  text-lg  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white `}
                            >
                                HHA Certification
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/resources'
                                aria-label="Blog"
                                title="Blog"
                                className={`font-medium  text-lg  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white `}
                            >
                                Resources
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                aria-label="Blog"
                                title="Blog"
                                className={`font-medium  text-lg  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white `}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                aria-label="Blog"
                                title="Blog"
                                className={`font-medium  text-lg  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white `}
                            >
                                <button className='bg-primary px-6 py-3 rounded-full text-white bg-hov2'>
                                    Get Home Care
                                </button>
                            </NavLink>
                        </li>
                    </ul>

                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline z-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-50">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <NavLink
                                                to='/'
                                                aria-label="Learn With Programming"
                                                title="Learn With Programming"
                                                className="inline-flex items-center"
                                            >
                                                <img src={navLogo} className='w-12' alt="" />
                                                <span className="ml-2 text-md  tracking-wide text-[#49465D] hover:text-blue-900">
                                                    Cottage Home Care Service
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>





                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to='/home'
                                                    aria-label="Home"
                                                    title="Home"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/services'
                                                    aria-label="services"
                                                    title="services"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Services
                                                </NavLink>
                                            </li>


                                            <li>
                                                <NavLink
                                                    to='/contacts'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Contact US
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to='/covid'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Covid-19
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to='/hhaCertification'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    HHA Certification
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/resources'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Resources
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/blog'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/blog'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>





                                        </ul>

                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavBar;