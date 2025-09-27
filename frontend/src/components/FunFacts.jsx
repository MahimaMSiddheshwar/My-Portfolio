import React, { useState } from "react";

const FunFacts = () => {
  const images = [
    "Cooking.jpg",
    "Poetry1.png", "Poetry2.png", "Poetry3.png", "Poetry4.png", "Poetry5.jpg", "Poetry6.png", "Poetry7.png",
    "Sketch1.jpg", "Sketch2.jpg", "Sketch3.jpg", "Sketch4.jpg", "Sketch5.jpg"
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="min-h-screen bg-slate-100 text-slate-900 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Fun Facts Gallery 🎉</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-slate-600">
        A closer look at my creative side — from poems and sketches to cooking experiments.
        These hobbies keep me inspired and balanced outside of work.
      </p>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={`/funfacts/${images[current]}`}
            alt={`Fun Fact ${current + 1}`}
            className="w-full h-[500px] object-contain rounded-xl shadow-lg transition duration-500"
          />
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700"
        >
          ⬅
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700"
        >
          ➡
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-emerald-600" : "bg-gray-400"
              }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
