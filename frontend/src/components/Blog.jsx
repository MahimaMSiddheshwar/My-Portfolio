import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen, Microscope, Cpu } from "lucide-react";
import portfolioData from "../data/mockData";

const Blog = () => {
  const navigate = useNavigate();
  const { blogPosts = [] } = portfolioData;

  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI & Genomics":
        return <Cpu size={16} />;
      case "Bioinformatics":
        return <Microscope size={16} />;
      case "Quality Control":
        return <BookOpen size={16} />;
      default:
        return <BookOpen size={16} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "AI & Genomics":
        return "bg-blue-100 text-blue-700";
      case "Bioinformatics":
        return "bg-emerald-100 text-emerald-700";
      case "Quality Control":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Latest <span className="text-emerald-600">Insights</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sharing knowledge and discoveries from bioinformatics and computational biology
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              {/* Top gradient bar */}
              <div
                className={`h-2 ${post.category === "AI & Genomics"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                  : post.category === "Bioinformatics"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600"
                    : "bg-gradient-to-r from-purple-500 to-pink-600"
                  }`}
              />

              <div className="p-6">
                {/* Category badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      post.category
                    )}`}
                  >
                    {getCategoryIcon(post.category)}
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Read Article -> navigates */}
                <button
                  className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-200 group-hover:gap-3"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  Read Article
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="text-center">
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
