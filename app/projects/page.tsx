
"use client";

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css/animate.min.css';

// Main Projects Data
const projects = [
  {
    title: "Resme-Builder App",
    description: "A full-stack e-commerce application built with Next.js and MongoDB.",
    image: "/project-assets/project-resume.png", // Add the correct image path
    github: "https://github.com/Yusra-Saleem/GIAIC-Hackathon-project-3-4-5",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my skills and projects.",
    image: "/project-assets/project-portfolio.png", // Add the correct image path
    github: "https://github.com/your-repo/portfolio",
  },
  {
    title: "Password Generator App",
    description: "An application to preview HTML code live.",
    image: "/project-assets/Project-password.png", // Add the correct image path
    github: "https://github.com/Yusra-Saleem/Password-Generator-App",
  },
  {
    title: "Currency Converter App",
    description: "A simple currency converter using exchange rates.",
    image: "/project-assets/project-currency.png", // Add the correct image path
    github: "https://github.com/Yusra-Saleem/Currency-Converter-App",
  },
];

// Additional Projects Data
const additionalProjects = [
  {
    title: "Countdown Timer App",
    description: "A simple countdown timer application.",
    image: "/project-assets/project-countdown.png", // Add the correct image path
    github: "https://github.com/Yusra-Saleem/Countdown-Timer",
  },

  {
    title: "Unit Conversion Component",
    description: "A React component for converting between different units.",
    image: "/project-assets/project-unit.png", // Add the correct image path
    github: "https://github.com/Yusra-Saleem/Unit-Converter-App",
  },
  
  // Add more projects as needed
];

// Projects component
const Projects: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!isClient) {
    return null; // Prevent SSR issues with the Slider
  }

  return (
    <section className="min-h-screen bg-[#fcc1c1] p-10 flex flex-col justify-center items-center ">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#002244] animate__animated animate__fadeInDown">
        My Projects
      </h1>

      {/* Main Projects Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-7 w-[80vw] md:mx-12 lg:mx-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform h-60% sm:h-[60%] md:h-[80%] lg:h-[65%] hover:scale-105 animate__animated animate__fadeIn"
          >
            <Image src={project.image} alt={project.title} width={400} height={250} className="w-[100%] md:w-[100%] h-50% sm:h-[40%] md:h-[45%] lg:h-[55%]  object-fill" />
            <div className="px-4 pt-4">
              <h2 className="text-xl font-bold text-[#002244]">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <Link href={project.github} target="_blank">
                <button className="mt-4 mb-4 bg-[#EA9A96] text-white px-4 py-2 rounded-md transition-colors hover:bg-[#FFD700]">
                  View on GitHub
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Projects Carousel */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#002244] animate__animated animate__fadeInDown">
        More All Projects
      </h2>
      <div className="flex justify-center ">
      <Slider {...settings} className="mt-8 w-[70vw] lg:w-[30vw]  ">
        {additionalProjects.map((project, index) => (
          <div key={index} className="p-1 md:p-4">
            <div className="bg-white rounded-lg  shadow-lg overflow-hidden  transition-transform transform hover:scale-105 animate__animated animate__fadeIn">
              <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-[30vh] object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#002244]">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <Link href={project.github} target="_blank">
                  <button className="mt-4 bg-[#EA9A96] text-white px-4 py-2 rounded-md transition-colors hover:bg-[#FFD700]">
                    View on GitHub
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
};

export default Projects;
