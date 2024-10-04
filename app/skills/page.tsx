"use client";

import React, { useEffect, useState } from 'react';
import 'animate.css/animate.min.css'; // Importing animate.css for animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJsSquare, 
  faReact, 
  faNodeJs,
  faGit,
  faLinkedin,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faClipboardCheck, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faTrello , faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

// Skills Data
const skills = [
  { name: 'HTML', percentage: 95, icon: faHtml5 },
  { name: 'CSS', percentage: 85, icon: faCss3Alt },
  { name: 'JavaScript', percentage: 65, icon: faJsSquare },
  { name: 'React', percentage: 40, icon: faReact },
  { name: 'TypeScript', percentage: 87, icon: faCode },
  { name: 'Next.js', percentage: 70, icon: faNodeJs },
  { name: 'SEO', percentage: 85, icon: faChartLine },
  { name: 'Social Media Marketing', percentage: 75, icon: faClipboardCheck },
  { name: 'Email Marketing', percentage: 70, icon: faFigma },
];

// Development Tools Data
const devTools = [
  { name: 'Git', description: 'Version Control', icon: faGit },
  { name: 'Visual Studio Code', description: 'Code Editor', icon: faCode },
  { name: 'Postman', description: 'API Testing', icon: faClipboardCheck },
  { name: 'Figma', description: 'Design Tool', icon: faFigma },
  { name: 'Trello', description: 'Project Management', icon: faTrello },
  { name: 'Canva', description: 'Graphic Design', icon: faPaintBrush },
  { name: 'Google Analytics', description: 'Data Analytics', icon: faChartLine },
  { name: 'Google Tag Manager', description: 'Tag Management', icon: faChartLine },
];

// Social Links Data
const socialLinks = [
  { name: 'GitHub', icon: faGithub },
  { name: 'LinkedIn', icon: faLinkedin },
  { name: 'Twitter', icon: faTwitter },
];

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="min-h-screen bg-[#002244da] backdrop-blur-md p-10" style={{
      boxShadow: '0 8px 10px rgba(255 , 255 , 255 , 0.4)',
    }}>
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-[#E5E5E5] animate__animated animate__fadeInDown">
        My Skills
      </h1>

   
      
      {/* Skills Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {skills.map((skill, index) => (
    <div 
      key={index} 
      className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-100 hover:shadow-xl hover:shadow-gray-800 hover:scale-105"
    >
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={skill.icon} className="text-[#002244] cursor-pointer hover:text-[#EA9A96] text-3xl mr-3" />
        <h2 className="text-xl font-semibold text-[#002244]">{skill.name}</h2>
      </div>
      
      {/* Full-width Parent Div */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2 relative overflow-hidden">
        
        {/* Progress Bar with Filling Effect */}
        <div
          className={`bg-[#EA9A96] h-2.5 rounded-full transition-all duration-[1.8s] ease-in-out`}
          style={{ width: `${animate ? skill.percentage : 0}%` }}
        ></div>
      </div>
      
      {/* Percentage Text */}
      <p className="text-right font-medium text-[#002244]">{skill.percentage}%</p>
    </div>
  ))}
</div>


      {/* Development Tools Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mt-12 mb-6 text-[#E5E5E5] animate__animated animate__fadeInDown">
        Tools I Use
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {devTools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center bg-[#EA9A96] text-[#002244] cursor-pointer font-bold py-2 px-4 rounded-full shadow-lg transition-transform duration-300 hover:bg-[#ffe65be8] animate__animated animate__pulse hover:scale-105"
          >
            <FontAwesomeIcon icon={tool.icon} className="mr-2" />
            {tool.name}
          </div>
        ))}
      </div>

      {/* Social Links Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mt-12 mb-6 text-[#E5E5E5] animate__animated animate__fadeInDown">
        Social Applications
      </h2>
      <div className="flex justify-center gap-3">
        {socialLinks.map((link, index) => (
          <div
            key={index}
            className="flex items-center bg-[#EA9A96] text-white p-2 rounded-xl shadow-lg transition-transform duration-300 hover:bg-[#002244] cursor-pointer animate__animated animate__pulse hover:scale-105"
          >
            <FontAwesomeIcon icon={link.icon} className="mr-2" />
            {link.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
