"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
  onClick?: () => void;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className = "", onClick }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`} onClick={onClick}>
      {title}
      <span
        className={`h-[1.9px] inline-block w-0 absolute bg-[#FFD700] left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Menu Open/Close Function
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // This will toggle between opening and closing
  };


  // Explicitly Close Menu Function
  const closeMenu = () => {
    setIsMenuOpen(false); // This ensures the menu closes explicitly
  };

  useEffect(() => {
    // Close the menu when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      if (menu && isMenuOpen && !menu.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Close the menu when resizing above 768px
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full flex justify-between items-center h-[80px] px-5 sm:px-10 bg-[#002244] z-50 sticky top-0 text-white py-4 shadow-lg" style={{
      boxShadow: '0 8px 10px rgba(255 , 255 , 255 , 0.2)',
    }}>
      <div className="flex items-center">
        <span className="absolute text-5xl font-serif text-white font-extrabold typing-effect">{`{YS}`}</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:justify-center flex-grow items-center">
        <CustomLink href="/" title="Home" className="mr-8" onClick={closeMenu} />
        <CustomLink href="/about" title="About" className="mx-8" onClick={closeMenu} />
        <CustomLink href="/skills" title="Skills" className="mx-8" onClick={closeMenu} />
        <CustomLink href="/projects" title="Projects" className="mx-8" onClick={closeMenu} />
        <CustomLink href="/contact" title="Contact" className="ml-8" onClick={closeMenu} />
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          id="mobile-menu"
          className="fixed top-0 right-[-6px] h-auto w-[62vw] bg-[#002244b0] backdrop-blur-lg shadow-lg flex flex-col p-4 pt-8 mt-[80px] rounded-lg items-center"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CustomLink href="/" title="Home" className="px-5 py-2" onClick={closeMenu} />
          <CustomLink href="/about" title="About" className="px-5 py-2" onClick={closeMenu} />
          <CustomLink href="/skills" title="Skills" className="px-5 py-2" onClick={closeMenu} />
          <CustomLink href="/projects" title="Projects" className="px-5 py-2" onClick={closeMenu} />
          <CustomLink href="/contact" title="Contact" className="px-5 py-2" onClick={closeMenu} />

          {/* Social Media Icons for Mobile Menu */}
          <div className="flex justify-center gap-6 my-7 px-5 ">
            {[
              { href: "https://www.linkedin.com/in/yusrasaleem-developer", icon: faLinkedin, color: "#0A66C2" },
              { href: "https://github.com/Yusra-Saleem", icon: faGithub, color: "#3d3d3d" },
              { href: "https://x.com/Yusra96215", icon: faTwitter, color: "#1DA1F2" },
              { href: "https://www.instagram.com/yusra_saleem_official/", icon: faInstagram, color: "#E1306C" },
            ].map((social) => (
              <motion.div key={social.href} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                <Link href={social.href} target="_blank">
                  <FontAwesomeIcon
                    icon={social.icon}
                    size="2x"
                    className={`bg-white rounded-lg transition-colors duration-100 shadow-[0px_0px_4px_2px_rgba(255,255,255,1)]`}
                    style={{ color: social.color }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      )}

      {/* Social Media Icons for Desktop */}
      <nav className="hidden md:flex gap-6">
        {[
          { href: "https://www.linkedin.com/in/yusrasaleem-developer", icon: faLinkedin, color: "#0A66C2" },
          { href: "https://github.com/Yusra-Saleem", icon: faGithub, color: "#3d3d3d" },
          { href: "https://x.com/Yusra96215", icon: faTwitter, color: "#1DA1F2" },
          { href: "https://www.instagram.com/yusra_saleem_official/", icon: faInstagram, color: "#E1306C" },
        ].map((social) => (
          <motion.div key={social.href} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
            <Link href={social.href} target="_blank">
              <FontAwesomeIcon
                icon={social.icon}
                size="2x"
                className={`bg-white rounded-lg transition-colors duration-100 shadow-[0px_0px_4px_2px_rgba(255,255,255,1)]`}
                style={{ color: social.color }}
              />
            </Link>
          </motion.div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
