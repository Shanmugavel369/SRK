import {useState} from "react"

const BlogSection = () => {

    const [Hovered, setHovered] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left column: content */}
        <div className="flex flex-col justify-center p-6 h-100 w-100">
          <h2 className="text-3xl text-gray-600 font-extrabold mb-4">
            Recent Blogs
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            This is your left column content. It is vertically aligned to the top
            and centered horizontally within the column. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit.
          </p>
          <button
              className="relative overflow-hidden w-24 border-2 border-gray-200 p-2 font-semibold text-gray-800 text-xs"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Sliding yellow background */}
              <span
                className={`absolute inset-0 bg-yellow-400 transition-transform duration-300 
          ${Hovered ? "translate-x-0" : "-translate-x-full"} z-0`}
                style={{ pointerEvents: "none" }}
              />
              {/* Button content */}
              <span
                className={`relative z-10 flex items-center text-sm ${
                  Hovered ? "text-white" : "text-gray-800"
                } transition-colors duration-300`}
              >
                View All
                <span className="inline-block ml-1">→</span>
              </span>
            </button>
        </div>

        {/* Center column: image */}
        <div className="relative flex justify-center">
          {/* Fixed-width overlay with text wrapping */}
          <div className="absolute bottom-0 left-0 bg-white px-3 py-2 max-w-[290px] whitespace-normal break-words">
            <p className="text-4xl font-extrabold text-gray-500">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2015/06/01/09/04/blog-793047_960_720.jpg"
            alt="Center visual"
            className="w-100 h-100"
          />
        </div>

        {/* Right column: image */}
        <div className="relative flex justify-center">
          {/* Same setup */}
          <div className="absolute bottom-0 left-0 bg-white px-3 py-2 max-w-[290px] whitespace-normal break-words">
            <p className="text-4xl font-extrabold text-gray-500">
              This is longer text that will force the box 
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/6964861/pexels-photo-6964861.jpeg?cs=srgb&dl=pexels-cottonbro-studio-6964861.jpg&fm=jpg"
            alt="Right visual"
            className="w-100 h-100"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
