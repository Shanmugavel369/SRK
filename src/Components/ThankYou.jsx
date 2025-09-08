import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/outline";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const clients = [
  "/images/client1.png",
  "/images/client2.png",
  "/images/client3.png",
  "/images/client4.png",
  "/images/client5.png",
];

function ThankYouPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* ===== Thank You Section ===== */}
      <section className="flex-1 flex flex-col items-center justify-center mt-10 py-4 px-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-green-500 mb-6 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md">
          Your submission was successfully received. We will get back to you as
          soon as possible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            <HomeIcon className="w-5 h-5" />
            Home
          </button>
          <button
            onClick={handleGoBack}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold transition"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </section>

      {/* ===== Clients Carousel Section ===== */}
      <section className="overflow-hidden text-gray-700 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12">Our Clients</h2>
        <div className="relative w-full">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
            }}
          >
            {[...clients, ...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Client ${index}`}
                  className="object-contain h-full w-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ThankYouPage;
