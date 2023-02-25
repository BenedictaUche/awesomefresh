import React from "react";

const About = () => {
  return (
    <>
      <div className="py-12">
        <div className="container mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-between px-4">
          <div className="w-full lg:w-1/2 lg:text-left" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
            <h2 className="text-[#48852f] text-center text-4xl font-bold">
              About Awesome Fresh
            </h2>
            <img src="./images/vine.png" alt="a vine" className='mx-auto block mb-4' />
            <p className="text-black font-semibold w-[90%] text-lg mb-8">
              Awesome Fresh is an agricultural aggregation, logistics, and cold
              chain company, serving as a bridge between local food processors and
              manufacturers and smallholders farmers.<br /> <span className='text-[#fe8d34]'>Our mission </span>is to help the
              world and its people live healthier and happier by making food
              cheaper, fresher, nutritious, and accessible to the growing urban
              communities of the world, bringing innovation and organization in
              agriculture and food distribution.<br /> <span className='text-[#fe8d34]'>We envision </span>sustainably feeding
              over 900 million people daily by 2050 and serving humanity for more
              than 496 years to come.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="./images/hero1.jpg"
              alt="team"
              className="rounded-full mx-auto lg:mx-0 md:w-[550px] md:h-[500px] object-cover mt-6"
            />
          </div>
        </div>
      </div>
      <img src="./images/vine.png" alt="a vine" className='mx-auto block mb-4' />
    </>
  );
};

export default About;
