// AboutHero.jsx
import { useState, useRef, useEffect } from "react";
import MemoryLane from "../ReUse/MemoryLane";
import {
  CalendarDaysIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { Mail, Phone, ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/24/solid";


const testimonials = [
  {
    name: "Larry Page",
    title: "Cofounder",
    avatar:
      "https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Replace with actual avatar path
    quote: `When you're a Head of a Company like me and you want to learn, there's a big bridge between theory and practice of Digital UX. This is why I think Brishan Bajracharya is a perfect UX Designer for my company.

And even if a lot of great marketers have started by reading blog posts, and articles and doing eLearning, and doing designing classes or whatever, you need something to push forward. And just speaking with professionals with values that are similar to yours can help.`,
    accent: "Alphabet",
  },
  {
    name: "Jeff Bezos",
    title: "CEO",
    avatar:
      "https://i.pinimg.com/originals/f8/57/f7/f857f761f9dac9e2dbb37d02e2a748d1.jpg",
    quote: `Brishan delivered an amazing experience for our platform and made our services stand out in a crowded market. Reliable, creative, and professional!   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto, odit placeat impedit est nisi rem tempora alias ratione sed rerum facere sunt fugit? Molestias quo sit natus saepe numquam.`,
    accent: "Amazon",
  },
  {
    name: "Bahadur",
    title: "Prime",
    avatar:
      "https://i.pinimg.com/originals/7f/a9/da/7fa9da148555e2c5bea7e347deb901f1.jpg",
    quote: `The design work by Brishan has helped us communicate more clearly and impactfully. Highly recommend for strategic UX work.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto, odit placeat impedit est nisi rem tempora alias ratione sed rerum facere sunt fugit? Molestias quo sit natus saepe numquam.`,
    accent: "Government",
  },
];

const cardData = [
  {
    img: "https://tse4.mm.bing.net/th/id/OIP.rpSKwF0pLmWeZTYmBuK-9AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    verticalText: "VISION",
    hoverTitle: "Our Goal",
    hoverDesc: "We aim to innovate and deliver excellence in every solution we provide.",
  },
  {
    img: "https://tse4.mm.bing.net/th/id/OIP.rpSKwF0pLmWeZTYmBuK-9AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    verticalText: "MISSION",
    hoverTitle: "Our Mission",
    hoverDesc: "Empowering individuals and businesses to achieve their highest potential.",
  },
  {
    img: "https://tse4.mm.bing.net/th/id/OIP.rpSKwF0pLmWeZTYmBuK-9AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    verticalText: "VALUES",
    hoverTitle: "Our Values",
    hoverDesc: "Integrity, innovation, and commitment are at the core of everything we do.",
  },
  {
    img: "https://tse4.mm.bing.net/th/id/OIP.rpSKwF0pLmWeZTYmBuK-9AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    verticalText: "GROWTH",
    hoverTitle: "Our Vision",
    hoverDesc: "To continuously evolve and expand while making a positive impact.",
  },
];


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

const awards = [
  {
    imgSrc:
      "https://static.vecteezy.com/system/resources/thumbnails/035/775/562/small_2x/ai-generated-golden-trophy-cup-with-stars-and-bokeh-background-3d-rendering-champion-golden-trophy-with-gold-stars-on-a-dark-blue-background-ai-generated-free-photo.jpg",
    alt: "Award 1",
  },
  {
    imgSrc:
      "https://img.freepik.com/premium-photo/elegant-gold-winners-trophy-with-shooting-stars-be-awarded-first-place-competition_851674-72517.jpg",
    alt: "Award 2",
  },
  {
    imgSrc:
      "https://tse4.mm.bing.net/th/id/OIP.1cqDwFv-UHQI2UJcrWvaTQAAAA?r=0&w=474&h=316&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Award 3",
  },
  {
    imgSrc:
      "https://globalhydraulics.com.sg/wp-content/uploads/2021/10/award-2018.jpg",
    alt: "Award 4",
  },
  {
    imgSrc:
      "https://tse3.mm.bing.net/th/id/OIP.UTTJWXg65CgNU13kels_0QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Award 5",
  },
  {
    imgSrc:
      "https://tse1.mm.bing.net/th/id/OIP.r8i8cbecdMBP3O8W_fA8cQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Award 6",
  },
];

const steps = [
  {
    title: "years",
    desc: "Gromadzisz dane podatkowe w jednym",
    number: 10,
    icon: <CalendarDaysIcon className="w-8 h-8 text-black" />, // represents years/time
  },
  {
    title: "Clients",
    desc: "Sprawdzasz i wiesz, że dane są poprawne",
    number: 100,
    icon: <UsersIcon className="w-8 h-8 text-black" />, // represents people/clients
  },
  {
    title: "projects",
    desc: "Tworzysz własny schemat kalkulacji",
    number: 300,
    icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-black" />, // represents projects/documents checked
  },
  {
    title: "Industries",
    desc: "Zrealizuj szybkie deklaracje wybrane ",
    number: 20,
    icon: <BuildingOfficeIcon className="w-8 h-8 text-black" />, // represents industries/buildings
  },
];

const AboutHero = () => {
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

  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[activeIndex];

useEffect(() => {
  refs.current.forEach((ref, i) => {
    if (!ref) return;
    ref.style.maxHeight = openIndex === i ? ref.scrollHeight + "px" : "0px";
  });
}, [openIndex]);


  return (
    <>
      <div className="w-full bg-white">
        {/* Hero Section Always Visible */}
        <section className="relative w-full h-120 mt-20">
          {/* Background Image */}
          <img
            src="/assets/about-us-hero.jpg"
            alt="About Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-end md:mr-40 h-full px-8">
            <div className="max-w-lg p-8 rounded-lg">
              <h1 className="text-xl font-extrabold text-white mb-4">
                About{" "}
                <span className="text-4xl text-yellow-400">
                  Sharath Ravikumar
                </span>
              </h1>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                We are dedicated to delivering the best services with a blend of
                innovation, quality, and commitment. Discover how we can help
                your business thrive and grow with our expert team.
              </p>
              <button onClick={handleGetInTouch} className="inline-block w-40 px-6 py-3 font-semibold rounded-lg bg text-white hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="max-w-7xl mx-auto mt-12 mb-10 px-4">
        <div className="items-center">
          <h2 className="text-center text-4xl text-gray-600 font-bold mb-3">
            About Me
          </h2>
          <p className="md:w-[900px] mx-auto text-center text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            odit quos eligendi, dolorem eos quo atque cumque sapiente est,
            nostrum enim velit quasi similique ipsum repellat quaerat magnam
            saepe porro, omnis nihil ab consequatur provident! Aliquid vel nulla
            magnam temporibus enim a quam dignissimos, non eius delectus est
            saepe ratione, libero tempora reprehenderit atque ducimus illum quo,
            fugiat beatae sunt aliquam molestiae? Inventore ullam qui magnam,
            quas, commodi deleniti ad vero, porro hic corporis temporibus
            tempora. At delectus ipsam numquam quasi error! Ut repellendus
            eligendi laborum, magnam facere iusto alias illum neque omnis
            fugiat, quod odio. Impedit fugiat ex distinctio.
          </p>
        </div>
      </section>

      <section className="w-full py-10">
        <div className="max-w-5xl mx-auto px-20">
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-y-2 md:gap-x-10">
            {steps.map((step) => (
              <div className="bg-yellow-400 rounded-xl shadow-lg flex flex-col items-center justify-center w-32 h-32 text-black text-center">
                {/* Icon at top */}
                <div className="w-8 h-8 mb-1">{step.icon}</div>
                {/* Number in center */}
                <div className="text-3xl font-bold text-black">{step.number}</div>
                {/* Title at bottom */}
                <div className="text-base mt-1">{step.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
  <div className="grid grid-cols-4 md:h-[400px] p-8 gap-8">
    {/* Left: Vision & Mission */}
    <div className="col-span-4 md:col-span-2 flex flex-col justify-center px-4 py-8">
      <h2 className="text-4xl font-bold text-gray-600 mb-4 tracking-widest">
        Our Vision and Mission
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        To empower individuals and organizations to reach their highest
        potential through innovative solutions and dedicated service.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
        veniam, at unde labore eius consequuntur adipisci! Sit odit sunt
        ratione minus cupiditate, iure dolorem laudantium iste debitis
        veritatis eum corporis?
      </p>
    </div>

    {/* Right: Cards - hidden on mobile */}
    <div className="hidden md:block col-span-2">
      <div className="container">
        {cardData.map((card, index) => (
          <div key={index} className="card relative overflow-hidden group">
            {/* Image */}
            <img
              src={card.img}
              alt={card.hoverTitle}
              className="w-full h-full object-cover"
            />

            {/* Initial blue overlay with vertical text */}
            <div className="absolute inset-0 bg-blue-800/50 flex justify-center items-center transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
              <p className="text-white text-2xl font-bold rotate-90 tracking-widest">
                {card.verticalText}
              </p>
            </div>

            {/* Hover content */}
            <div className="absolute inset-0 bg-blue-700/50 flex flex-col justify-center items-center text-center text-white scale-100 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0 group-hover:scale-100">
              <h3 className="text-lg font-semibold mb-2">{card.hoverTitle}</h3>
              <p className="text-sm px-4">{card.hoverDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* MemoryLane timeline below AboutHero */}
      <MemoryLane />

      {/* <section class="max-w-7xl mx-auto grid grid-cols-2 gap-6 h-100">
  <div></div>

  <div class="flex flex-col justify-center">
   <div class="bg-gray-200 rounded-lg shadow-md grid grid-cols-[1fr_2fr] items-center gap-6">
      
      <div class="flex justify-start">
        <img src="https://i.pinimg.com/736x/0a/fc/36/0afc366471d266251cf806d41a70e8da.jpg" 
             alt="Profile"
             class="w-52 h-52 rounded-full object-cover -ml-20" />
      </div>

      <div class="text-left">
        <h2 class="text-xl font-bold mb-2">Centered Content</h2>
        <p class="text-gray-700">
          This is the content area with a gray background. It’s aligned next to the image.
        </p>
      </div>

    </div>
  </div>
</section> */}

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

      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            Awards
          </h2>
          <p className="text-lg text-gray-500 mb-12 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-white w-full h-60 overflow-hidden flex justify-center items-center"
              >
                <img
                  src={award.imgSrc}
                  alt={award.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center bg-gray-50 min-h-[600px]">
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

      <section className="py-16 md:py-16">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white/70 shadow-xl p-8 md:p-12">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-display text-foreground">
            Testimonials
          </h2>

          {/* Avatar Row */}
          <div className="flex items-center justify-center gap-10 md:gap-26 mb-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name}
                className="flex flex-col items-center"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className={`w-16 h-16 rounded-full
                  ${activeIndex === idx ? "" : ""}
                bg-gray-100 object-cover mb-2`}
                />
                <div className="text-sm font-bold text-gray-600 text-center whitespace-nowrap">
                  {testimonial.name}
                </div>
                <div className="text-xs text-muted-foreground text-center max-w-[100px]">
                  {testimonial.title}
                </div>
                {activeIndex === idx ? (
                  <div className="h-1 w-10 bg-blue-500 rounded-full"></div>
                ) : (
                  <div className="h-1 w-10 invisible"></div>
                )}
              </div>
            ))}
          </div>

          {/* Main Testimonial Highlight with Carousel */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center gap-8 min-h-[280px]">
            {/* Avatar and left button */}
            <div className="relative flex-shrink-0">
              <img
                src={active.avatar}
                alt={active.name}
                className="w-52 h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-sm px-4 py-1">
                {active.name}
              </div>
              {/* Left button fixed */}
              <button
                className="absolute left-[-38px] top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full p-2 shadow transition"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                style={{ zIndex: 2 }}
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>
            </div>

            {/* Testimonial text */}
            <div className="flex-1 flex items-center">
              <div>
                <blockquote className="text-lg italic leading-relaxed text-foreground mb-4">
                  {active.quote}
                </blockquote>
                <div className="font-semibold text-secondary">
                  ★ {active.title}
                </div>
              </div>
            </div>

            {/* Right button absolutely positioned to section, not content */}
            <button
              className="absolute right-2 md:-right-5 top-28 transform -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full p-2 shadow transition"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              style={{ zIndex: 2 }}
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>
      </section>

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
};

export default AboutHero;
