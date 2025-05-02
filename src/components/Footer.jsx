import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  //   useEffect(() => {
  //     gsap.from(footerRef.current, {
  //       y: 50,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //       delay: 0.3,
  //     });
  //   }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-r from-cyan-900 via-purple-900 to-indigo-900 text-slate-300 py-4 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:gap-6">
        {/* Left: Copyright */}
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Sudharsan M. All rights reserved.
        </p>

        {/* Center: Social Links */}
        <div className="flex space-x-6 text-xl md:text-2xl">
          <a
            href="https://linkedin.com/in/sudharsan6078"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/sudharsan6078"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/sudharsan6078"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        {/* Right: Contact Email */}
        <a
          href="mailto:sudharsan6078@gmail.com"
          className="text-sm md:text-base hover:text-cyan-400 transition-colors duration-300"
        >
          sudharsan6078@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
