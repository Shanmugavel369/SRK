import {blogData} from "../data/Blog.js"; 
import { useNavigate } from "react-router-dom";

const BlogSection = () => {

  // Take the latest 2 blogs for right + center column
  const recentBlogs = [...blogData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  const navigate = useNavigate();

  const handleBlogs = () =>{
    navigate("/blogs");
  }
  
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 items-start">
        {/* Left column: content */}
        <div className="flex flex-col justify-center p-6 md:h-100 w-100">
          <h2 className="text-3xl text-gray-600 font-extrabold mb-4">
            Recent Blogs
          </h2>
          <p className="text-gray-600 mb-6 md:max-w-md">
            Stay updated with our latest blogs. Explore tips, tutorials, and
            insights from our team.
          </p>
          <button
            onClick={handleBlogs}
            className="relative bg overflow-hidden w-24 border-2 border-gray-200 p-2 font-semibold text-gray-800 text-xs rounded-lg"
          >
              View All
              <span className="inline-block ml-1">→</span>
          </button>
        </div>

        {/* Center + Right columns mapped dynamically */}
        {recentBlogs.map((blog) => (
          <div key={blog.id} className="relative flex justify-center">
            <div className="absolute bottom-0 left-0 bg-white px-3 py-2 max-w-[290px] whitespace-normal break-words">
              <p className="text-2xl md:text-2xl font-extrabold text-gray-500">
                {blog.title}
              </p>
            </div>
            <img
              src={blog.img}
              alt={blog.title}
              className="w-100 h-100 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
