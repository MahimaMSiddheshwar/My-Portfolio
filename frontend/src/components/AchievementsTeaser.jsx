import React from "react";
import { Link } from "react-router-dom";

const AchievementsTeaser = () => {
  const images = [
    { src: "/achievements/award1.jpg", alt: "Achievement 1" },
    { src: "/achievements/award2.jpg", alt: "Achievement 2" },
    { src: "/achievements/award3.jpg", alt: "Achievement 3" },
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          Achievements 🏆
        </h2>
        <p className="text-lg text-slate-600 mb-10">
          A few highlights from my journey — academic milestones, certifications,
          and accomplishments that shaped my career path.
        </p>

        {/* Grid of images only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3 w-44 h-44 flex items-center justify-center"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* View more link */}
        <div className="mt-8">
          <Link
            to="/achievements"
            className="text-emerald-600 font-medium hover:underline"
          >
            View more details →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AchievementsTeaser;
