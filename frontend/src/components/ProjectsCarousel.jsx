import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const ProjectsCarousel = ({ projects = [], getProjectIcon }) => {
  const [current, setCurrent] = useState(0);

  // Auto-play every 5 seconds
  useEffect(() => {
    if (projects.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  if (projects.length === 0) return null;

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const project = projects[current];

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="relative bg-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-2xl shadow-xl overflow-hidden text-white p-8 sm:p-12 min-h-[320px] flex flex-col justify-center">
        <div className="inline-flex items-center gap-1.5 w-fit px-3 py-1 mb-4 rounded-full bg-amber-400/15 border border-amber-300/30 text-amber-300 text-xs font-semibold uppercase tracking-wide">
          <Sparkles size={12} />
          Featured
        </div>

        {getProjectIcon && (
          <div className="mb-4 text-emerald-300">{getProjectIcon(project)}</div>
        )}

        <h3 className="text-2xl sm:text-3xl font-bold mb-3">{project.title}</h3>
        <p className="text-slate-300 max-w-2xl leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        <span className="inline-block w-fit text-xs bg-white/10 px-3 py-1 rounded-full text-emerald-200">
          {project.category}
        </span>

        {/* Prev Button */}
        <button
          onClick={goPrev}
          aria-label="Previous featured project"
          className="absolute top-1/2 left-3 sm:left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={goNext}
          aria-label="Next featured project"
          className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to featured project ${idx + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition ${
              idx === current ? "bg-emerald-500" : "bg-slate-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;
