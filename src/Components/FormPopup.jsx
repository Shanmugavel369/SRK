import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export default function FormPopup() {
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    formType: "PopUp Form",
    additionalData: {
      service: "",
      message: "",
      source: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please verify that you are not a robot!");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/forms/submit",
        FormData
      );

      if (response.status === 200) {
        navigate("/thank-you");
        setShowForm(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          formType: "Contact Form",
          additionalData: {
            service: "",
            message: "",
            source: "",
          },
        });
      }
      setCaptchaValue(null);
      setShowForm(false);
    } catch (err) {
      console.error(err);
      if (err.response) {
        alert("failed to submit form:" + err.response.data);
      } else {
        alert("error submitting form");
      }
    }finally{
      setLoading(false);
    }
  };

  // Show popup after 3 seconds
  useEffect(() => {
    setShowForm(false); // reset
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, [location]);

  // Lock/unlock background scroll
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden"; // disable background scroll
    } else {
      document.body.style.overflow = "auto"; // restore normal scroll
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  return (
    <AnimatePresence>
      {showForm && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-blue-800 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-200"
            onClick={() => setShowForm(false)}
          >
            <X size={28} />
          </button>

          {/* Center container */}
          <div className="flex flex-1 items-center justify-center px-4 py-8">
            <motion.div
              className="bg-white text-gray-900 rounded-2xl shadow-xl w-full max-w-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              {/* Header */}
              <div className="bg-blue-700 text-white text-center rounded-t-2xl p-4">
                <h2 className="text-2xl font-bold">Get A Free Quote Now</h2>
                <p className="text-sm">
                  Send your requirement. We will get back to you within 24
                  hours.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6"
              >
                {/* Row 1 */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="border rounded-lg p-3 w-full"
                    required
                    value={FormData.name}
                    onChange={(e) =>
                      setFormData({ ...FormData, name: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="border rounded-lg p-3 w-full"
                    required
                    value={FormData.email}
                    onChange={(e) =>
                      setFormData({ ...FormData, email: e.target.value })
                    }
                  />
                </div>

                {/* Row 2 */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Phone No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border rounded-lg p-3 w-full"
                    required
                    value={FormData.phone}
                    onChange={(e) =>
                      setFormData({ ...FormData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Select Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="border rounded-lg p-3 w-full"
                    required
                    value={FormData.additionalData.service}
                    onChange={(e) =>
                      setFormData({
                        ...FormData,
                        additionalData: {
                          ...FormData.additionalData,
                          service: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="" disabled>
                      -- Select Service --
                    </option>
                    <option value="web">Web Development</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="design">UI/UX Design</option>
                    <option value="marketing">Digital Marketing</option>
                  </select>
                </div>

                {/* Row 4 */}
                <div className="flex flex-col md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    placeholder="Write your message here..."
                    className="border rounded-lg p-3 w-full"
                    rows={3}
                    value={FormData.additionalData.message}
                    onChange={(e) =>
                      setFormData({
                        ...FormData,
                        additionalData: {
                          ...FormData.additionalData,
                          message: e.target.value,
                        },
                      })
                    }
                  ></textarea>
                </div>

                {/* Row 5 */}
                <div className="flex flex-col md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    How did you hear about us?
                  </label>
                  <input
                    type="text"
                    placeholder="Google, Friend, Social Media..."
                    className="border rounded-lg p-3 w-full"
                    value={FormData.additionalData.source}
                    onChange={(e) =>
                      setFormData({
                        ...FormData,
                        additionalData: {
                          ...FormData.additionalData,
                          source: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                {/* Google reCAPTCHA */}
                <ReCAPTCHA
                  sitekey="6LfMH8IrAAAAADAc-Pgn-x1GD-NP7uhBy6X6lIe0" // replace with your site key
                  onChange={(value) => setCaptchaValue(value)}
                />

                {/* Submit button */}
                <div className="md:col-span-2 flex justify-center">
                  <button
                    type="submit"
                    className="bg-yellow-400 text-gray-900 font-semibold px-10 py-3 rounded-full hover:bg-yellow-500 transition"
                    disabled={loading}
                  >
                    {loading ? "submitting" : "contact us"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
