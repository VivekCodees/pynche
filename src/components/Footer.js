import Image from "next/image";
import React from "react";
import Logo from '../assests/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 md:py-16 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 className="text-xl md:text-2xl font-extrabold text-green-900">
          Tell us about yourself
        </h2>
        <ul className="mt-4 py-6 md:py-12 font-bold space-y-2 text-green-900">
          <li>About Us</li>
          <li>Our Mission</li>
          <li>Past Events</li>
          <li>Upcoming Events</li>
          <li>Contacts</li>
          <li>FAQ</li>
        </ul>
        <ul className="mt-4 space-y-2 font-bold text-green-900">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-green-900">
          Ready to subscribe to our Newsletter?
        </h2>
        <ul className="mt-8 md:mt-20 text-sm md:text-base font-bold space-y-2 text-green-900">
          <li>Instagram</li>
          <li>X</li>
          <li>Facebook</li>
        </ul>
        <div className="mt-8 md:mt-16 flex flex-col md:flex-row items-center md:items-start gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-b-2 border-green-900 px-4 py-2 w-full md:w-auto"
          />
          <button className="bg-white border border-black rounded-2xl font-semibold text-black h-10 px-6 py-2 cursor-pointer mt-4 md:mt-0">
            Sign up
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end">
        <Image
          src={Logo}
          alt="Logo"
          className="w-16 h-16 mt-8 md:mt-0"
        />
      </div>
    </div>
  </footer>
  );
};

export default Footer;
