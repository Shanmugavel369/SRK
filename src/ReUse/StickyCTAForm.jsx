import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiSend } from "react-icons/fi";

export default function StickyCTAForm() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      {/* Sticky CTA Label */}

      {/* Sticky CTA Label */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setOpenForm(true)}
          className="bg-yellow-400 text-gray-800 w-16 h-16 rounded-lg flex flex-col items-center justify-center font-semibold shadow-lg hover:bg-yellow-500 transition-transform hover:scale-110"
        >
          <FiSend className="text-2xl mb-1" />
          <span className="text-xs">Ask Me</span>
        </button>
      </div>

      {/* Sliding Form */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-xl z-50 overflow-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 font-bold"
            >
              ✕
            </button>

            {/* Form Content */}
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <textarea
                  placeholder="Message"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                  rows={4}
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-gray-800 rounded-lg py-3 font-semibold hover:scale-105 transition-transform shadow-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
