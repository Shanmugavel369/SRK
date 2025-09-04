import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, color: "#050505ff" },
  };

  return (
    <motion.header
      key="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ease-in-out ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      } text-gray-900`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left Logo */}
        <Link to="/">
        <img
          src="/assets/SRK-logo.png"
          alt="SRK Logo"
          className="h-16 w-auto object-contain cursor-pointer"
          draggable={false}
        />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg text-gray-900">
          <Link to="/" className="text-black hover:text-blue-600 mr-8">
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/about" className="text-black hover:text-blue-600 transition-colors">
              About
            </Link>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg origin-top"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                >
                  <motion.ul className="flex flex-col text-sm p-2 space-y-2 text-gray-900">
                    <motion.li
                      key="who-we-are"
                      variants={itemVariants}
                      whileHover="hover"
                      className="cursor-pointer p-2 rounded"
                    >
                      <Link to="/about" className="block hover:text-blue-600 transition-colors">
                        Who We Are
                      </Link>
                    </motion.li>
                    <motion.li
                      key="clients"
                      variants={itemVariants}
                      whileHover="hover"
                      className="cursor-pointer p-2 rounded"
                    >
                      <Link to="/clients" className="block hover:text-blue-600 transition-colors">
                        Clients
                      </Link>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/consult" className="text-black hover:text-blue-600">
            Consult Sharath
          </Link>

          {/* Brands Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setBrandsDropdownOpen(true)}
            onMouseLeave={() => setBrandsDropdownOpen(false)}
          >
            <span className="cursor-pointer text-black hover:text-blue-600 transition-colors select-none">
              Brands
            </span>

            <AnimatePresence>
              {brandsDropdownOpen && (
                <motion.div
                  className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg origin-top"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                >
                  <motion.ul className="flex flex-col text-sm p-2 space-y-2 text-gray-900">
                    <motion.li
                      variants={itemVariants}
                      whileHover="hover"
                      className="cursor-pointer p-2 rounded"
                    >
                      <a
                        href="https://webboombaa.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-blue-600"
                      >
                        Webboombaa
                      </a>
                    </motion.li>
                    <motion.li
                      variants={itemVariants}
                      whileHover="hover"
                      className="cursor-pointer p-2 rounded"
                    >
                      <a
                        href="https://www.brandandmediaworks.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-blue-600"
                      >
                        Brand and Media Works
                      </a>
                    </motion.li>
                    <motion.li
                      variants={itemVariants}
                      whileHover="hover"
                      className="cursor-pointer p-2 rounded"
                    >
                      <a
                        href="https://www.greatindiansweets.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-blue-600"
                      >
                        Great Indian Sweets
                      </a>
                    </motion.li>
                    <motion.li
                      variants={itemVariants}
                      whileHover="hover"
                      className="cursor-pointer p-2 rounded"
                    >
                      <a
                        href="https://greatindianbeverages.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-blue-600"
                      >
                        Great Indian Beverages
                      </a>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/blogs" className="text-black hover:text-blue-600 -ml-2">
            Blogs
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>

        {/* Right Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/contact")}
            className="bg text-black px-4 py-2 rounded-lg font-semibold"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4 text-black">
              <li>
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-blue-600 hover:text-yellow-600">
                  Home
                </Link>
              </li>

              <li>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex justify-between items-center text-blue-600 hover:text-yellow-600 font-semibold focus:outline-none"
                >
                  About
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 mt-2 flex flex-col space-y-2 text-sm"
                    >
                      <li>
                        <Link
                          to="/about"
                          onClick={() => {
                            setDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                          className="block hover:text-yellow-600"
                        >
                          Who We Are
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/clients"
                          onClick={() => {
                            setDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                          className="block hover:text-yellow-600"
                        >
                          Clients
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Brands dropdown mobile */}
              <li>
                <button
                  onClick={() => setBrandsDropdownOpen(!brandsDropdownOpen)}
                  className="w-full flex justify-between items-center text-blue-600 hover:text-yellow-600 font-semibold focus:outline-none"
                >
                  Brands
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      brandsDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {brandsDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 mt-2 flex flex-col space-y-2 text-sm"
                    >
                      <li>
                        <a
                          href="https://webboombaa.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:text-yellow-600"
                        >
                          Webboombaa
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.brandandmediaworks.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:text-yellow-600"
                        >
                          Brand and Media Works
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.greatindiansweets.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:text-yellow-600"
                        >
                          Gread Indian Sweets
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://greatindianbeverages.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:text-yellow-600"
                        >
                          Great Indian Beverages
                        </a>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link to="/consult" onClick={() => setMobileMenuOpen(false)} className="block text-blue-600 hover:text-yellow-600">
                  Consult Sharath
                </Link>
              </li>
              <li>
                <Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="block text-blue-600 hover:text-yellow-600 -ml-2">
                  Blogs
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/contact");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full btn-cta-yellow hover:bg-yellow-500 text-black px-4 py-2 rounded font-semibold"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
