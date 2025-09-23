import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Microscope, Cpu } from 'lucide-react';
import portfolioData from '../data/mockData';

const Blog = () => {
  const { blogPosts } = portfolioData;

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI & Genomics': return <Cpu size={16} />;
      case 'Bioinformatics': return <Microscope size={16} />;
      case 'Quality Control': return <BookOpen size={16} />;
      default: return <BookOpen size={16} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI & Genomics': return 'bg-blue-100 text-blue-700';
      case 'Bioinformatics': return 'bg-emerald-100 text-emerald-700';
      case 'Quality Control': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
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
            Sharing knowledge and discoveries from the fascinating world of bioinformatics and computational biology
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
              {/* Post header with gradient based on category */}
              <div className={`h-2 ${post.category === 'AI & Genomics' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' :
                  post.category === 'Bioinformatics' ? 'bg-gradient-to-r from-emerald-500 to-teal-600' :
                    'bg-gradient-to-r from-purple-500 to-pink-600'
                }`}></div>

              <div className="p-6">
                {/* Category badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {getCategoryIcon(post.category)}
                    {post.category}
                  </span>
                </div>

                {/* Post title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Post excerpt */}
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Post meta */}
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Read more button */}
                <button
                  className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-200 group-hover:gap-3"
                  onClick={() => {
                    // Mock blog post navigation
                    console.log(`Navigate to blog post: ${post.title}`);
                  }}
                >
                  Read Article
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Blog features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Microscope size={24} className="text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Research Insights</h3>
            <p className="text-slate-600">Deep dives into cutting-edge bioinformatics research and methodologies</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu size={24} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Technical Tutorials</h3>
            <p className="text-slate-600">Step-by-step guides on bioinformatics tools and computational techniques</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={24} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Industry Insights</h3>
            <p className="text-slate-600">Perspectives from quality control and pharmaceutical biotechnology</p>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="bg-white rounded-xl p-8 text-center shadow-md">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Stay Updated</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Get notified about new articles, research insights, and bioinformatics discoveries.
            Join a community of professionals bridging biology and data science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
