import React from "react";
import { Route,Routes } from "react-router-dom";

import Home from "./Pages/Home"
import About from "./Pages/About"
import Clients from "./Pages/Clients"
import Blogs from "./Pages/Blogs"
import Consult from "./Pages/Consult"
import Contact from "./Pages/Contact"

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import StickyCTAForm from "./ReUse/StickyCTAForm";
import ScrollToTop from "./ReUse/ScrollToTop";


const App = () => {

  return (
    <div className="bg-white text-gray-900">
      {/* Global container to control width + margins */}
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <StickyCTAForm />
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default App;
