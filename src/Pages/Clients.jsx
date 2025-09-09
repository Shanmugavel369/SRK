import React,{useState} from 'react';


const Clients = () => {
  const [expanded, setExpanded] = useState(false);

  const clients = [
    "https://via.placeholder.com/150?text=Client+1",
    "https://via.placeholder.com/150?text=Client+2",
    "https://via.placeholder.com/150?text=Client+3",
    "https://via.placeholder.com/150?text=Client+4",
    "https://via.placeholder.com/150?text=Client+5",
  ];

  const scrollingClients = [...clients, ...clients];


  return (
    <div className="relative">
      {/* Hero Banner with Image */}
      <section className="relative w-full h-64 md:h-96 mt-20">
        {/* Background Image */}
        <img
          src="https://s29814.pcdn.co/wp-content/uploads/2022/10/Shutterstock_749265139-1.png"
          alt="Clients Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Our Clients</h1>
            <p className="mt-4 text-lg md:text-xl text-white">
              We have worked with a diverse range of clients across various industries.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full min-h-[300px] bg-gray-50 flex justify-center py-10">
      <div className="w-full max-w-7xl px-4 flex flex-col">
        {/* Heading + X Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Our Clients</h2>
          <button
            className="text-gray-500 hover:text-gray-800 font-bold text-xl"
            onClick={() => setExpanded(!expanded)}
          >
            ×
          </button>
        </div>

        {/* Seamless Auto-Scrolling Carousel */}
        <div className="overflow-hidden">
          <div className="flex animate-scrollSpace">
            {scrollingClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-md flex items-center justify-center mx-2"
              >
                <img src={client} alt={`Client ${index + 1}`} className="h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Collapsible Content */}
        {expanded && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md transition-all">
            <p className="text-gray-700">
              Here is some detailed information about our clients. You can include descriptions,
              testimonials, or any other content here. This section expands when you click the “X”
              button.
            </p>
          </div>
        )}

        {/* Expand Button */}
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-4 self-start text-green-600 font-semibold hover:underline"
          >
            Show More
          </button>
        )}
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scrollSpace {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scrollSpace {
          display: flex;
          gap: 1rem;
          animation: scrollSpace 20s linear infinite;
        }
      `}</style>
    </section>
    </div>
  );
};

export default Clients;
