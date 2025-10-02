import React from "react";
import { Link } from "react-router-dom";
import portfolioData from "../data/mockData";

const Insights = () => {
  const { insights = [] } = portfolioData;

  return (
    <section className="p-8 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Latest Insights</h1>
      <p className="text-center text-slate-600 mb-12">
        Sharing knowledge and discoveries from bioinformatics, genomics, and quality control.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {insights.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <p className="text-xs uppercase text-emerald-600 mb-2">
                {item.category}
              </p>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {item.date} • {item.readTime}
              </p>
              <p className="text-gray-700 mb-4">{item.summary}</p>
            </div>

            {/* ✅ Navigation Link */}
            <Link
              to={`/insights/${item.id}`}
              className="text-emerald-600 font-medium hover:underline mt-auto"
            >
              Read Article →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
