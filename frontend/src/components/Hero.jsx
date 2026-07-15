import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, MapPin, Mail, Linkedin } from 'lucide-react';
import portfolioData from '../data/mockData';
import NetworkGraphBackground from './NetworkGraphBackground';

const Hero = () => {
  const { personal } = portfolioData;

  const terminalLines = useMemo(
    () => [
      { prompt: 'Who Am I? ', output: personal.displayName, isName: true },
      { prompt: ' My Role', output: personal.tagline },
      { prompt: ' About Me', output: personal.bio },
    ],
    [personal]
  );

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  // Hand-rolled typewriter effect — no animation library needed
  useEffect(() => {
    if (lineIndex >= terminalLines.length) {
      setDone(true);
      return;
    }
    const currentOutput = terminalLines[lineIndex].output;
    if (charIndex < currentOutput.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), 16);
      return () => clearTimeout(timeout);
    }
    const pause = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 450);
    return () => clearTimeout(pause);
  }, [lineIndex, charIndex, terminalLines]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden py-28"
    >
      {/* Background texture and animated network graph */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 text-emerald-400/10 science-dot-grid"></div>
        <div className="absolute inset-0 text-emerald-400/25">
          <NetworkGraphBackground />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-sm font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Bioinformatics Analyst · Genomics · Data Science
        </div>

        {/* Terminal window */}
        <div className="bg-slate-950/90 border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm mb-10">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="ml-3 text-xs text-slate-400 font-mono">mahima@portfolio:~</span>
          </div>
          <div className="p-6 sm:p-8 font-mono text-sm sm:text-base min-h-[220px] sm:min-h-[240px]">
            {terminalLines.map((line, idx) => {
              if (idx > lineIndex) return null;
              const isCurrent = idx === lineIndex;
              const revealedOutput = isCurrent ? line.output.slice(0, charIndex) : line.output;
              const showCursor = isCurrent && !done;
              const OutputTag = line.isName ? 'h1' : 'div';
              return (
                <div key={line.prompt} className="mb-4">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span>$</span>
                    <span>{line.prompt}</span>
                  </div>
                  <OutputTag
                    className={`mt-1 leading-relaxed ${line.isName ? 'text-xl sm:text-2xl font-bold font-mono' : 'text-slate-200'
                      }`}
                  >
                    <span className={line.isName ? 'hero-name-gradient' : ''}>{revealedOutput}</span>
                    {showCursor && <span className="terminal-cursor text-emerald-400 ml-0.5">▌</span>}
                  </OutputTag>
                </div>
              );
            })}
            {done && (
              <div className="flex items-center gap-2 text-emerald-400">
                <span>$</span>
                <span className="terminal-cursor ml-0.5">▌</span>
              </div>
            )}
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-slate-300">
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
