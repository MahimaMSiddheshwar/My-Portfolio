import React from 'react';
import { Heart, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import portfolioData from '../data/mockData';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <h3 className="hero-name-gradient text-2xl font-bold mb-4">
              {personal.displayName}
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              {personal.tagline} - Passionate about leveraging computational methods
              to advance biological research and improve healthcare outcomes.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://bioinformatics-insights.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-left"
              >
                Insights Hub
                <ExternalLink size={14} />
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-slate-300">
              <div>
                <p className="text-sm font-medium text-slate-400">Email</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  {personal.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-400">Location</p>
                <p>{personal.location}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-400">Phone</p>
                <p>{personal.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specialties banner */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium">
              Bioinformatics
            </span>
            <span className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
              Genomics Analysis
            </span>
            <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
              Machine Learning
            </span>
            <span className="px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-medium">
              Quality Control
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span>© {currentYear} {personal.displayName}. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>for bioinformatics innovation.</span>
            </div>
            <div className="text-sm text-slate-400">
              <span>Bridging Biology & Data Science</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
