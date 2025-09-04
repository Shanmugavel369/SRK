import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    id: 1,
    Year:2018,
    image:
      "https://i.pinimg.com/736x/ab/3e/df/ab3edf31a4feb5709b1feb22f8dcc1da.jpg",
    title: "Project Kickoff lorem",
    description:
      "Initial project kickoff meeting with stakeholders to define goals, timeline, and deliverables.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut saepe facere maxime ducimus dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    Year:2020,
    image:
      "https://i.pinimg.com/736x/30/52/6b/30526b3b07320d1a3dc6bfa191ed82ee.jpg",
    title: "Design Phase lorem",
    description:
      "Initial project kickoff meeting with stakeholders to define goals, timeline, and deliverables.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut saepe facere maxime ducimus dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    Year:2022,
    image:
      "https://i.pinimg.com/736x/53/eb/f0/53ebf0928892bdbc273ce47259a21a8f.jpg",
    title: "Development lorem lorem",
    description:
      "Initial project kickoff meeting with stakeholders to define goals, timeline, and deliverables.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut saepe facere maxime ducimus dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    Year:2024,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    title: "Launch lorem lorem",
    description:
      "Initial project kickoff meeting with stakeholders to define goals, timeline, and deliverables.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut saepe facere maxime ducimus dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

// Tweakable animation constants
const X_OFFSET = 24; // px
const DUR_IN = 0.28; // s (faster reveal)
const DUR_OUT = 0.22; // s (faster hide)
const HYSTERESIS = 10; // px dead zone around item center to prevent flicker

const Timeline = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]); // Left image wrappers
  const contentRefs = useRef([]); // Right content blocks
  const visibleRef = useRef([]); // Boolean state per item

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const container = containerRef.current;
      const lineEl = lineRef.current;
      const items = itemsRef.current;
      const contents = contentRefs.current;

      if (!container || !lineEl || items.length === 0) return;

      // Ensure arrays have proper length
      visibleRef.current = items.map(() => false);

      // Initial states (fast + GPU friendly)
      gsap.set(items, {
        autoAlpha: 0,
        x: -X_OFFSET,
        willChange: "transform,opacity",
      });
      gsap.set(contents, {
        autoAlpha: 0,
        x: X_OFFSET,
        willChange: "transform,opacity",
      });

      // Helper: midpoint of an item relative to container
      const itemTop = (el) => el.offsetTop;

      // Helper: last midpoint for total line travel
      const lastMid = () =>
        itemTop(items[items.length - 1]) +
        items[items.length - 1].offsetHeight +
        50;

      // Reveal/hide per item using hysteresis + stateful toggles
      const updateVisibility = (currentHeight) => {
        items.forEach((item, idx) => {
          const content = contents[idx];
          if (!item || !content) return;

          const top = itemTop(item);
          const isVisible = visibleRef.current[idx];

          // Reveal if line clearly passed center + hysteresis
          if (!isVisible && currentHeight >= top + HYSTERESIS) {
            visibleRef.current[idx] = true;
            gsap.to(item, {
              autoAlpha: 1,
              x: 0,
              duration: DUR_IN,
              ease: "power2.out",
              overwrite: "auto",
            });
            gsap.to(content, {
              autoAlpha: 1,
              x: 0,
              duration: DUR_IN,
              ease: "power2.out",
              overwrite: "auto",
              delay: 0.05, // tiny lead-lag for polish
            });
          }
          // Hide if line clearly before center - hysteresis
          else if (isVisible && currentHeight < top - HYSTERESIS) {
            visibleRef.current[idx] = false;
            gsap.to(item, {
              autoAlpha: 0,
              x: -X_OFFSET,
              duration: DUR_OUT,
              ease: "power2.in",
              overwrite: "auto",
            });
            gsap.to(content, {
              autoAlpha: 0,
              x: X_OFFSET,
              duration: DUR_OUT,
              ease: "power2.in",
              overwrite: "auto",
            });
          }
        });
      };

      // Progressive line growth scrubbed to scroll
      gsap.fromTo(
        lineEl,
        { height: 0 },
        {
          height: lastMid, // function (recomputed on refresh)
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top+=300",
            end: () => `+=${lastMid()}`, // simpler consistent end
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: () => {
              const h =
                lineEl.offsetHeight || parseFloat(lineEl.style.height) || 0;
              updateVisibility(h);
            },
            onRefresh: () => {
              // Re-evaluate positions on resize/content changes
              const h = lineEl.offsetHeight || 0;
              updateVisibility(h);
            },
          },
        }
      );

      const arrowEl = container.querySelector("#lineArrow");

      gsap.fromTo(
        lineEl,
        { height: 0 },
        {
          height: lastMid,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top+=300",
            end: () => `+=${lastMid()}`,
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: () => {
              const h =
                lineEl.offsetHeight || parseFloat(lineEl.style.height) || 0;
              updateVisibility(h);

              // Move arrow to bottom of growing line
              if (arrowEl) {
                gsap.set(arrowEl, { y: h - 12 }); // offset ~half arrow height
              }
            },
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-2">
      {/* Timeline container is the coordinate space for the line */}
      <div ref={containerRef} className="relative">
        {/* Track & Progressive Line (absolute, spans the whole container) */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-px h-full">
          {/* faint full track */}
          <div className="absolute top-0 bottom-0 w-px" />
          {/* growing line */}
          <div
            ref={lineRef}
            className="absolute top-0 w-1/2 bg-blue-600 origin-top"
            style={{ height: 0, transformOrigin: "top" }}
          />

          {/* arrow at the end */}
          <svg
            id="lineArrow"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-5 h-5 text-blue-600"
            style={{ top: 8, left: "-9px" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m0 0l-6-6m6 6l6-6"
            />
          </svg>
        </div>

        {timelineData.map(({ id, image,Year, title, description }, index) => (
          <div key={id} className="flex items-center py-16">
            {/* Left Image */}
            <div
              ref={(el) => (itemsRef.current[index] = el)}
              className="w-1/2 flex justify-end pr-16 opacity-0 -translate-x-6"
            >
              <div className="w-40 h-50 md:w-130 md:h-80 overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Middle spacer column (keeps layout; the actual line is absolutely positioned) */}
            <div className="w-1 mx-3" />

            {/* Right Content */}
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="w-1/2 md:w-130 bg-white md:p-8 translate-x-6"
            >
              <h2 className="text-5xl text-[#00458fe9] font-extrabold tracking-wider">{Year}</h2>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {title}
              </h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
