import CalendlyEmbed from "../Components/CalendlyEmbed";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    source: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // payload format matches backend model
      const payload = {
        formType: "general-contact",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        additionalData: {
          service: formData.service,
          message: formData.message,
          source: formData.source,
        },
      };

      await axios.post("http://localhost:8080/api/forms/submit", payload); // backend endpoint

      navigate("/thank-you");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full min-h-screen text-gray-800">
      {/* Banner */}
      <section className="relative bg-blue-800 text-white py-20 mt-20 flex items-center justify-center">
        <div className="absolute inset-0 bg opacity-80"></div>
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Let’s connect! Reach out for collaborations, projects, or just to
            say hello.
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Call Card at top center */}
        <div className="flex justify-center mb-12">
          <a
            href="tel:+918825763696"
            className="flex flex-col text-black p-6 cursor-pointer max-w-[340px] h-[200px]"
          >
            <div className="flex flex-col items-center justify-center gap-3 h-full text-center">
              <PhoneIcon className="w-7 h-7 flex-shrink-0 text-blue-700" />
              <h2 className="text-sm font-semibold">Call</h2>
              <p className="text-3xl truncate max-w-full">+91 8825763696</p>
            </div>
          </a>
        </div>

        {/* Email and Address cards side by side */}
        <div className="flex flex-col sm:flex-row max-w-4xl mx-auto justify-between gap-4 mb-16">
          {/* Email Card */}
          <a
            href="mailto:sharathravikumar@gmail.com"
            className="flex flex-col text-black p-6 flex-1 cursor-pointer max-w-[340px] h-[140px] mx-auto rounded-md bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300"
          >
            <div className="flex flex-col items-center justify-center gap-3 h-full text-center">
              <EnvelopeIcon className="w-7 h-7 flex-shrink-0 text-black" />
              <h2 className="text-sm font-semibold">Email</h2>
              <p className="text-xl leading-snug break-words">
                sharathravikumar@gmail.com
              </p>
            </div>
          </a>

          {/* Address Card */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=2nd+Floor,+13A,+Subham+Nagar,+Old+Pallavaram,+St.+Thomas+Mount-cum-Pallavaram,+Chennai,+Tamil+Nadu+600117"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col text-black p-6 flex-1 cursor-pointer max-w-[340px] h-[140px] mx-auto rounded-md bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300"
          >
            <div className="flex flex-col items-center justify-center gap-3 h-full text-center">
              <MapPinIcon className="w-7 h-7 flex-shrink-0 text-black" />
              <h2 className="text-sm font-semibold">Address</h2>
              <p className="text-sm leading-snug break-words">
                2nd Floor, 13A, Subham Nagar, St.Thomas Mount-cum-Pallavaram,
                Chennai, Tamil Nadu 600117
              </p>
            </div>
          </a>
        </div>
        {/* Map Section */}
        <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200 h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4564.5801581103615!2d80.17250806736554!3d12.96524283177039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e1338a31c83%3A0x7c67930bee472649!2s2nd%20Floor%2C%2013%2C%20Subham%20Nagar%2C%20Old%20Pallavaram%2C%20Chennai%2C%20St.Thomas%20Mount-cum-Pallavaram%2C%20Tamil%20Nadu%20600117!5e0!3m2!1sen!2sin!4v1756965983580!5m2!1sen!2sin"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Left Form - Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              Contact Us
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">
                  Select Service <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="design">UI/UX Design</option>
                </select>
              </div>

              <div className="flex flex-col">
                  <label className="font-medium text-gray-700">
                    How did you hear about us? <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="source"
                    type="text"
                    placeholder="Google, Friend, Social Media..."
                    className="border rounded-lg p-3 w-full"
                    value={formData.source}
                    onChange={handleChange}
                    required
                  />
                </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right Form - Invitation Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              Schedule an Event
            </h2>
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
