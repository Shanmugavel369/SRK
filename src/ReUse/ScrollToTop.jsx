import { useState, useEffect } from "react";
import { CgArrowLongUpR } from "react-icons/cg";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Show button after user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-14 right-2 w-12 h-12 bg-yellow-400 text-gray-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-yellow-500 transition-transform hover:scale-110 z-50"
        >
          <CgArrowLongUpR className="text-xl" />
        </button>
      )}
    </>
  );
}
