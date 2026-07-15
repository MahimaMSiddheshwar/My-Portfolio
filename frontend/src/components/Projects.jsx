import React, { useState } from 'react';
import { Github, Code, Database, Cpu, BarChart3, Filter, Dna, CpuIcon, PipetteIcon, LibraryBigIcon, ComputerIcon, DatabaseIcon, BarChartHorizontalIcon, PieChartIcon, BrainIcon } from 'lucide-react';
import portfolioData from '../data/mockData';
import ProjectsCarousel from './ProjectsCarousel';

const categoryAccents = {
  'Human Brain Connectome': { solid: 'bg-violet-600', gradient: 'from-violet-500 to-purple-600', glow: 'bg-violet-500/30', hoverShadow: 'hover:shadow-violet-500/25' },
  'NGS Analysis': { solid: 'bg-emerald-600', gradient: 'from-emerald-500 to-teal-600', glow: 'bg-emerald-500/30', hoverShadow: 'hover:shadow-emerald-500/25' },
  'Machine Learning & Genomics': { solid: 'bg-blue-600', gradient: 'from-blue-500 to-indigo-600', glow: 'bg-blue-500/30', hoverShadow: 'hover:shadow-blue-500/25' },
  'Network Analysis & Transcriptomics': { solid: 'bg-cyan-600', gradient: 'from-cyan-500 to-teal-600', glow: 'bg-cyan-500/30', hoverShadow: 'hover:shadow-cyan-500/25' },
  'Data Visualization & Analytics': { solid: 'bg-rose-600', gradient: 'from-rose-500 to-pink-600', glow: 'bg-rose-500/30', hoverShadow: 'hover:shadow-rose-500/25' },
  'Omics Analysis & Data Visualization': { solid: 'bg-rose-600', gradient: 'from-rose-500 to-pink-600', glow: 'bg-rose-500/30', hoverShadow: 'hover:shadow-rose-500/25' },
  'Complete Overview from Life Science Research': { solid: 'bg-slate-700', gradient: 'from-slate-600 to-slate-800', glow: 'bg-slate-500/30', hoverShadow: 'hover:shadow-slate-500/25' },
  'Pipeline Development': { solid: 'bg-amber-600', gradient: 'from-amber-500 to-orange-600', glow: 'bg-amber-500/30', hoverShadow: 'hover:shadow-amber-500/25' },
};
const defaultAccent = { solid: 'bg-emerald-600', gradient: 'from-emerald-500 to-teal-600', glow: 'bg-emerald-500/30', hoverShadow: 'hover:shadow-emerald-500/25' };

const getAccent = (category) => categoryAccents[category] || defaultAccent;

const Projects = () => {
  const { projects = [] } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  // Icon logic
  const getProjectIcon = (project, size = 50) => {
    switch (project.category) {
      case 'Human Brain Connectome':
        return <BrainIcon size={size} />;
      case 'NGS Analysis':
        return <Dna size={size} />;
      case 'Machine Learning & Genomics':
        return <Cpu size={size} />;
      case 'Network Analysis & Transcriptomics':
        return <Database size={size} />;
      case 'Pipeline Development':
        return <PieChartIcon size={size} />;
      case 'Data Visualization & Analytics':
      case 'Omics Analysis & Data Visualization':
        return <BarChart3 size={size} />;
      case 'Complete Overview from Life Science Research':
        return <ComputerIcon size={size} />;
      default:
        return <Code size={size} />;
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

        {/* Auto-advancing showcase of every project */}
        <ProjectsCarousel projects={projects} getProjectIcon={getProjectIcon} getAccent={getAccent} />

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

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 [grid-auto-flow:dense]">
          {filteredProjects.length === 0 && (
            <div className="sm:col-span-2 lg:col-span-4 text-center text-slate-600">
              No projects found for this category.
            </div>
          )}

          {filteredProjects.map(project => {
            const accent = getAccent(project.category);
            const isFeatured = project.featured;
            return (
              <div
                key={project.id}
                className={`bg-white rounded-xl shadow-md hover:shadow-2xl ${accent.hoverShadow} transition-all duration-300 transform hover:-translate-y-1 flex flex-col ${isFeatured ? 'lg:col-span-2 lg:row-span-2' : 'sm:col-span-1 lg:col-span-2'
                  }`}
              >

                {/* Header */}
                <div className={`${accent.solid} bg-gradient-to-r ${accent.gradient} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getProjectIcon(project, isFeatured ? 44 : 36)}
                      <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                    </div>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full whitespace-nowrap">{project.period}</span>
                  </div>
                  <span className="inline-block text-xs bg-white/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-700 mb-6">{project.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights?.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex gap-2 text-sm text-slate-700">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 ${accent.solid}`} />
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
                      className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm hover:bg-slate-800 w-fit"
                    >
                      <Github size={16} /> View Code
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
