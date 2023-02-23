import React from "react";

import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function ContactUs() {
  return (
    <>
      <section className="h-full max-h-[640px] mb-8 xl:mb-24">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <p className="max-w-[480px] mb-8 text-md">
            We're here to assist you with any questions or concerns you may
            have. If you need help with our platform, have suggestions for
            improvement, or want to learn more about our advertising
            opportunities, please don't hesitate to reach out to us using the
            contact information provided below. We value your feedback and
            appreciate your support. We look forward to hearing from you!
          </p>
        </div>
        <div className=" flex flex-row space-x-9">
          <Link to='/'>
            <TwitterIcon  /> twitter
          </Link>
          <Link to='/'>
            <FacebookIcon /> facebook
          </Link>
          <Link to='/'>
            <EmailIcon /> email
          </Link>
          <Link to='/'>
            <WhatsAppIcon /> WhatsApp
          </Link>
        </div>
      </section>
      
    </>
  );
}

export default ContactUs;
