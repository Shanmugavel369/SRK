import { useState, useMemo } from "react";
import { blogData } from "../data/Blog";
import BlogCard from "../ReUse/Blogcard";
import DateWithIcon from "../ReUse/DateIcon";

export default function BlogListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const [email, setEmail] = useState(""); // for banner

  // Categories dynamically
  const categories = ["All", ...new Set(blogData.map((b) => b.category))];

  // Featured Blog (based on featured flag)
  const featuredBlog = blogData.find((b) => b.featured) || blogData[0];

  // Search results (appear above featured blog)
  const searchResults = useMemo(() => {
    if (searchTerm.trim() === "") return [];
    return blogData.filter(
      (b) =>
        b.id !== featuredBlog.id &&
        b.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, featuredBlog.id]);

  // Blogs for the category grid (below featured blog)
  const categoryBlogs = useMemo(() => {
    if (searchTerm.trim() !== "") return []; // Don't show category grid while searching
    if (selectedCategory === "All") {
      return blogData.filter((b) => b.id !== featuredBlog.id);
    }
    return blogData.filter(
      (b) => b.id !== featuredBlog.id && b.category === selectedCategory
    );
  }, [selectedCategory, searchTerm, featuredBlog.id]);

  // Pagination for category grid
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = categoryBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(categoryBlogs.length / blogsPerPage);

  return (
    <div>
    <section className="max-w-7xl mx-auto px-4 py-16 mt-8">
      {/* Entrance Title & Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">
          Our <span className="text-yellow-400">Blogs</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Explore our latest insights and tips across multiple domains.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10 relative w-full max-w-lg mx-auto">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Search blogs by title..."
          className="border rounded-xl px-10 py-3 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700 placeholder-gray-400"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset page
          }}
        />
      </div>

      {/* Search Results */}
      {searchTerm.trim() !== "" && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5">Search Results</h2>
          {searchResults.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {searchResults.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-gray-500 text-lg">No blogs found.</p>
            </div>
          )}
        </div>
      )}

      {/* Featured Blog */}
      {featuredBlog && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5">Featured Blog</h2>
          <div className="h-100 border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col md:flex-row">
            {/* Image with Featured Tag */}
            <div className="relative w-full md:w-1/2 h-full">
              <img
                src={featuredBlog.img}
                alt={featuredBlog.title}
                className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-105"
              />
              {/* Featured Tag */}
              <span className="absolute top-3 left-3 bg-yellow-400 text-white text-xs px-3 py-1 rounded-full shadow flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                </svg>
                Featured
              </span>
            </div>

            {/* Content */}
            <div className="p-12 flex flex-col justify-between md:w-1/2 relative">
              <div>
                <h3 className="text-4xl font-bold mt-3">{featuredBlog.title}</h3>
                <p className="text-xl text-gray-600 mt-4">{featuredBlog.desc}</p>
                {/* Category label */}
                <span className="absolute top-3 right-3 bg-blue-800 text-white text-xs px-3 py-1 rounded-full shadow">
                  {featuredBlog.category}
                </span>
              </div>
              {/* Date & Button */}
              <div className="mt-6 flex flex-col items-start gap-2">
                <DateWithIcon date={featuredBlog.date} />
                <button className="text-white bg-blue-800 mt-1 px-4 py-2 rounded-md hover:bg-blue-900 transition flex items-center gap-1">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Filter Tabs */}
      {searchTerm.trim() === "" && (
        <div className="flex gap-4 mb-10 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full border shadow-sm transition font-medium ${
                selectedCategory === cat
                  ? "bg-blue-800 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Category Blogs Grid */}
      {searchTerm.trim() === "" && (
        <>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            ) : (
              <p className="text-center col-span-3 text-gray-500">No blogs found.</p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-6">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-full border font-medium transition ${
                    currentPage === i + 1
                      ? "bg-blue-800 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      {/* Stay Updated Banner */}
      

    </section>
    {/* Stay Updated Banner - Full Width */}
<div className="w-full py-20 mt-16 bg-blue-800">
  <div className="flex flex-col items-center justify-center gap-6 px-4 max-w-3xl mx-auto">
    {/* Text */}
    <div className="text-white text-center space-y-3">
      <h2 className="text-3xl md:text-4xl font-bold">
        Stay Updated with Latest Insights
      </h2>
      <p className="text-white text-lg">
        Subscribe to our newsletter and never miss an update.
      </p>
    </div>

    {/* Form */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Subscribed with: ${email}`);
        setEmail("");
      }}
      className="flex flex-col md:flex-row gap-4 w-full max-w-md"
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-5 py-3 rounded-md text-white focus:outline-none w-full border border-white"
      />
      <button
        type="submit"
        className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</div>

    </div>
  );
}
