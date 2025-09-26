import React from 'react';
import { ArrowRight, MapPin, Mail, Linkedin } from 'lucide-react';
import portfolioData from '../data/mockData';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main content */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight pt-20 sm:pt-28">
              <span className="block">Hello, I'm</span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                {personal.displayName}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-emerald-300 font-medium mb-8 max-w-3xl mx-auto">
              {personal.tagline}
            </p>

            <p className="text-lg text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {personal.bio}
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-emerald-400" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-emerald-400" />
              <a href={`mailto:${personal.email}`} className="hover:text-emerald-300 transition-colors">
                {personal.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={18} className="text-emerald-400" />
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25"
            >
              View My Work
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
