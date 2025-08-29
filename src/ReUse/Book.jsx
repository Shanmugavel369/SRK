import React from "react";

const Book = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-6 my-6">
      <section className="flex gap-4 relative items-center">
        {/* Content on left side: order-1 */}
        <div className="absolute top-0 right-20 mt-12 flex flex-col justify-center w-full h-[calc(100%+2rem)] max-w-[800px] bg-gray-300 p-6 rounded-lg shadow-lg order-1">
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              This is the content heading
            </h2>
            <p className="text-gray-600">
              Here is some centered content with descriptive text. It is placed
              above the animated button.
            </p>
          </div>
          <button
            className="self-center md:self-start bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md transition transform hover:bg-yellow-500 hover:text-white hover:scale-105"
          >
            Hover Me
          </button>
        </div>

        {/* Video on right side: order-2 */}
        <div className="flex-shrink-0 w-52 md:w-64 lg:w-72 aspect-[9/16] bg-gray-300 overflow-hidden shadow-lg z-10 order-2">
          <video
            className="w-full h-full object-cover"
            src="/path-to-medium-height-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <div className="h-20"></div>
    </div>
  );
};

export default Book;
