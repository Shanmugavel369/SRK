// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Controller, EffectFade,Pagination  } from "swiper/modules";
import { PhoneIcon } from "@heroicons/react/24/solid";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import InviteSection from "../ReUse/InviteSection";

import {
  FaLinkedinIn,
  FaTwitter,
  FaUserTie,
  FaPenNib,
  FaChalkboardTeacher,
} from "react-icons/fa";

import { MdOutlineCastForEducation } from "react-icons/md";
import { GiPublicSpeaker } from "react-icons/gi";
import BlogSection from "../ReUse/BlogSection";
import Achievements from "../ReUse/Achievements";
import Brands from "../ReUse/Brand";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [regHovered, setRegHovered] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Trigger once
  const imageControls = useAnimation();
  const textControls = useAnimation();

  const handleRegister = () =>{
    navigate("/contact");
  }

  const handleExplore = () =>{
    navigate("/about");
  }


  // When the section enters view, start animations
  if (isInView) {
    imageControls.start({ opacity: 1, x: 0 });
    textControls.start({ opacity: 1, y: 0 });
  }

  useEffect(() => {
  let animation;

  (async () => {
    const gsapModule = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");

    const gsap = gsapModule.default;
    gsap.registerPlugin(ScrollTrigger);

    if (overlayRef.current) {
      animation = gsap.to(overlayRef.current, {
        y: "100vh",
        ease: "power2.out",
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top center",
          end: "+=100%",
          scrub: true,
        },
      });
    }
  })();

  return () => {
    if (animation?.scrollTrigger) {
      animation.scrollTrigger.kill();
    }
    animation?.kill();
  };
}, []);



  const [hovered, setHovered] = useState(false);
  const [textSwiper, setTextSwiper] = useState(null);
  const [imageSwiper, setImageSwiper] = useState(null);
  const [animate, setAnimate] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [readHovered, setReadHovered] = useState(false);

  const slides = [
    {
      date: "12 Aug 2025",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsum!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam aut libero deserunt, ullam aliquid veniam.",
      img: "/assets/Success1.jpg",
    },
    {
      date: "15 Aug 2025",
      title: "Another headline for the second slide",
      desc: "This is the description for slide two. It shows synced content & image!",
      img: "/assets/Success2.jpeg",
    },
    {
      date: "18 Aug 2025",
      title: "Third content title here",
      desc: "Here is a different description for the third slide, syncing with the image on the right.",
      img: "/assets/Success3.jpg",
    },
  ];

  // Handle slide change and animation toggling for fade-up effect
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50);
  };

  // Animation classes for fade down & fade up effect on active slide
  const getAnimationClasses = (idx) => {
    if (currentIndex === idx && animate) {
      // Active slide: fade up (translate from 6 -> 0 and opacity 0 -> 100)
      return "opacity-100 translate-y-0 transition-opacity transition-transform duration-700 ease-in-out";
    } else if (currentIndex === idx && !animate) {
      // Slide leaving: fade down (translate from 0 -> 6 and opacity 100 -> 0)
      return "opacity-0 translate-y-6 transition-opacity transition-transform duration-700 ease-in-out";
    }
    return "opacity-0 translate-y-6 pointer-events-none"; // Hide inactive slides
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <Swiper
      modules={[Autoplay, Pagination,EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full h-[750px] relative"
      style={{ paddingBottom: "60px" }} // leave space for dots
    >
      {/* Slide 1: Original Hero Section Content */}
      <SwiperSlide>
        <section
        className="relative h-[400px] mt-24 md:mt-0 md:h-[750px] flex items-center"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-12 relative z-10">
          {/* Left content (was right content) */}
          <div className="md:w-1/2 text-gray-900 order-last md:order-first z-20">
            <div className="inline-block">
              <h1 className="text-xl md:text-6xl font-bold text-start">
                India's Leading
                <br />
                <span className="text-yellow-400">Digital Marketing</span>
                <br />
                Consultant & Educator
              </h1>
            </div>
            <p className="text-lg mb-6 mt-10">
              Sharath Ravikumar is a Digital Marketing Consultant, Agency
              Founder,
              <br /> and Speaker with over 10 years of experience. He has helped
              businesses strengthen their digital presence, scale effectively,
              and achieve lasting growth.
            </p>
            <button onClick={handleExplore} className="bg text-black font-semibold px-6 py-3 md:mb-0 mb-2 rounded-lg">
              Explore My Work
            </button>
            <button onClick={handleRegister} className="bg-yellow-400 mr-4 md:ml-2 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg">
              Book an Appointment
            </button>
          </div>

          {/* Right image (was left image) */}
          <div className="md:w-1/2 mt-10 md:mt-0 relative hidden md:block">
            <img
              src="https://sharathravikumar.com/wp-content/uploads/2024/12/sharath.png"
              alt="Hero"
              className="max-w-2xl h-[600px] absolute z-20 -top-58 right-0"
            />
          </div>
        </div>
      </section>
      </SwiperSlide>

      {/* Slide 2: Just an Image */}
      <SwiperSlide>
        <div className="flex justify-center items-center h-full">
          <img
            src="https://www.slidecow.com/wp-content/uploads/2018/09/Client-Logos-The-Right-Way.jpg"
            alt="Slide image"
            className="max-w-3xl h-[600px] object-contain"
          />
        </div>
      </SwiperSlide>

      {/* Slide 3: Two-column Layout */}
      <SwiperSlide>
        <section
        className="relative h-[400px] mt-24 md:mt-0 md:h-[750px] flex items-center"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-12 relative z-10">
          {/* Left content (was right content) */}
          <div className="md:w-1/2 text-gray-900 order-last md:order-first z-20">
            <div className="inline-block">
              <h1 className="text-xl md:text-6xl font-bold text-start">
                India's Leading
                <br />
                <span className="text-yellow-400">Digital Marketing</span>
                <br />
                Consultant & Educator
              </h1>
            </div>
            <p className="text-lg mb-6 mt-10">
              Sharath Ravikumar is a Digital Marketing Consultant, Agency
              Founder,
              <br /> and Speaker with over 10 years of experience. He has helped
              businesses strengthen their digital presence, scale effectively,
              and achieve lasting growth.
            </p>
            <button className="bg text-black font-semibold px-6 py-3 md:mb-0 mb-2 rounded-lg">
              Explore My Work
            </button>
            <button className="bg-yellow-400 mr-4 md:ml-2 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg">
              Book an Appointment
            </button>
          </div>

          {/* Right image (was left image) */}
          <div className="md:w-1/2 mt-10 md:mt-0 relative hidden md:block">
            <img
              src="https://sharathravikumar.com/wp-content/uploads/2024/12/sharath.png"
              alt="Hero"
              className="max-w-2xl h-[600px] absolute z-20 -top-58 right-0"
            />
          </div>
        </div>
      </section>
      </SwiperSlide>
    </Swiper>

      {/* Next Sections */}
      <section
        ref={sectionRef}
        className="relative w-full h-[400px] flex items-center overflow-visible"
      >
        <div
          className="max-w-7xl mx-auto md:-mr-4 flex flex-col md:flex-row items-center 
                  px-2 sm:px-4 lg:px-6 py-8 md:py-16 relative z-10 w-full h-auto md:h-full"
        >
          {/* Left content */}
          <div className="w-full md:w-6/12 grid grid-cols-2 grid-rows-2 gap-2">
            <div className="w-45 h-40 md:w-70 md:h-40  flex flex-col items-center justify-center bg rounded-lg shadow-lg">
              <h2 className="text-4xl font-extrabold text-white">04</h2>
              <p className="text-white">Brands</p>
            </div>
            <div className="w-45 h-40 md:w-50 md:h-40 flex flex-col items-center justify-center bg-yellow-400 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-black">100+</h2>
              <p className="text-gray-600">Clients</p>
            </div>
            <div className="w-45 h-40 md:w-50 md:h-40 flex flex-col items-center justify-center bg-yellow-400 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-black">50</h2>
              <p className="text-gray-600">Workshop</p>
            </div>
            <div className="w-45 h-40 md:w-70 md:h-40 flex flex-col items-center justify-center bg rounded-lg shadow-lg md:-ml-20">
              <h2 className="text-2xl font-bold text-white">10+</h2>
              <p className="text-white">Years of Expertise</p>
            </div>
          </div>

          {/* Right side content */}
          <div className="hidden md:flex flex-col items-start justify-center md:w-7/12 h-full relative overflow-hidden z-0 bg-white px-4 md:px-6 lg:px-10">
            <h3 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight max-w-md text-left w-full">
              Growth Figures
            </h3>
            <p className="text-sm md:text-lg text-gray-600 mb-8 max-w-sm text-left">
              With over a decade of experience, Sharath Ravikumar has built a
              reputation for delivering measurable results, empowering
              businesses, and transforming digital potential
            </p>
            <button
              onClick={() => navigate("/contact")}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`relative overflow-hidden px-8 py-1 h-20 rounded-lg border-2 font-semibold transition-colors duration-300 border-yellow-400 ${
                hovered
                  ? "bg-yellow-400 text-white"
                  : "bg-transparent text-yellow-400"
              }`}
            >
              <span className="relative z-10">Contact Us</span>
              {/* Sliding arrow */}
              <span
                className={`absolute top-1/2 -translate-y-1/2 right-3 text-white font-bold transition-transform duration-300 z-10 ${
                  hovered
                    ? "translate-x-0 opacity-100"
                    : "translate-x-6 opacity-0"
                }`}
              >
                →
              </span>
              {/* Background sliding */}
              <span
                className={`absolute inset-0 bg-yellow-400 transition-transform duration-300 ${
                  hovered ? "translate-x-0" : "-translate-x-full"
                } z-0`}
                style={{ pointerEvents: "none" }}
              />
            </button>
          </div>
        </div>
      </section>

      {/* about me */}
      <section className="flex flex-col gap-12 md:flex-row items-center md:items-start bg-white py-12 px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Left: Photo with accent boxes */}
        <div className="relative w-full md:w-1/3 max-w-md mx-auto md:mx-0 md:ml-8 lg:ml-12 mb-12 md:mb-0">
          {/* Large accent box background */}
          <div className="absolute -top-6 -right-6 md:-top-8 md:-right-10 w-48 h-48 md:w-60 md:h-60 bg-yellow-400 rounded-md z-0"></div>

          {/* Profile photo */}
          <img
            src="https://sharathravikumar.com/wp-content/uploads/2024/12/achievements-1.png"
            alt="Profile"
            className="relative w-full md:w-160 h-auto md:h-140 z-10"
          />

          {/* Small accent box bottom left */}
          <div className="absolute -bottom-4 -left-6 md:-bottom-6 md:-left-10 w-20 h-20 md:w-28 md:h-28 border-8 md:border-12 border-blue-700 rounded-md"></div>
        </div>

        {/* Right: Info */}
        <div className="w-full md:flex-1 md:ml-16 lg:ml-20 max-w-2xl pr-4">
          {/* Heading + button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Sharath</h2>

            <button
              onClick={handleExplore}
              className="relative overflow-hidden border-2 border-yellow-400 px-2 py-2 font-semibold text-yellow-400 text-xs rounded-lg"
              onMouseEnter={() => setReadHovered(true)}
              onMouseLeave={() => setReadHovered(false)}
            >
              {/* Sliding yellow background */}
              <span
                className={`absolute inset-0 bg-yellow-400 transition-transform duration-300 ${
                  readHovered ? "translate-x-0" : "-translate-x-full"
                } z-0`}
                style={{ pointerEvents: "none" }}
              />
              {/* Button content */}
              <span
                className={`relative z-10 flex items-center text-xs ${
                  readHovered ? "text-white" : "text-yellow-400"
                } transition-colors duration-300`}
              >
                READ MORE
                <span className="inline-block ml-1">→</span>
              </span>
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-500 mb-8 text-lg leading-relaxed">
            Weaving possibilities, connecting curious minds, shaping ideas, and
            guiding talent toward personal and professional growth. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Ut eius assumenda
            labore odit recusandae quaerat ea enim, et saepe officiis ab
            obcaecati qui dignissimos.
          </p>

          {/* Social icons row */}
          <div className="flex space-x-5 mb-10">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white rounded-full w-10 h-10 flex items-center justify-center transition"
            >
              <FaTwitter size={18} />
            </a>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 md:gap-x-16 text-gray-800 text-base">
            {/* Founder */}
            <div className="bg-white px-4 py-2 transition-transform duration-200 hover:scale-105">
              <div className="flex items-center space-x-4">
                {/* Left Side - Icon */}
                <span className="text-3xl text-white bg px-2 py-2 rounded-lg">
                  <FaUserTie />
                </span>

                {/* Right Side - Title + Description */}
                <div>
                  <span className="block font-bold uppercase tracking-wide">
                    Founder
                  </span>
                  <p className="text-gray-700">CEO & Leader of 4 Brands</p>
                </div>
              </div>
            </div>

            {/* Author */}
            <div className="bg-white px-4 py-3 transition-transform duration-200 hover:scale-105">
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <span className="text-3xl text-white bg px-2 py-2 rounded-lg">
                  <FaPenNib />
                </span>
                {/* Content */}
                <div>
                  <span className="block font-bold uppercase tracking-wide">
                    Author
                  </span>
                  <p className="text-gray-700">Ideas Into Words</p>
                </div>
              </div>
            </div>

            {/* Digital Coach */}
            <div className="bg-white px-4 py-3 transition-transform duration-200 hover:scale-105">
              <div className="flex items-center space-x-4">
                <span className="text-3xl text-white bg px-2 py-2 rounded-lg">
                  <FaChalkboardTeacher />
                </span>
                <div>
                  <span className="block font-bold uppercase tracking-wide">
                    Digital Coach
                  </span>
                  <p className="text-gray-700">Your Digital Growth Partner</p>
                </div>
              </div>
            </div>

            {/* Guest Professor */}
            <div className="bg-white px-4 py-3 transition-transform duration-200 hover:scale-105">
              <div className="flex items-center space-x-4">
                <span className="text-3xl text-white bg px-2 py-2 rounded-lg">
                  <MdOutlineCastForEducation />
                </span>
                <div>
                  <span className="block font-bold uppercase tracking-wide">
                    Guest Professor
                  </span>
                  <p className="text-gray-700">Guiding Future Leaders</p>
                </div>
              </div>
            </div>

            {/* Speaker */}
            <div className="bg-white px-4 py-3 transition-transform duration-200 hover:scale-105">
              <div className="flex items-center space-x-4">
                <span className="text-3xl text-white bg px-2 py-2 rounded-lg">
                  <GiPublicSpeaker />
                </span>
                <div>
                  <span className="block font-bold uppercase tracking-wide">
                    Speaker
                  </span>
                  <p className="text-gray-700">Engaging Story Teller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swiper Section */}
      <section className="flex flex-col justify-center px-6 py-4 relative overflow-visible">
  <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-center relative z-10 min-h-[500px] gap-x-0 overflow-visible">

    {/* Right Column - Image (move visually above on mobile) */}
    <div className="relative h-[200px] md:h-[600px] md:right-[120px] w-full overflow-hidden order-1 md:order-2">
      <Swiper
        style={{ willChange: "transform, opacity" }}
        modules={[Controller, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={setImageSwiper}
        controller={{ control: textSwiper }}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        allowTouchMove={false}
        speed={500}
        slidesPerView={1}
        loop={true}
        className="h-full"
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={item.img}
              alt={`Slide ${idx}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev/Next buttons overlayed on image (only on mobile) */}
<div className="absolute inset-0 flex items-center justify-between px-4 z-30 md:hidden pointer-events-none">
  <button className="border border-white text-white bg-blue-700/40 px-3 py-2 rounded-lg custom-prev pointer-events-auto">
    &lt;
  </button>
  <button className="border border-white text-white bg-blue-700/40 px-3 py-2 rounded-lg custom-next pointer-events-auto">
    &gt;
  </button>
</div>

    </div>

    {/* Left Column - Content Card */}
    <div className="relative md:left-[120px] z-20 max-w-lg h-[350px] shadow-lg order-2 md:order-1 mt-4 md:mt-0">
      <Swiper
        style={{ willChange: "transform, opacity" }}
        modules={[Navigation, Autoplay, Controller, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={setTextSwiper}
        controller={{ control: imageSwiper }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={900}
        slidesPerView={1}
        loop={true}
        watchOverflow={true}
        className="bg-white p-8 w-full h-full"
        onSlideChange={handleSlideChange}
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`h-full flex flex-col p-8 ${getAnimationClasses(idx)}`}
            >
              <p className="text-red-600 font-semibold text-sm">{item.date}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                {item.title}
              </h2>
              <p className="mt-4 text-gray-600 text-lg">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop buttons (stay outside swiper) */}
      <div className="hidden md:flex gap-4 mt-4">
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 custom-prev">
          &lt;
        </button>
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 custom-next">
          &gt;
        </button>
      </div>
    </div>
  </div>
</section>


      <section className="w-full bg-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
        {/* Left side content */}
        <div className="mb-6 md:mb-0 md:flex-1">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Ready to get started?
          </h3>
          <p className="text-gray-600">
            Let's connect and help you achieve your goals with a tailored
            solution.
          </p>
        </div>

        {/* Right side buttons with hover expand and icons */}
        <div className="flex gap-2 md:flex-none">
          <button
            className="group flex items-center bg text-white px-6 py-3 rounded-md font-medium shadow overflow-hidden relative transition-all duration-300 ease-in-out hover:px-8"
            aria-label="Call Us"
            onClick={() => (window.location.href = "tel:+1234567890")}
          >
            <span>Call Us!</span>
            <PhoneIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      <Achievements />

      <Brands />

      <section className="w-full h-50 mt-10 bg relative flex items-center justify-center">
        {/* Left column: quote */}
        <div className="flex-1 flex items-center h-full pl-16 z-10"></div>

        {/* Right column: title and info */}
        <div className="flex-1 flex flex-col justify-center h-full pr-16 z-10 absolute left-2 md:left-100">
          <h3 className="text-white text-2xl md:text-4xl font-extrabold mb-3">
            Get Started Now
          </h3>
          <div className="text-white text-sm/6 md:text-lg mb-2">
            Start Your Digital Growth Journey with Sharath Ravikumar
          </div>
          <button
          onClick={handleRegister}
            className="relative overflow-hidden w-30 md:w-35 mt-4 border-2 border-white p-1 font-semibold text-gray-800 text-sm rounded-sm"
            onMouseEnter={() => setRegHovered(true)}
            onMouseLeave={() => setRegHovered(false)}
          >
            {/* Sliding yellow background */}
            <span
              className={`absolute inset-0 bg-yellow-400 transition-transform duration-300 
          ${regHovered ? "translate-x-0" : "-translate-x-full"} z-0`}
              style={{ pointerEvents: "none" }}
            />
            {/* Button content */}
            <span
              className={`relative z-10 flex items-center justify-center text-sm ${
                regHovered ? "text-white" : "text-white"
              } transition-colors duration-300`}
            >
              Register now!
            </span>
          </button>
        </div>

        {/* Image overlapping the section */}
        <img
          src="https://sharathravikumar.com/wp-content/uploads/2024/12/sharath.png"
          alt=""
          className="absolute -right-37 md:right-50 -translate-x-1/2 bottom-0 h-64 object-contain z-20"
          draggable="false"
          style={{ pointerEvents: "none" }}
        />
      </section>

      <BlogSection />

      <InviteSection />
    </div>
  );
};

export default Hero;
