'use client';

import React from 'react';
import 'animate.css/animate.min.css'; // Importing animate.css for animations


function Contact() {
  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 bg-blue-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative animate__animated animate__fadeInLeft">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7238.412463830607!2d67.2069712!3d24.890946100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1727828129051!5m2!1sen!2s"
            style={{ filter: 'contrast(1.2) opacity(0.4)' }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Khayaban e Muhammad Block-A house no# L-11 malir, karachi</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-[#143859] font-medium leading-relaxed">yusrasaleem679@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">+92310-2983718</p>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 md:px-5 bg-[#c8ced4] font-medium rounded-lg text-base py-4 px-8 mt-8 md:mt-0 animate__animated animate__fadeInRight">
          <h2 className="text-[#002244] text-xl mb-1 font-semibold text-center title-font">CONTACT</h2> 
          <p className="leading-relaxed mb-5 text-gray-600">Feel Free to Contact me anytime and I will get back to you as soon as possible </p>
          
          {/* Input Fields */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300  focus:border-blue-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300  focus:border-blue-900 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            className="text-white bg-[#002244] border-0 py-2 px-6 focus:outline-none hover:bg-[#dc9e9a] rounded text-lg animate__animated animate__fadeInBack animate__infinite"
            onClick={() => alert('Message Sent!')}
          >
            Send Message
          </button>
         
      </div>
      </div>
    </section>
  );
};

export default Contact;

