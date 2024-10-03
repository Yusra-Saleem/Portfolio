import React from 'react';
import 'animate.css/animate.min.css'; // Importing animate.css for animations
import Image from 'next/image';
import Link from 'next/link'; // Import Link from 'next/link'

function About() {
  return (
    <section className="min-h-[80vh] text-[#002244] bg-[#E5E5E5] flex flex-col items-center justify-center p-8 md:p-12 lg:p-14">
      {/* Heading */}
      <div className="container mx-auto flex px-5 py-8 items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6" style={{ color: '#002244' }}>
          About Me
        </h1>
      </div>

      {/* Animated Profile Image */}
      <div className="lg:w-1/2 w-full flex justify-center md:justify-end animate__animated animate__fadeInLeft mb-8 lg:mb-0">
        <Image
          src="/profile.png" // Replace with your image path
          alt="Yusra Saleem"
          width={300}
          height={300}
          className="rounded-full shadow-lg transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Animated Text Section */}
      <div className="lg:w-1/2 w-full text-center lg:text-left mt-8 lg:mt-0 animate__animated animate__fadeInRight">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#133850] hover:text-sky-800 cursor-default">
          Hi, I'm Yusra Saleem
        </h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-medium mb-6 px-4 sm:px-8 lg:px-0">
          I am a passionate and dedicated Full Stack Developer with a strong focus on front-end technologies. Over the years, I've honed my skills in <span className="text-[#e58f8b] font-bold">HTML</span>, <span className="text-[#e58f8b] font-bold">CSS</span>, <span className="text-[#e58f8b] font-bold">JavaScript</span>, and <span className="text-[#e58f8b] font-bold">TypeScript</span>. I've expanded my expertise to modern frameworks such as <span className="text-[#e58f8b] font-bold">Next.js</span>, always striving to stay up-to-date with the latest technologies.
        </p>

        {/* Animated Button */}
        <Link
          href="/contact" // Adjust the link as necessary
          className="inline-block bg-[#EA9A96] text-[#002244] py-2 px-6 sm:py-3 sm:px-8 rounded-full font-bold hover:bg-[#FFD700] transition-colors duration-300 animate__animated animate__pulse animate__infinite"
        >
          Let's Connect
        </Link>
      </div>
    </section>
  );
}

export default About;
