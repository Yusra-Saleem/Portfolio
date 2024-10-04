
"use client";

import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-center py-16 min-h-[70vh] bg-no-repeat bg-cover bg-center px-5 lg:p-10 background"
      style={{
        boxShadow: '0 8px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Profile Picture */}
      <div className="relative lg:mb-0 lg:mr-40 mt-18">
        <Image
          src="/profile.png" 
          alt="Profile Picture"
          width={500}
          height={500}
          className="rounded-full shadow-lg shadow-[#5c7590] object-cover transition-transform duration-300 ease-in-out hover:scale-95"
        />
      </div>

      {/* Text Section */}
      <div className="text-left text-[#002244] md:w-[800px] mt-10 mx-4 md:mt-0">
        <p className="text-lg md:text-2xl mt-2 font-semibold">Hello,</p>
        <h2 className="text-3xl md:text-5xl font-extrabold">
          I'm <span className="text-pink-400" style={{ textShadow: '2px 2px 2px #002244' }}>Yusra Saleem</span>
        </h2>
        <p className="text-lg md:text-2xl mt-2 font-medium">
          I am passionate about creating stunning web applications with a focus on responsive design, modern UI/UX, and clean code. Let&apos;s build something great together!
        </p>
        <p className="text-lg leading-relaxed mb-8 max-w-lg mx-auto"></p>

        <h2 className="text-2xl md:text-4xl font-bold text-indigo-800">
          <Typewriter
            options={{
              strings: ["Web Designer.", "Frontend Developer.", "UI/UX Designer.", "Full-Stack Developer.", "Digital Marketer."],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h2>

        {/* CTA Button */}
        <a
          href="/your-work" // Replace with your work link
          className="mt-6 inline-block bg-[#FFD700] text-[#1D1F21] font-bold border-2 border-[#002244] py-2 px-4 rounded transition-colors duration-300 hover:bg-[#FADADD] hover:shadow-lg"
        >
          Download CV 
        </a>
      </div>
    </section>
  );
};

export default HeroSection;


