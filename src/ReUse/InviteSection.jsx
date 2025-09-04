import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function InviteSection() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <section className="relative bg-white px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Column: Image with animation */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://sharathravikumar.com/wp-content/uploads/2024/12/sharath.png"
            alt="Guest Speaker"
            className="w-full max-w-sm"
          />
        </motion.div>

        {/* Right Column: Text + Button with animation */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-800"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Invite a Guest Speaker Lorem, ipsum dolor.
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-lg"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nominate inspiring leaders or experts to join our event and share their knowledge. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur possimus ipsa maiores eveniet omnis nulla delectus quam! Nobis ex perspiciatis autem est repudiandae dicta voluptates! Impedit dolor quisquam corporis officiis?
          </motion.p>

          {/* Animated Button */}
          <motion.button
            onClick={() => setOpenForm(true)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg mb-2 md:mb-0 font-semibold shadow-md"
          >
            Invite Sharath Ravikumar
          </motion.button>
        </motion.div>
      </div>

      {/* Centered Popup Form */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            {/* Background overlay */}
            <motion.div
              onClick={() => setOpenForm(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black"
            ></motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative bg-white rounded-2xl p-10 w-full max-w-md shadow-xl z-50"
            >
              <button
                onClick={() => setOpenForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Guest Speaker Form</h3>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Speaker Name"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email / Contact Info"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="Topic / Session Idea"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="Your Name / Organization"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-gray-800 rounded-lg py-3 font-semibold shadow-md"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
