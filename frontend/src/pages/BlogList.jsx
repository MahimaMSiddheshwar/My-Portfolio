import React from "react";
import { Link } from "react-router-dom";
import portfolioData from "../data/mockData";

export default function BlogList() {
  const blogPosts = portfolioData?.blogPosts || [];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">Blog</h1>
          <p className="text-slate-600 mt-2">
            Articles and notes on bioinformatics, genomics, and quality systems.
          </p>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow p-6">
              <div className="text-sm text-slate-500 mb-2">
                {p.category} • {p.readTime} •{" "}
                {new Date(p.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {p.title}
              </h2>

              <p className="text-slate-600 mb-4">{p.excerpt}</p>

              <Link
                to={`/blog/${p.id}`}
                className="text-emerald-600 font-medium hover:text-emerald-700"
              >
                Read Article →
              </Link>
            </div>
          ))}

          {blogPosts.length === 0 && (
            <div className="bg-white rounded-xl shadow p-6 text-slate-600">
              No blog posts found in mockData.js
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
