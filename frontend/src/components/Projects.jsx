import React, { useState } from 'react';
import { Github, ExternalLink, Code, Database, Cpu, BarChart3, Filter } from 'lucide-react';
import portfolioData from '../data/mockData';

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Machine Learning & Genomics': return <Cpu size={20} />;
      case 'Network Analysis & Transcriptomics': return <Database size={20} />;
      case 'Pipeline Development': return <Code size={20} />;
      case 'Data Visualization & Analytics': return <BarChart3 size={20} />;
      default: return <Code size={20} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Machine Learning & Genomics': return 'bg-blue-100 text-blue-700';
      case 'Network Analysis & Transcriptomics': return 'bg-purple-100 text-purple-700';
      case 'Pipeline Development': return 'bg-emerald-100 text-emerald-700';
      case 'Data Visualization & Analytics': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Featured <span className="text-emerald-600">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Exploring the intersection of biology and computation through innovative bioinformatics solutions
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-600 mr-4">
            <Filter size={16} />
            <span>Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${filter === category
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-emerald-50 border border-slate-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Project header with gradient */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(project.category)}
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {project.period}
                  </span>
                </div>
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/20`}>
                  {project.category}
                </span>
              </div>

              {/* Project content */}
              <div className="p-6">
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {project.highlights.length > 3 && (
                    <p className="text-sm text-slate-500 mt-2">
                      +{project.highlights.length - 3} more features
                    </p>
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors duration-200"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg text-sm font-medium hover:bg-emerald-50 transition-colors duration-200"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
