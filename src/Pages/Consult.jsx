/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import { Mail, Phone } from "lucide-react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Testimonials from "../ReUse/Testimonials";
import { useNavigate } from "react-router-dom";



import {
  FiTrendingUp,
  FiSettings,
  FiTarget,
  FiTool,
  FiBarChart2,
  FiBriefcase,
  FiSearch,
  FiEdit,
  FiUsers,
  FiGlobe,
  FiZap,
  FiLock,
  FiPackage,
  FiSmile,
} from "react-icons/fi";
import { PhoneIcon } from "@heroicons/react/24/solid";

import { MdLightbulbOutline, MdRocketLaunch } from "react-icons/md";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer a range of frontend development services including React, Tailwind CSS, animation integration, and responsive design.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary, but most projects are completed within 4 to 8 weeks depending on scope and complexity.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, ongoing support and maintenance packages are available to ensure your digital assets perform optimally.",
  },
];

const caseStudies = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Case Study Title 1",
    pdfPath:"/path-to-case-study1.pdf",
    desc: "Summary for case study 1. Animi aperiam suscipit voluptas provident neque laborum ea distinctio, perspiciatis quas, atque harum incidunt. Hic, omnis consectetur.",
    stats: [
      {
        icon: <FiTrendingUp size={24} />,
        title: "Growth",
        content: "Steady Increase",
      },
      {
        icon: <FiSettings size={24} />,
        title: "Efficiency",
        content: "Streamlined Process",
      },
      {
        icon: <MdLightbulbOutline size={24} />,
        title: "Innovation",
        content: "New Ideas",
      },
      {
        icon: <FiTarget size={24} />,
        title: "Focus",
        content: "Targeted Approach",
      },
    ],
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1508385082359-f59a798cd2e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Case Study Title 2",
    desc: "Summary for case study 2. Dignissimos dolores veritatis repellat earum mollitia aliquam.",
    pdfPath:"/path-to-case-study1.pdf",
    stats: [
      {
        icon: <MdRocketLaunch size={24} />,
        title: "Launch",
        content: "Successful Start",
      },
      {
        icon: <FiTool size={24} />,
        title: "Maintenance",
        content: "Reliable Support",
      },
      {
        icon: <FiBarChart2 size={24} />,
        title: "Metrics",
        content: "Detailed Analysis",
      },
      {
        icon: <FiBriefcase size={24} />,
        title: "Management",
        content: "Efficient Team",
      },
    ],
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Case Study Title 3",
    pdfPath:"/path-to-case-study1.pdf",
    desc: "Summary for case study 3. Aliquam voluptate? Ut totam eligendi, earum molestiae ad est facilis.",
    stats: [
      {
        icon: <FiSearch size={24} />,
        title: "Research",
        content: "In-depth Study",
      },
      {
        icon: <FiEdit size={24} />,
        title: "Design",
        content: "Creative Solutions",
      },
      {
        icon: <FiUsers size={24} />,
        title: "Partners",
        content: "Strong Network",
      },
      { icon: <FiGlobe size={24} />, title: "Global", content: "Wide Reach" },
    ],
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Case Study Title 4",
    pdfPath:"/path-to-case-study1.pdf",
    desc: "Summary for case study 4. Voluptas voluptatem ipsam officia.",
    stats: [
      { icon: <FiZap size={24} />, title: "Speed", content: "Fast Delivery" },
      {
        icon: <FiLock size={24} />,
        title: "Security",
        content: "Trusted Solutions",
      },
      {
        icon: <FiPackage size={24} />,
        title: "Products",
        content: "Wide Range",
      },
      {
        icon: <FiSmile size={24} />,
        title: "Success",
        content: "Customer Satisfaction",
      },
    ],
  },
];

const brands = [
  { id: 1, name: "Brand 1", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 2, name: "Brand 2", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 3, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 4, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 6, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 5, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 7, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 8, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 9, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 10, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 11, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 12, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 12, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 14, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 15, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
  { id: 16, name: "Brand 3", logo: "https://www.webboombaa.org/wp-content/uploads/2025/09/LVB.png" },
];


const services = [
  {
    id: 1,
    img: "https://thumbs.dreamstime.com/b/side-view-smart-indian-crypto-trader-investor-analyst-broker-using-laptop-smartphone-analyzing-digital-side-view-smart-272154411.jpg",
    title: "Consulting",
    desc: "Expert advice for your business challenges.",
  },
  {
    id: 2,
    img: "https://thumbs.dreamstime.com/b/business-people-meeting-high-tech-office-diverse-grup-pointing-digital-board-data-271976731.jpg",
    title: "Marketing",
    desc: "taque tempore deserunt explicabo ut sed beatae nemo quam? A nihil dicta hic deserunt, tempora, reiciendis excepturi id, neque animi quia sequi?",
  },
  {
    id: 3,
    img: "https://tse2.mm.bing.net/th/id/OIP.gOaJ1je5umxEo9Suw6pD-gHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Design",
    desc: "Innovative designs that captivate your audience.",
  },
  {
    id: 4,
    img: "https://tse1.mm.bing.net/th/id/OIP.o69Pf8rbCzdKINNEJxUwxgHaDt?r=0&w=768&h=384&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Development",
    desc: "Robust and scalable web and app development.",
  },
  {
    id: 5,
    img: "https://strategiccfo360.com/wp-content/uploads/2022/12/AdobeStock_456986840-1.jpg",
    title: "Support",
    desc: "Reliable support to keep your operations smooth.",
  },
  {
    id: 6,
    img: "https://as1.ftcdn.net/v2/jpg/06/05/11/12/1000_F_605111295_QyQY4Tk7bv8789bFA0TgGKeTM4zzowdo.jpg",
    title: "Analytics",
    desc: "Actionable insights from your data.",
  },
];

export default function HeroSection() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [openFormId, setOpenFormId] = useState(null); // track which slide’s form is open

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

  const handleSubmit = (pdfPath) => {
    if (!formData.name || !formData.email) {
      alert("Please fill all required fields.");
      return;
    }

    // Trigger download
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfPath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close form and reset
    setOpenFormId(null);
    setFormData({ name: "", email: "", organization: "" });
  };

  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate("/contact"); // Navigate to contact us page
  };

  const handleScheduleCall = () => {
    window.location.href = "tel:+1234567890"; // Replace with your phone number
  };

  const [openIndex, setOpenIndex] = useState(0); // First question answer open initially
  const refs = useRef([]);

  const toggleAnswer = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  
  return (
    <>
      {/* hero section */}
      <div className="w-full bg-white">
        <section className="relative h-[auto] md:h-[480px] mt-20">
          {/* Background Image */}
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.0UPsVPv0OEme5yY0hNHMNAHaE8?r=0&w=1920&h=1280&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="About Hero"
            className="absolute inset-0 w-full h-full object-cover md:h-[480px]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-start md:items-center">
            {/* Mobile Heading Only */}

            {/* Full Left Content - hidden on mobile */}
            <div className="md:flex flex-1 flex-col justify-center max-w-xl text-white">
              <h1 className="text-3xl font-extrabold mb-4">
                Consult{" "}
                <span className="text-5xl text-yellow-400 leading-tight">
                  Sharath Ravikumar
                </span>
              </h1>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                We are dedicated to delivering the best services with a blend of
                innovation, quality, and commitment. Discover how we can help
                your business thrive and grow with our expert team.
              </p>
              <button
                    className="group flex items-center mb-2 md:mb-0 bg w-45 text-black px-2 py-3 rounded-md font-medium shadow overflow-hidden relative hover:bg-yellow-500"
                    aria-label="Call Us"
                    onClick={() => (window.location.href = "tel:+1234567890")}
                  >
                    <PhoneIcon className="w-5 h-5 ml-2" />
                    <span>+91 1234567890</span>
                  </button>
            </div>

            {/* Form */}
            <div className="w-full md:w-[360px] bg-white rounded-lg p-8 shadow-lg md:ml-40 flex flex-col justify-center">
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <input
                  type="tel"
                  placeholder="Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 py-16 bg-white gap-10">
        {/* Left Side: Large Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="Business Visual"
            className="w-full md:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side: Centered Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start text-left px-2 md:px-8">
          <h2 className="text-3xl lg:text-3xl font-bold text-gray-800 mb-6">
            Hire a <span className="text-yellow-400">Digital Marketing </span>
            Consultant
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            Empower your business with cutting-edge strategies and dedicated
            support tailored to your unique needs. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dignissimos dolores veritatis repellat
            earum mollitia aliquam architecto molestiae! Voluptas voluptatem
            ipsam officia.
          </p>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            illo dolorem facilis eveniet reiciendis sequi incidunt culpa amet
            ducimus debitis sapiente repudiandae libero officiis nam, delectus
            sed! Repellat quis laborum voluptates obcaecati amet quia at
            doloremque ducimus possimus, eveniet aliquam incidunt. Quos pariatur
            quibusdam minus aspernatur eaque voluptate voluptatem laudantium?
          </p>
        </div>
      </section>


        {/* brands */}
<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="text-center mb-4">
    <h2 className="text-4xl text-gray-700 font-bold mb-2">Brands</h2>
    <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
  </div>

  <div className="grid grid-cols-4 gap-6">
    {brands.map(({ id, logo, name }) => (
      <div
        key={id}
        className="relative flex items-center justify-center p-2 group overflow-hidden"
      >
        {/* Gray Image (always visible) */}
        <img
          src={logo}
          alt={name}
          className="max-h-20 object-contain w-full filter grayscale"
        />

        {/* Colored Image (slides up on hover) */}
        <img
          src={logo}
          alt={name}
          className="absolute inset-0 max-h-20 object-contain w-full 
            translate-y-full opacity-0
            transition-all duration-700 ease-in-out
            group-hover:translate-y-2 group-hover:opacity-100"
        />
      </div>
    ))}
  </div>
</section>



{/* case Studies */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl,
          nextEl,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevEl;
          swiper.params.navigation.nextEl = nextEl;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {caseStudies.map(({ id, img, title, desc, stats, pdfPath }) => (
          <SwiperSlide key={id}>
            <div className="h-[400px] rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
              {/* Left image */}
              <div className="w-full h-72 md:h-auto">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right content */}
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {title}
                  </h2>
                  <p className="text-gray-600 text-xl mb-6 w-[500px]">{desc}</p>

                  <div className="flex flex-col space-y-2">
                    {stats.map(({ icon, title: statTitle, content }, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-3 text-gray-800"
                      >
                        <div className="text-3xl font-bold text-yellow-400">
                          {icon}
                        </div>
                        <div className="flex space-x-1 text-sm">
                          <span className="text-xl text-yellow-400">
                            {statTitle}
                          </span>
                          <span className="mt-1">:</span>
                          <span className="text-xl text-gray-600">{content}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: View Case Study Button */}
                <div className="self-end mb-2 relative">
                  <button
                    onClick={() => setOpenFormId(id)}
                    className="inline-block w-44 bg text-gray-800 font-semibold py-3 px-4 rounded transition"
                  >
                    View Case Study
                  </button>

                  {/* Animated Form */}
                  <AnimatePresence>
                    {openFormId === id && (
                      <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.div
                          onClick={() => setOpenFormId(null)}
                          className="absolute inset-0 bg-black/40"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.4 }}
                          exit={{ opacity: 0 }}
                        ></motion.div>

                        <motion.div
                          className="relative bg-white rounded-2xl p-8 w-full max-w-md shadow-xl z-50"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 120 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            onClick={() => setOpenFormId(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                          >
                            ✕
                          </button>
                          <h3 className="text-2xl font-bold mb-4 text-yellow-700">
                            Case Study Form
                          </h3>
                          <form
                            className="flex flex-col gap-4"
                            onSubmit={(e) => {
                              e.preventDefault();
                              handleSubmit(pdfPath);
                            }}
                          >
                            <input
                              type="text"
                              placeholder="Your Name"
                              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              required
                            />
                            <input
                              type="email"
                              placeholder="Email"
                              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              required
                            />
                            <input
                              type="text"
                              placeholder="Organization / Company"
                              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                              value={formData.organization}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  organization: e.target.value,
                                })
                              }
                            />
                            <motion.button
                              type="submit"
                              whileHover={{ scale: 1.03, y: -1 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-yellow-400 text-gray-800 rounded-lg py-3 font-semibold shadow-md"
                            >
                              Download
                            </motion.button>
                          </form>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="flex justify-center gap-8 mt-6">
        <button
          ref={setPrevEl}
          className="text-xl font-bold px-2 py-1 rounded border border-gray-400 hover:bg-blue-200"
          aria-label="Previous Slide"
        >
          ←
        </button>
        <button
          ref={setNextEl}
          className="text-xl font-bold px-2 py-1 rounded border border-gray-400 hover:bg-blue-200"
          aria-label="Next Slide"
        >
          →
        </button>
      </div>
    </section>


      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="font-bold text-4xl text-gray-600">Our Services</h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <section className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:grid grid-cols-3 grid-rows-2 gap-4 h-[900px] md:h-[500px]">
            {services.map(({ id, img, title, desc }) => (
              <div
                key={id}
                className="relative w-full h-full overflow-hidden cursor-pointer group"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover block transition-transform duration-300 ease-in-out group-hover:scale-105"
                />

                {/* Overlay for title and description */}
                <div className="absolute bottom-0 left-0 w-full bg-blue-700/60 text-white px-3 py-2 text-center z-20 transition-all duration-300 ease-in-out">
                  <h3 className="font-bold text-lg transform transition-transform duration-300 ease-in-out">
                    {title}
                  </h3>
                  <p className="text-sm mt-1 opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-24">
                    {desc || "This is a description that appears on hover."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

           <section className="bg">
              <div className="w-full py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between mx-auto max-w-5xl">
                {/* Left side content */}
                <div className="mb-6 md:mb-0 md:flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Ready to get started?
                  </h3>
                  <p className="text-white">
                    Let's connect and help you achieve your goals with a tailored
                    solution.
                  </p>
                </div>
      
                {/* Right side buttons with hover expand and icons */}
                <div className="flex gap-2 md:flex-none">
                  <button
                    className="group flex items-center bg-yellow-400 text-black px-2 py-3 rounded-md font-medium shadow overflow-hidden relative hover:bg-yellow-500"
                    aria-label="Call Us"
                    onClick={() => (window.location.href = "tel:+1234567890")}
                  >
                    <PhoneIcon className="w-5 h-5 ml-2" />
                    <span>+91 1234567890</span>
                  </button>
                </div>
              </div>
            </section>

      <section className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row bg-white shadow-md p-8 md:p-12 max-w-5xl w-full min-h-[500px] items-center">
          {/* Left: Image (taller, can overflow if desired) */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10 flex justify-center items-center w-full md:w-2/5 h-full overflow-visible">
            <img
              src="https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg?auto=compress&cs=tinysrgb&h=350"
              alt="Anna White standing in a field"
              className="object-cover w-64 md:w-100 h-[500px] self-center md:-mt-16 md:-mr-6"
            />
          </div>
          {/* Right: Text */}
          <div className="flex flex-col justify-center w-full md:w-3/5 h-full">
            <h1 className="font-handwriting text-lg md:text-lg font-semibold text-gray-700 mb-4">
              Why{" "}
              <span className="font-bold text-yellow-400 text-4xl">
                Sharath Ravikumar
              </span>
            </h1>
            <p className="text-base text-gray-800 mb-2">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              tempora dolorem recusandae placeat veniam possimus, consequatur,
              repudiandae qui commodi atque sequi assumenda id nostrum, iusto
              velit non fugiat quos laudantium.
            </p>
            <p className="text-base text-gray-700 mb-2">
              I am a lifestyle entrepreneur and blogger from Lithuania.
            </p>
            <p className="text-base text-gray-700 mb-2">
              I will help you build a lifestyle business, develop a rock solid
              work ethic and design a high output lifestyle.
            </p>
            <p className="text-base text-gray-700 mb-6">
              Whether you are working a full time desk job with minimal vacation
              time, in a location dependent relationship,
            </p>
          </div>
        </div>
      </section>


      <Testimonials />

      <section className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side: title and description */}
          <div className="pr-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 font-display text-foreground dark:text-blue-800">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground dark:text-gray-700 leading-relaxed">
              Here are answers to some of the most common queries. Feel free to
              reach out if you don’t see your question listed.
            </p>
          </div>

          {/* Right side: FAQ questions and answers */}
          <div className="divide-y">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  className="w-full flex justify-between items-center font-semibold text-lg text-foreground dark:text-gray-800 hover:text-blue-800 transition-colors focus:outline-none"
                  onClick={() => toggleAnswer(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform duration-300 text-2xl ${
                      openIndex === index ? "rotate-45 text-black" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  ref={(el) => (refs.current[index] = el)}
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out mt-2 px-1 ${
                    openIndex === index ? "max-h-80" : "max-h-0"
                  }`}
                  style={{ color: "var(--muted-foreground, #646262ff)" }}
                >
                  <p className="mb-0">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg">
        <div className="px-4">
          <div className="max-w-6xl mx-auto">
            <div className="overflow-hidden relative text-white">
              <div className="absolute inset-0"></div>
              <div className="p-8 md:p-12 relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                    Ready to Transform Your Digital Presence?
                  </h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Let's discuss how we can bring your vision to life and
                    create something amazing together. Your success story starts
                    with a conversation.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <button
                    type="button"
                    onClick={handleGetInTouch}
                    className="flex items-center justify-center px-6 py-3 text-lg font-semibold rounded bg-yellow-400 text-black"
                  >
                    <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                    Get In Touch
                  </button>
                  <button
                    type="button"
                    onClick={handleScheduleCall}
                    className="flex items-center justify-center px-6 py-3 text-lg font-semibold rounded border border-white/30 bg-white/10 text-white hover:bg-white/20 min-w-[200px] transition-colors duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    Schedule a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
