// src/App.jsx
import { useRoutes, useLocation  } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Clients from "./Pages/Clients";
import BlogsListing from "./Pages/BlogsListing";
import Consult from "./Pages/Consult";
import Contact from "./Pages/Contact";
import CaseStudy from "./Case Studies/CaseStudy";
import BlogDetailWrapper from "./ReUse/BlogDetailWrapper";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import StickyCTAForm from "./ReUse/StickyCTAForm";
import ScrollToTop from "./ReUse/ScrollToTop";
import ScrollTop from "./ReUse/ScrollTop";
import FormPopup from "./Components/FormPopup";
import ThankYou from "./Components/ThankYou";
import NotFound from "./Components/NotFound";

const App = () => {
  const location = useLocation();

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/clients", element: <Clients /> },
    { path: "/blogs", element: <BlogsListing /> },
    { path: "/blogs/:id", element: <BlogDetailWrapper /> },
    { path: "/consult", element: <Consult /> },
    { path: "/contact", element: <Contact /> },
    { path: "/case-study", element: <CaseStudy /> },
    { path: "/thank-you", element: <ThankYou /> },
    { path: "*", element: <NotFound /> },
  ]);

  // Hide popup only on these pages
  const hideFormPopupPages = ["/thank-you"];

  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <ScrollTop />
        {routes}
        <StickyCTAForm />
        <ScrollToTop />
        <Footer />
        { !hideFormPopupPages.includes(location.pathname) && <FormPopup /> }
      </div>
    </div>
  );
};

export default App;
