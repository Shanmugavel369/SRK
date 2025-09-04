import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../data/Blog";
import BlogCard from "../ReUse/Blogcard";
import Breadcrumbs from "../ReUse/Breadcrumbs";
import {
  Facebook,
  Twitter,
  Linkedin,
  User,
  MessageCircle,
  Tag,
  Calendar,
  Share2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQ from "../ReUse/FAQ";

gsap.registerPlugin(ScrollTrigger);

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id.toString() === id);
  const containerRef = useRef(null);
  const headingRefs = useRef([]);
  const currentUrl = window.location.href;

  // Safely extract headings or empty array if blog/content missing
  const headings = blog?.content
    ? blog.content
        .map((c, idx) =>
          c.type === "heading" ? { id: `section-${idx}`, text: c.text, index: idx } : null
        )
        .filter(Boolean)
    : [];

  // Reset headingRefs length to headings length
  headingRefs.current = headingRefs.current.slice(0, headings.length);

  useEffect(() => {
  if (!containerRef.current || !blog) return;

  const leftPanel = containerRef.current.querySelector(".left-panel");
  const rightPanel = containerRef.current.querySelector(".right-panel");
  const lastHeadingElement = headingRefs.current[headingRefs.current.length - 2];

  if (!leftPanel) return;

  const ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: leftPanel,
      start: "top-=100 top",
      end: () => {
        if (lastHeadingElement) {
          const rect = lastHeadingElement.getBoundingClientRect();
          return rect.bottom + window.scrollY + 20;
        }
        if (rightPanel) {
          return rightPanel.getBoundingClientRect().height + window.scrollY;
        }
        return "+=1000";
      },
      pin: true,
      pinSpacing: true,
      markers: false,
      pinType: "fixed"
    });

    headings.forEach((h, idx) => {
      const el = headingRefs.current[idx];
      if (!el) return;

      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          document.querySelectorAll(".toc-link").forEach((link) =>
            link.classList.remove("text-yellow-400", "font-semibold")
          );
          document.getElementById(`toc-${idx}`)?.classList.add("text-yellow-400", "font-semibold");
        },
        onEnterBack: () => {
          document.querySelectorAll(".toc-link").forEach((link) =>
            link.classList.remove("text-yellow-400", "font-semibold")
          );
          document.getElementById(`toc-${idx}`)?.classList.add("text-yellow-400", "font-semibold");
        },
      });
    });
  }, containerRef);

  // Scroll to top after setup
  const scrollToTopTimeout = setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, 150);

  // Use requestAnimationFrame to refresh ScrollTrigger after layout update settles
  const refreshTimeout = requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });

  return () => {
    clearTimeout(scrollToTopTimeout);
    cancelAnimationFrame(refreshTimeout);
    ctx.revert();
  };
}, [id, headings, blog]);



  if (!blog) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-gray-600 text-lg">Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="w-full" ref={containerRef}>
      {/* Hero Image */}
      <div className="w-full mt-16 sm:mt-20">
        <img
          src={blog.image || blog.img}
          alt={blog.title}
          className="w-full h-60 sm:h-80 md:h-[500px] object-cover"
        />
        <div className="max-w-7xl mx-auto px-4 mt-4 sm:mt-6">
    <Breadcrumbs />
  </div>
      </div>

      {/* Meta Info */}
      <div className="max-w-5xl mx-auto py-6 flex flex-col md:flex-row md:items-center md:justify-between text-gray-700 text-sm sm:text-base border-b gap-4">
        <div className="flex flex-wrap items-center gap-4 sm:gap-8">
          <span className="flex items-center gap-2">
            <User size={18} className="text-green-600" />
            <span className="font-medium">Sharath Ravikumar</span>
          </span>
          <span className="flex items-center gap-2">
            <Tag size={18} className="text-blue-500" />
            <span>{blog.category}</span>
          </span>
          <span className="flex items-center gap-2">
            <Calendar size={18} className="text-gray-500" />
            <span>{blog.date}</span>
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="flex items-center gap-2 font-medium text-gray-600">
            <Share2 size={18} className="text-gray-500" />
            Share:
          </span>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              size={22}
              className="cursor-pointer text-blue-600 hover:scale-125 transition"
            />
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              blog.title + " " + currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle
              size={22}
              className="cursor-pointer text-green-500 hover:scale-125 transition"
            />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentUrl
            )}&text=${encodeURIComponent(blog.title)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              size={22}
              className="cursor-pointer text-sky-500 hover:scale-125 transition"
            />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              size={22}
              className="cursor-pointer text-blue-700 hover:scale-125 transition"
            />
          </a>
        </div>
      </div>

      {/* 2 Column Layout */}
      <div className="grid-layout max-w-7xl mx-auto py-8 sm:py-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-start">
        {/* Left Sidebar */}
        <aside className="left-panel col-span-1 hidden md:block">
          <div className="space-y-10">
            {/* CTA */}
            <div className="p-6 rounded-lg shadow-lg bg-white">
              <h3 className="font-bold text-2xl">Get in Touch</h3>
              <p className="text-gray-800 mt-2 text-sm">
                Have questions or feedback? Reach out to us anytime.
              </p>
              <button className="mt-3 w-full bg-blue-800 text-white py-2 px-4 rounded-lg">
                Contact Us
              </button>
            </div>

            {/* TOC */}
            <div className="p-6 rounded-lg shadow-lg bg-white">
              <h3 className="font-bold text-2xl mb-4">Table of Contents</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {headings.map((h, idx) => (
                  <li key={h.id}>
                    <button
                      id={`toc-${idx}`}
                      onClick={() => {
                        const el = headingRefs.current[idx];
                        if (!el) return;
                        const topOffset = 100; // adjust for fixed header
                        const elementPosition = el.getBoundingClientRect().top;
                        const offsetPosition =
                          elementPosition + window.scrollY - topOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }}
                      className="toc-link text-left w-full hover:text-yellow-400"
                    >
                      {h.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Right Content */}
        <article className="right-panel col-span-1 md:col-span-3 space-y-4 sm:space-y-6">
          {blog.content.map((c, idx) => {
  if (c.type === "heading") {
    const headingIndex = headings.findIndex(h => h.index === idx);
    return (
      <h2
        key={idx}
        ref={el => (headingRefs.current[headingIndex] = el)} // properly assign ref by heading index
        id={`section-${headingIndex}`} // add id for accessibility
        className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 sm:mt-6"
      >
        {c.text}
      </h2>
    );
  }
            if (c.type === "paragraph")
              return (
                <p
                  key={idx}
                  className="text-gray-800 text-base sm:text-lg leading-relaxed"
                >
                  {c.text}
                </p>
              );
            if (c.type === "image")
              return (
                <img
                  key={idx}
                  src={c.src}
                  alt="blog-content"
                  className="max-w-3xl h-[400px] object-cover mx-12"
                />
              );
            return null;
          })}
          {blog.faq && blog.faq.length > 0 && <FAQ faqs={blog.faq} />}
        </article>
      </div>

      {/* Related Blogs Section */}
      <div className="max-w-7xl mx-auto py-8 sm:py-10 px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
          Related Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogData
            .filter((b) => b.id !== blog.id && b.category === blog.category)
            .slice(0, 3)
            .map((post) => (
              <BlogCard key={post.id} blog={post} />
            ))}
        </div>
        {blogData.filter((b) => b.id !== blog.id && b.category === blog.category)
          .length === 0 && (
          <p className="text-gray-600 text-base sm:text-lg text-center mt-6">
            No related blogs found.
          </p>
        )}
      </div>
    </div>
  );
}
