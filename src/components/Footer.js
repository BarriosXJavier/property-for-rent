import React from 'react';
import { Link } from '@mui/material';

const Footer = () => {
  return (
    <>
      <footer className='bg-black text-white py-4'>
        <section className='flex justify-center'>
          <div className='w-2/5 text-center'>
            <h3 className='text-lg'>About Us</h3>
            <p className='text-sm'>Welcome to our website, where finding your ideal rental home or vacation spot is made easy. Our platform allows you to browse through properties, filter by location, price, and amenities, and connect with property owners or managers directly. Start your stress-free search today and find your dream home!</p>
          </div>
        </section>
        <section className='flex'>
          <div className='flex justify-between mx-auto my-4 gap-x-8'>
            <span>Copyright&copy; HouseForRentKe <span>{new Date().getFullYear()}</span>. All rights reserved.</span>
            <span><Link to='/'color='inherit' underline='hover'className='cursor-pointer'>Terms of Service</Link></span>
            <span><Link to='/'color='inherit' underline='hover'className='cursor-pointer'>Privacy Policy</Link></span>
            <span><Link to=''color='inherit' underline='hover'className='cursor-pointer' href='../pages/ContactUs'>Contact Us</Link></span>
          </div> 
        </section> 
      </footer>
    </>
  );
};

export default Footer;
