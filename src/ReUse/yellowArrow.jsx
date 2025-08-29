function YellowArrowCircle() {
  return (
    <div className="mt-6 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M9 18l6-6-6-6" /> {/* Right arrow icon */}
      </svg>
    </div>
  );
}
export default YellowArrowCircle;