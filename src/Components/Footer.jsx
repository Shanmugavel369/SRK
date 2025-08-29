import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#007BFF] text-white pt-10 pb-5">
      <div className="container mx-auto px-6">
        {/* 3 Col Layout */}
        <div className="flex flex-col md:flex-row md:items-start items-center justify-between">
          {/* Left: Logo + Name */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/assets/SRK-logo-White.png"
              alt="Logo"
              className="h-40 w-60 object-contain"
            />
          </div>

          {/* Center: Paragraph */}
          <div className="md:w-2/4 text-center md:text-left text-lg mb-8 md:mb-0">
            <p>
              Sharath Ravikumar is the founder of Webboombaa.org, an
              award-winning digital marketing agency based in Chennai.
              Recognized as one of the leading voices in the digital marketing
              space, he is a trusted consultant, accomplished author,
              sought-after trainer, and impactful speaker. A true digital
              strategist, Sharath blends innovation with insight to help brands
              grow and stay ahead in the ever-evolving digital landscape.
            </p>
          </div>

          {/* Right: Social Media */}
          <div className="flex space-x-4">
            {/* Use circular buttons */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-blue-400 text-white shadow-xl rounded-full w-9 h-9 flex items-center justify-center transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-blue-700 text-white shadow-xl rounded-full w-9 h-9 flex items-center justify-center transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-8 pt-5 border-t border-white border-opacity-10 text-xs text-gray-300">
          <div>
            &copy; {new Date().getFullYear()} Copyright - 2025 by Sharath
            Ravikumar
          </div>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
