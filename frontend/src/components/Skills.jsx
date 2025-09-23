import React, { useState } from 'react';
import {
  Code,
  Database,
  BarChart3,
  Shield,
  Microscope,
  Monitor,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import portfolioData from '../data/mockData';

const Skills = () => {
  const { skills } = portfolioData;
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  const skillCategories = [
    {
      name: 'Bioinformatics & Omics Analysis',
      icon: <Database size={24} />,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      name: 'Programming & Data Analysis',
      icon: <Code size={24} />,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700'
    },
    {
      name: 'Visualization & Tools',
      icon: <BarChart3 size={24} />,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      name: 'Quality Control & Compliance',
      icon: <Shield size={24} />,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    {
      name: 'Laboratory Techniques',
      icon: <Microscope size={24} />,
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-700'
    },
    {
      name: 'Software & Platforms',
      icon: <Monitor size={24} />,
      color: 'from-slate-500 to-gray-600',
      bgColor: 'bg-slate-50',
      textColor: 'text-slate-700'
    }
  ];

  const toggleCategory = (categoryName) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  const getSkillLevel = (skill) => {
    // Mock skill levels for demo - in real app, this would come from data
    const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
    return levels[Math.floor(Math.random() * levels.length)];
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-emerald-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Beginner': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Technical <span className="text-emerald-600">Skills</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning bioinformatics, data science, quality control, and laboratory expertise
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const isExpanded = expandedCategories.has(category.name);
            const categorySkills = skills[category.name] || [];

            return (
              <div key={category.name} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Category Header */}
                <div
                  className={`bg-gradient-to-r ${category.color} p-6 text-white cursor-pointer`}
                  onClick={() => toggleCategory(category.name)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {category.icon}
                      <h3 className="font-bold text-lg">{category.name}</h3>
                    </div>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  <div className="mt-2">
                    <span className="text-sm opacity-90">
                      {categorySkills.length} skills
                    </span>
                  </div>
                </div>

                {/* Skills List - Collapsible */}
                <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-20 opacity-60'
                  }`}>
                  <div className="p-6 space-y-3">
                    {categorySkills.slice(0, isExpanded ? categorySkills.length : 3).map((skill, index) => {
                      const level = getSkillLevel(skill);
                      return (
                        <div key={index} className="flex items-center justify-between group">
                          <span className="text-slate-700 font-medium text-sm">
                            {skill}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${getLevelColor(level)} text-white`}>
                              {level}
                            </span>
                          </div>
                        </div>
                      );
                    })}

                    {!isExpanded && categorySkills.length > 3 && (
                      <div className="text-center pt-2">
                        <span className="text-sm text-slate-500">
                          +{categorySkills.length - 3} more skills
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* View Toggle */}
                <div className={`${category.bgColor} px-6 py-3 border-t border-slate-100`}>
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className={`text-sm ${category.textColor} font-medium hover:underline`}
                  >
                    {isExpanded ? 'Show Less' : 'View All Skills'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-slate-700 font-medium">Bioinformatics Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-slate-700 font-medium">Programming Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-slate-700 font-medium">Laboratory Techniques</div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 mb-4">
            Continuously learning and adapting to new technologies in bioinformatics and data science
          </p>
          <div className="flex justify-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              <Database size={16} />
              Genomics Expert
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Code size={16} />
              Data Science
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              <Shield size={16} />
              Quality Control
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
