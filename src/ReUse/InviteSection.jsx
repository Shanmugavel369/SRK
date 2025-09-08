import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function InviteSection() {
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stakeholder: "",
    purpose: "",
    message: "",
  });
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");

  // Generate simple captcha (example: 4 digit random)
  const [captchaStyles, setCaptchaStyles] = useState([]);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    let styles = [];

    for (let i = 0; i < 5; i++) {
      const char = chars.charAt(Math.floor(Math.random() * chars.length));
      captcha += char;

      styles.push({
        transform: `rotate(${Math.random() * 40 - 20}deg)`,
        color: `hsl(${Math.random() * 360}, 70%, 40%)`,
        fontFamily: ["cursive", "monospace", "serif", "sans-serif"][
          Math.floor(Math.random() * 4)
        ],
      });
    }

    setGeneratedCaptcha(captcha);
    setCaptchaStyles(styles);
  };

  // Generate captcha on popup open
  const handleOpenForm = () => {
    setOpenForm(true);
    generateCaptcha();
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captcha !== generatedCaptcha) {
      alert("Captcha does not match!");
      return;
    }

    try {
      const payload = {
        formType: "invite-guest-speaker",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        additionalData: {
          stakeholder: formData.stakeholder,
          purpose: formData.purpose,
          message: formData.message,
        },
      };

      await axios.post("http://localhost:8080/api/forms/submit", payload);
      navigate("/thank-you");
      setOpenForm(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        stakeholder: "",
        purpose: "",
        message: "",
      });
      setCaptcha("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong, please try again.");
    }
  };

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
            Nominate inspiring leaders or experts to join our event and share
            their knowledge. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tenetur possimus ipsa maiores eveniet omnis nulla delectus
            quam! Nobis ex perspiciatis autem est repudiandae dicta voluptates!
            Impedit dolor quisquam corporis officiis?
          </motion.p>

          {/* Animated Button */}
          <motion.button
            onClick={handleOpenForm}
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
              className="relative bg-white rounded-2xl p-6 md:p-10 w-full max-w-lg md:max-w-2xl shadow-xl z-50 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>

              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
                Guest Speaker Form
              </h3>

              {/* Form */}
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                onSubmit={handleSubmit}
              >
                {/* Name */}
                <label className="flex flex-col text-sm font-medium text-gray-700">
                  Name *
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    className="mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                {/* Email */}
                <label className="flex flex-col text-sm font-medium text-gray-700">
                  Email *
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                    required
                  />
                </label>

                {/* Phone */}
                <label className="flex flex-col text-sm font-medium text-gray-700">
                  Phone *
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                    required
                  />
                </label>

                {/* Stakeholder */}
                <label className="flex flex-col text-sm font-medium text-gray-700">
                  Stakeholder *
                  <input
                    type="text"
                    name="stakeholder"
                    placeholder="Organization / Individual / Institution"
                    value={formData.stakeholder}
                    onChange={handleChange}
                    required
                    className="mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                  />
                </label>

                {/* Purpose Dropdown */}
                <label className="flex flex-col text-sm font-medium text-gray-700 col-span-1 md:col-span-2">
                  Purpose *
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                    className="mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="" disabled>
                      -- Select Purpose --
                    </option>
                    <option value="consultation">Consultation</option>
                    <option value="chief guest">Chief Guest</option>
                    <option value="jury">Jury</option>
                    <option value="speaker">Speaker</option>
                    <option value="workshop">Workshop</option>
                    <option value="guest professor">Guest Professor</option>
                    <option value="one on one discussion">
                      One on One Discussion
                    </option>
                    <option value="career guidance individual">
                      Career Guidance Individual
                    </option>
                  </select>
                </label>

                {/* Message */}
                <label className="flex flex-col text-sm font-medium text-gray-700 col-span-1 md:col-span-2">
                  Message *
                  <textarea
                    name="message"
                    placeholder="Write your message here"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                  ></textarea>
                </label>

                {/* Captcha */}
                <div className="flex flex-col text-sm font-medium text-gray-700 col-span-1 md:col-span-2">
                  Captcha Verification *
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-1">
                    <div className="flex gap-2 bg-gray-100 px-3 py-2 rounded-md border border-gray-300">
                      {generatedCaptcha.split("").map((char, index) => (
                        <span
                          key={index}
                          style={captchaStyles[index]}
                          className="font-bold text-lg"
                        >
                          {char}
                        </span>
                      ))}
                    </div>

                    <input
                      type="text"
                      placeholder="Enter Captcha"
                      value={captcha}
                      onChange={(e) => setCaptcha(e.target.value)}
                      required
                      className="flex-1 p-3 border border-gray-300 rounded-lg outline-none"
                    />
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Refresh
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="col-span-1 md:col-span-2 bg-yellow-400 text-gray-800 rounded-lg py-3 font-semibold shadow-md"
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
