import React, { useState } from 'react';
import { Github, Code, Database, Cpu, BarChart3, Filter, Dna, CpuIcon, PipetteIcon, LibraryBigIcon, ComputerIcon, DatabaseIcon, BarChartHorizontalIcon, PieChartIcon } from 'lucide-react';
import portfolioData from '../data/mockData';

const Projects = () => {
  const { projects = [] } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  // Icon logic
  const getProjectIcon = (project) => {
    // ✅ DNA icon ONLY for project with id = 1
    if (project.id === 1) return <Dna size={55} />;

    switch (project.category) {
      case 'NGS Analysis': return <Dna size={55} />;
      case 'Machine Learning & Genomics': return <Cpu size={20} />;
      case 'Network Analysis & Transcriptomics': return <Database size={20} />;
      case 'Pipeline Development': return <PieChartIcon size={20} />;
      case 'Data Visualization & Analytics': return <BarChart3 size={20} />;
      case 'Omics Analysis & Data Visualization': return <BarChart3 size={20} />;
      case 'Complete Overview from Life Science Research': return <ComputerIcon size={20} />;
      default: return <Code size={20} />;
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
            Selected bioinformatics, genomics, and data science projects showcasing applied analysis and reproducible workflows
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-600 mr-4">
            <Filter size={16} /> Filter by:
          </div>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${filter === category
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-slate-700 border hover:bg-emerald-50'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.length === 0 && (
            <div className="md:col-span-2 text-center text-slate-600">
              No projects found for this category.
            </div>
          )}

          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">

              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getProjectIcon(project)}
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{project.period}</span>
                </div>
                <span className="inline-block text-xs bg-white/20 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-700 mb-6">{project.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights?.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm hover:bg-slate-800"
                  >
                    <Github size={16} /> View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
