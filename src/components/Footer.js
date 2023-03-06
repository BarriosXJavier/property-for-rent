import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='bg-black text-white py-1'>
        <section className='flex justify-center'>
          <div className='max-w-4xl w-full px-4'>
            <h3 className='text-lg text-center'>About Us</h3>
            <p className='text-sm text-center md:text-left'>Welcome to our website, where finding your ideal rental home or vacation spot is made easy. Our platform allows you to browse through properties, filter by location, price, and amenities, and connect with property owners or managers directly. Start your stress-free search today and find your dream home!</p>
          </div>
        </section>

        <div className='flex flex-col mx-auto my-2 text-center'>
          <div className="flex flex-row gap-x-9 py-2 mx-auto">
            <Link to='/pages/TermsOfService' color='inherit' underline='hover' className='cursor-pointer'>
              Terms of Service
            </Link>
            <Link to='/pages/PrivacyPolicy' color='inherit' underline='hover' className='cursor-pointer'>
              Privacy Policy
            </Link>
            <Link to='/pages/ContactUs' color='inherit' underline='hover' className='cursor-pointer'>
              Contact Us
            </Link>
          </div>
          <span className="pr-4">&copy; HouseForRentKe &nbsp;{new Date().getFullYear()}. All rights reserved</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
