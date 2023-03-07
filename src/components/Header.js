import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-4 md:py-6 mb-4 border-b'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        <div className='flex mt-4 md:mt-0 space-x-4 md:space-x-6 text-lg'>
          <Link
            to='/'
            className='hover:text-purple-700 transition-colors duration-200 focus:text-blue-500'
          >
            Home
          </Link>
          <Link
            to='./pages/About'
            className='hover:text-purple-700 transition-colors duration-200 focus:text-blue-500'
          >
            About
          </Link>
          <Link
            to='/pages/ContactUs'
            className='hover:text-purple-700 transition-colors duration-200 focus:text-blue-500'
          >
            Contact Us
          </Link>
          <Link
            to='/pages/Blogs'
            className='hover:text-purple-700 transition-colors duration-200 focus:text-blue-500'
          >
            Blogs
          </Link>
        </div>
        <div className='flex items-center gap-4 md:gap-6 mt-4 md:mt-0'>
          <Link
            className='hover:text-violet-900 transition'
            to='/pages/LogInForm'
          >
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg transition'
            to='/pages/SignUpForm'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
