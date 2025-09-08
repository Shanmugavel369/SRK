import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  HomeIcon,
  InformationCircleIcon,
  UsersIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "About", path: "/about", icon: InformationCircleIcon },
  { name: "Consult Sharath", path: "/consult", icon: UsersIcon },
  { name: "Blogs", path: "/blogs", icon: DocumentTextIcon },
];

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Floating animated circles */}
      <motion.div
        className="absolute top-0 left-0 w-[200px] h-[200px] bg-blue-100 rounded-full opacity-40"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-100 rounded-full opacity-30"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* 404 Text */}
      <motion.h1
        className="text-[12rem] font-extrabold text-gray-300 select-none z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-xl text-gray-600 mb-12 text-center z-10 max-w-xl px-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Sorry, we couldn’t find the page you’re looking for. Try one of the links below.
      </motion.p>

      {/* Links */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => navigate(link.path)}
            className="flex items-center gap-3 px-6 py-3 hover:shadow-xl rounded-xl transition"
          >
            <link.icon className="w-6 h-6 text-blue-600" />
            <span className="font-medium text-gray-800">{link.name}</span>
          </button>
        ))}
      </motion.div>
    </div>
  );
}
