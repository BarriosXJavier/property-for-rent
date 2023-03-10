import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Blogs from './pages/Blogs';
import SignUpForm from './pages/SignUpForm'
import LogInForm from './pages/LogInForm';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SignUpOrLogin from './pages/SignUpOrLogin';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        <Route path='/pages/About' element={<About />} />
        <Route path='/pages/ContactUs' element={<ContactUs />} />
        <Route path='/pages/Blogs' element={<Blogs />} />
        <Route path='/pages/SignUpForm' element={<SignUpForm />} />
        <Route path='/pages/LogInForm' element={<LogInForm />} />
        <Route path='/pages/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/pages/TermsOfService' element={<TermsOfService />} />
        <Route path='/pages/SignUpOrLogin' element={<SignUpOrLogin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
