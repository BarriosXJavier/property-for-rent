import React from "react";

import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

function AboutBanner() {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">House hunting</span> made easy!
          </h1>
          <p className="max-w-[480px] mb-8">
            Our platform is dedicated to simplifying the home search process for
            renters and owners alike. With powerful search capabilities and an
            intuitive user interface, finding the perfect place to call home has
            never been easier. Additionally, property owners can take advantage
            of our advertising opportunities to reach a wider audience. Thank
            you for choosing our website as your trusted source for all your
            home search needs.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
}

export default AboutBanner;
