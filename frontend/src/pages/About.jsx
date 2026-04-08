import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted healthcare companion designed to
            make doctor appointments simple, fast, and stress-free. Our platform
            connects patients with experienced and verified medical
            professionals across a wide range of specialties, helping users book
            appointments conveniently from anywhere, anytime.
          </p>
          <p>
            At Prescripto, our mission is to bridge the gap between patients and
            quality healthcare services through modern technology. We aim to
            provide a smooth digital experience where users can easily search
            doctors, check availability, and schedule appointments without the
            usual hassle of long waiting times and complicated processes.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            At Prescripto, our vision is to make healthcare simple, accessible,
            and trustworthy for everyone by connecting patients with the right
            doctors through a seamless digital experience.
          </p>
        </div>
      </div>
      <div>
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Efficient appointment scheduling with quick doctor discovery, real-time availability, and a smooth booking process that saves valuable time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenienve:</b>
          <p>Book appointments anytime, anywhere with an easy-to-use platform designed to make healthcare access simple and stress-free.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Personalized healthcare experiences that help patients connect with the right specialists based on their unique needs and preferences.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
