// src/App.jsx
import { useRoutes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Clients from "./Pages/Clients";
import BlogsListing from "./Pages/BlogsListing";
import Consult from "./Pages/Consult";
import Contact from "./Pages/Contact";
import BlogDetailWrapper from "./ReUse/BlogDetailWrapper";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import StickyCTAForm from "./ReUse/StickyCTAForm";
import ScrollToTop from "./ReUse/ScrollToTop";
import ScrollTop from "./ReUse/ScrollTop";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/clients", element: <Clients /> },
    { path: "/blogs", element: <BlogsListing /> },
    { path: "/blogs/:id", element: <BlogDetailWrapper /> },
    { path: "/consult", element: <Consult /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <ScrollTop />
        {routes}
        <StickyCTAForm />
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default App;
