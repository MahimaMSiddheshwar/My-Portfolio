import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DURATION = 1000;
const defaultAccent = { solid: "bg-emerald-600", gradient: "from-emerald-500 to-teal-600", glow: "bg-emerald-500/30" };

const ProjectsCarousel = ({ projects = [], getProjectIcon, getAccent }) => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-play through every project, with a visible countdown bar
  useEffect(() => {
    if (projects.length <= 1) return;
    setProgress(0);
    const start = Date.now();

    const tick = setInterval(() => {
      setProgress(Math.min(100, ((Date.now() - start) / DURATION) * 100));
    }, 50);

    const advance = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, DURATION);

    return () => {
      clearInterval(tick);
      clearTimeout(advance);
    };
  }, [current, projects.length]);

  if (projects.length === 0) return null;

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const project = projects[current];
  const accent = getAccent ? getAccent(project.category) : defaultAccent;

  return (
    <div className="max-w-4xl mx-auto mb-16 relative">
      {/* Soft colored glow behind the panel, matches the current project's category */}
      <div
        className={`absolute -inset-6 rounded-2xl blur-3xl opacity-60 -z-10 transition-colors duration-500 ${accent.glow}`}
      ></div>

      <div className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden text-white">
        {/* Colored top accent bar, matches the project's category */}
        <div className={`h-1.5 w-full ${accent.solid} bg-gradient-to-r ${accent.gradient}`}></div>

        <div key={project.id} className="p-8 sm:p-12 min-h-[300px] flex flex-col justify-center carousel-fade-in">
          <div className="flex items-start justify-between mb-5">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg ${accent.solid} bg-gradient-to-br ${accent.gradient}`}
            >
              {getProjectIcon && getProjectIcon(project, 32)}
            </div>
            <span className="text-xs text-slate-400 font-mono whitespace-nowrap">
              {current + 1} / {projects.length}
            </span>
          </div>

          <span className="inline-block w-fit text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full text-slate-200 mb-3">
            {project.category}
          </span>

          <h3 className="text-2xl sm:text-3xl font-bold mb-3">{project.title}</h3>
          <p className="text-slate-300 max-w-2xl leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Prev Button */}
        <button
          onClick={goPrev}
          aria-label="Previous project"
          className="absolute top-1/2 left-3 sm:left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={goNext}
          aria-label="Next project"
          className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* Autoplay progress bar */}
        <div className="h-1 w-full bg-white/10">
          <div
            className={`h-full ${accent.solid}`}
            style={{ width: `${progress}%`, transition: "width 50ms linear" }}
          ></div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        {projects.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to project ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              idx === current ? "bg-emerald-500 w-6" : "bg-slate-300 w-2.5"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;
