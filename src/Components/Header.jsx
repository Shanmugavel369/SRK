import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgClass = scrolled ? "bg-white shadow-sm" : "bg-transparent";
  const textClass = "text-gray-900";

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.1, when: "beforeChildren" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, color: "#FBBF24" }, // Tailwind yellow-400 color
  };

  return (
    <motion.header
      key="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ease-in-out ${bgClass} ${textClass}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Left Logo */}
        <img
          src="/assets/SRK-logo.png"
          alt="SRK Logo"
          className="h-16 w-auto object-contain cursor-pointer"
          draggable={false}
        />

        {/* Center Nav */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold text-gray-900 -ml-6">
  <Link to="/" className="text-blue-600 hover:text-yellow-600 mr-8">
    Home
  </Link>

  <div
    className="relative group"
    onMouseEnter={() => setDropdownOpen(true)}
    onMouseLeave={() => setDropdownOpen(false)}
  >
    <button className="text-blue-600 hover:text-yellow-600 transition-colors">About</button>

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
              <Link to="/About-Us" className="block hover:text-yellow-600 transition-colors">
                Who We Are
              </Link>
            </motion.li>
            <motion.li
              key="Clients"
              variants={itemVariants}
              whileHover="hover"
              className="cursor-pointer p-2 rounded"
            >
              <Link to="/clients" className="block hover:text-yellow-600 transition-colors">
                Clients
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>

  <Link to="/consult" className="text-blue-600 hover:text-yellow-600">
    Consult Sharath
  </Link>
  <Link to="/brands" className="text-blue-600 hover:text-yellow-600">
    Brands
  </Link>
  <Link to="/blogs" className="text-blue-600 hover:text-yellow-600 -ml-2">
    Blogs
  </Link>
</nav>


        {/* Right Button */}
        <div>
          <button
            onClick={() => navigate("/contact")}
            className="btn-cta-yellow hover:bg-yellow-500 text-black px-4 py-2 rounded font-semibold"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
