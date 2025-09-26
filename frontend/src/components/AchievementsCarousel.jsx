import React, { useState, useEffect } from "react";

const AchievementsCarousel = ({ count = 16 }) => {
  const images = Array.from(
    { length: count },
    (_, i) => `/achievements/award${i + 1}.jpg`
  );

  const [current, setCurrent] = useState(0);

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-10">
      <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        My Achievements
      </h3>

      <div className="relative w-full h-80 rounded-xl shadow-lg overflow-hidden">
        <img
          src={images[current]}
          alt={`Achievement ${current + 1}`}
          className="w-full h-full object-contain transition-all duration-700 bg-black"
        />

        {/* Prev Button */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-slate-900/50 text-white px-3 py-2 rounded-full hover:bg-slate-900 transition"
        >
          ◀
        </button>

        {/* Next Button */}
        <button
          onClick={goNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-slate-900/50 text-white px-3 py-2 rounded-full hover:bg-slate-900 transition"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-emerald-600" : "bg-gray-300"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AchievementsCarousel;
