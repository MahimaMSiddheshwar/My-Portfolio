import React from "react";
import { Link } from "react-router-dom";

const FunFactsTeaser = () => {
  return (
    <section
      id="funfacts"
      className="py-16 bg-slate-50 text-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-slate-900">Fun Facts ✨</h2>
      <p className="mb-8 text-lg text-slate-600 max-w-2xl mx-auto">
        Beyond bioinformatics and quality control, I enjoy exploring my creative side —
        from cooking experiments to poetry and sketches. Here's a small glimpse!
      </p>

      {/* Preview Images */}
      <div className="flex justify-center gap-6 mb-6">
        <img
          src="/funfacts/Cooking.jpg"
          alt="Cooking"
          className="w-40 h-40 object-cover rounded-2xl shadow-md"
        />
        <img
          src="/funfacts/Poetry1.png"
          alt="Poetry"
          className="w-40 h-40 object-cover rounded-2xl shadow-md"
        />
        <img
          src="/funfacts/Sketch1.jpg"
          alt="Sketch"
          className="w-40 h-40 object-cover rounded-2xl shadow-md"
        />
      </div>

      {/* Small "View More" link */}
      <div className="mt-4">
        <Link
          to="/funfacts"
          className="text-emerald-600 hover:text-emerald-800 text-sm font-medium inline-flex items-center"
        >
          View more details <span className="ml-1">→</span>
        </Link>
      </div>
    </section>
  );
};

export default FunFactsTeaser;
