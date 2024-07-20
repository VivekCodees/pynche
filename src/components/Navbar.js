'use client'
import React,{useEffect, useState} from "react";
import Link from "next/link";
import Logo from "../assests/Logo.png";
import Image from "next/image";
const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return( 

    <nav className={`flex justify-between items-center fixed z-10 w-screen py-4 px-8 transition-colors duration-500 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="flex items-center">
        <div className=" rounded-full">
          <Image 
            src={Logo}
            alt="Logo"
            width='' 
            height=''
            className="w-full mt-4 h-16"
          />
        </div>
      </div>
      <div className="hidden md:flex pr-10 space-x-28 text-black">
        <Link href="/about">
          <span className="hover:text-gray-300">ABOUT US</span>
        </Link>
        <Link href="/events">
          <span className="hover:text-gray-300">EVENTS</span>
        </Link>
        <Link href="/contacts">
          <span className="hover:text-gray-300">CONTACTS</span>
        </Link>
        <Link href="/get-in-touch">
          <span className="border border-black px-4 w-full py-1 rounded-full hover:bg-white hover:text-blue-600">
            GET IN TOUCH
          </span>
        </Link>
      </div>
      <div className="md:hidden flex items-center ">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full mt-4 bg-black py-10 flex flex-col items-center  space-y-4 pt-4 text-white">
          <Link href="/about">
            <span className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>ABOUT US</span>
          </Link>
          <Link href="/events">
            <span className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>EVENTS</span>
          </Link>
          <Link href="/contacts">
            <span className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>CONTACTS</span>
          </Link>
          <Link href="/get-in-touch">
            <span className="border border-black px-4 w-full py-1 rounded-full hover:bg-white hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              GET IN TOUCH
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
