import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const achievementsData = [
  {
    img: "/assets/Achieve1.jpg",
    title: "Achievement 1",
    description: "Brief description for Achievement 1.",
  },
  {
    img: "/assets/Achieve2.jpg",
    title: "Achievement 2",
    description: "Brief description for Achievement 2.",
  },
  {
    img: "/assets/achieve3.jpg",
    title: "achievement 3",
    description: "Brief description for Achievement 3.",
  },
  {
    img: "/assets/achieve4.jpg",
    title: "achievement 4",
    description: "Brief description for Achievement 4.",
  },
  {
    img: "/assets/achieve5.jpg",
    title: "achievement 5",
    description: "Brief description for Achievement 5.",
  },
  {
    img: "/assets/achieve6.jpg",
    title: "achievement 6",
    description: "Brief description for Achievement 6.",
  },
  {
    img: "/assets/achieve7.jpg",
    title: "achievement 7",
    description: "Brief description for Achievement 7.",
  },
];


const CARDS_PER_VIEW = 4;
const FADE_DURATION = 300; // ms
const DISPLAY_DURATION = 3000; // ms

export default function Achievements() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [paused, setPaused] = useState(false); // <-- for pausing
  const [hoveredCard, setHoveredCard] = useState(null); // <-- to track hovered card
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) return; // stop loop while paused

    function fadeLoop() {
      timerRef.current = window.setTimeout(() => {
        setFade(false);
        setTimeout(() => {
          setIndex((prev) => (prev + CARDS_PER_VIEW) % achievementsData.length);
          setFade(true);
          fadeLoop(); // loop again
        }, FADE_DURATION);
      }, DISPLAY_DURATION);
    }
    fadeLoop();

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [index, paused]);

  // Get current group of four
  const currentSlides = [];
  for (let i = 0; i < CARDS_PER_VIEW; i++) {
    currentSlides.push(achievementsData[(index + i) % achievementsData.length]);
  }

  return (
    <section className="px-6 md:px-20 lg:px-32 py-12">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h3 className="text-3xl font-bold mb-4">Our Achievements</h3>
        <div className="border-2 border-yellow-300 w-40 mx-auto mb-2"></div>
        <p className="text-gray-600 text-lg">
          Celebrating our milestones and successes.
        </p>
      </div>

      <div className="overflow-hidden py-8">
        <div
          className={`flex transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ willChange: "opacity, transform" }}
        >
          {currentSlides.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white overflow-hidden flex flex-col mx-2 w-full max-w-sm transform transition-all duration-300
                ${
                  hoveredCard === idx
                    ? "scale-105 z-10" // highlight
                    : hoveredCard !== null
                    ? "blur-xs opacity-100" // dim others
                    : ""
                }`}
              onMouseEnter={() => {
                setPaused(true);
                setHoveredCard(idx);
                clearTimeout(timerRef.current);
              }}
              onMouseLeave={() => {
                setPaused(false);
                setHoveredCard(null);
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-100 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


      {/* Navigation Buttons */}
      {/* Uncomment if needed */}
      {/* 
      <div className="flex justify-center mt-8 space-x-4">
        <button
          aria-label="Previous achievements"
          className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 custom-prev"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          aria-label="Next achievements"
          className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 custom-next"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      */}