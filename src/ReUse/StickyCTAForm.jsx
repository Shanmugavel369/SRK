import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha"; // import captcha
import { useNavigate } from "react-router-dom";

export default function StickyCTAForm() {
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stakeholder: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null); // captcha state
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot!");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        formType: "Ask-me",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        additionalData: {
          stakeholder: formData.stakeholder,
          message: formData.message,
        },
      };
      await axios.post(`http://localhost:8080/api/forms/submit?captcha=${captchaValue}`, payload);
      navigate("/thank-you")
      setFormData({
        name: "",
        email: "",
        phone: "",
        stakeholder: "",
        message: "",
      });
      setCaptchaValue(null);
      setOpenForm(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Sticky CTA Label */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setOpenForm(true)}
          className="bg-yellow-400 text-gray-800 w-12 md:w-16 h-16 rounded-lg flex flex-col items-center justify-center font-semibold shadow-lg hover:bg-yellow-500 transition-transform hover:scale-110"
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
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <input
                  type="text"
                  name="stakeholder"
                  value={formData.stakeholder}
                  onChange={handleChange}
                  placeholder="Stakeholder"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                  rows={4}
                />

                {/* Google reCAPTCHA */}
                <ReCAPTCHA
                  sitekey="6LfMH8IrAAAAADAc-Pgn-x1GD-NP7uhBy6X6lIe0" // replace with your site key
                  onChange={(value) => setCaptchaValue(value)}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-yellow-400 text-gray-800 rounded-lg py-3 font-semibold hover:scale-105 transition-transform shadow-md disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
