import { useRef, useState, useEffect } from "react";

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
    title: "Achievement 3",
    description: "Brief description for Achievement 3.",
  },
  {
    img: "/assets/achieve4.jpg",
    title: "Achievement 4",
    description: "Brief description for Achievement 4.",
  },
  {
    img: "/assets/achieve5.jpg",
    title: "Achievement 5",
    description: "Brief description for Achievement 5.",
  },
  {
    img: "/assets/achieve6.jpg",
    title: "Achievement 6",
    description: "Brief description for Achievement 6.",
  },
  {
    img: "/assets/achieve7.jpg",
    title: "Achievement 7",
    description: "Brief description for Achievement 7.",
  },
];

const FADE_DURATION = 300; // ms
const DISPLAY_DURATION = 3000; // ms

export default function Achievements() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [paused, setPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(4); // responsive control
  const timerRef = useRef(null);

  // 🔹 Detect screen size and adjust cards per view
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // tablet
      } else {
        setCardsPerView(4); // desktop
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Fade loop for auto-play
  useEffect(() => {
    if (paused) return;

    function fadeLoop() {
      timerRef.current = window.setTimeout(() => {
        setFade(false);
        setTimeout(() => {
          setIndex((prev) => (prev + cardsPerView) % achievementsData.length);
          setFade(true);
          fadeLoop();
        }, FADE_DURATION);
      }, DISPLAY_DURATION);
    }
    fadeLoop();

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [index, paused, cardsPerView]);

  // 🔹 Get current group of slides
  const currentSlides = [];
  for (let i = 0; i < cardsPerView; i++) {
    currentSlides.push(achievementsData[(index + i) % achievementsData.length]);
  }

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12">
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
              className={`bg-white overflow-hidden flex flex-col mx-2 
                w-full sm:max-w-xs md:max-w-sm lg:max-w-md 
                transform transition-all duration-300
                ${
                  hoveredCard === idx
                    ? "scale-105 z-10"
                    : hoveredCard !== null
                    ? "blur-xs opacity-100"
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
                className="w-full h-110 object-cover"
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
