import { Link } from "react-router-dom";
import DateWithIcon from "./DateIcon";

export default function BlogCard({ blog }) {
  return (
    <div className="overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
      {/* Top Half: Image with Category Tag */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-105"
        />
        {/* Category Tag */}
        <span className="absolute top-3 left-3 bg-blue-800 text-white text-xs px-3 py-1 rounded-full shadow">
          {blog.category}
        </span>
      </div>

      {/* Bottom Half: Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 pl-3 border-l-4 h-12 mb-4 border-blue-800 flex-grow">{blog.title}</h3>
        <p className="text-gray-600 text-sm mb-3 flex-grow">{blog.desc}</p>
        <div className="flex items-center justify-between mt-auto">
          <DateWithIcon date={blog.date} />
          <Link
            to={`/blogs/${blog.id}`}
            className="text-blue-800 text-sm font-semibold hover:underline hover:text-yellow-400 transition duration-300 flex items-center gap-1"
          >
            Read More
            {/* Straight right arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m0 0l-4-4m4 4l-4 4"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
