import React, { useEffect } from "react";
import AchievementsCarousel from "./AchievementsCarousel"; // ✅ fixed import

const Achievements = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // ✅ scroll to top on navigation
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 text-center">
          Achievements 🏆
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-12">
          A collection of milestones, awards, and recognitions that have shaped my journey.
        </p>

        {/* ✅ Corrected usage */}
        <AchievementsCarousel count={13} />
      </div>
    </section>
  );
};

export default Achievements;
