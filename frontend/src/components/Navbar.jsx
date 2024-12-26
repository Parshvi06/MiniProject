'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import React, { useState } from 'react';

const Navbar = () => { 
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 bg-white">
        <nav className="relative  w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-2 md:px-2 lg:px-4 mx-auto">
          <div className="md:col-span-4">
            {/* Logo */}
            
            <Link href='/' className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80">
            <div className='flex justify-align '>
            <img src="https://i.pinimg.com/564x/fd/31/cd/fd31cd6b88cde40f062e890ea889d571.jpg" alt="WaggingTails Hub Logo" className="h-[15vh] w-[15vh] mr-2" /> 
            <span className="text-2xl font-bold text-lime-500 my-8 ">WaggingTails Hub</span>
            </div>
            

            </Link>
            {/* End Logo */}
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex md:hidden ms-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full md:flex md:items-center md:w-auto md:order-2 md:col-span-5  `}
          >
            <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-8 text-center md:text-left  ">
              <li>
                <Link
                  href="/explorePets"
                  className={`relative text-black text-xl font-bold hover:text-gray-600 focus:outline-none ${path === '/explorePets' ? 'text-black' : 'text-black'}`}
                >
                  Pet Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/addPet"
                  className="text-black font-bold text-xl hover:text-gray-600 focus:outline-none"
                >
                  Pet Addition
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-black font-bold text-xl hover:text-gray-600 focus:outline-none   focus:text-gray-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutUs"
                  className="text-black font-bold text-xl hover:text-gray-600 focus:outline-none"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black font-bold text-xl hover:text-gray-600 focus:outline-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Button Group */}
          <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
            <Link href="/signup" className="py-2 px-3 text-mb font-medium rounded-xl bg-black text-lime-400 border border-gray-300 hover:bg-lime-500 hover:text-white transition focus:outline-none">
              Sign Up
            </Link>
            <Link href="/login" className="py-2 px-3 text-mb font-medium rounded-xl bg-lime-400 text-black hover:bg-lime-500 transition focus:outline-none">
              Login
            </Link>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
    </>
  );
};

export default Navbar;
