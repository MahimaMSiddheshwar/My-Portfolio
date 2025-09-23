import React from 'react';
import { Building, MapPin, Calendar, CheckCircle } from 'lucide-react';
import portfolioData from '../data/mockData';

const Experience = () => {
  const { experience } = portfolioData;

  const getTypeColor = (type) => {
    switch (type) {
      case 'Internship': return 'bg-blue-100 text-blue-700';
      case 'Research': return 'bg-purple-100 text-purple-700';
      case 'Full-time': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Professional <span className="text-emerald-600">Experience</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A journey through bioinformatics, quality control, and research that has shaped my expertise
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-emerald-200"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  } ml-16 md:ml-0`}>
                  <div className="bg-slate-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Building size={16} className="text-emerald-600 flex-shrink-0" />
                          <span className="text-emerald-600 font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.slice(0, 4).map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.achievements.length > 4 && (
                        <p className="text-sm text-slate-500 mt-2">
                          +{exp.achievements.length - 4} more achievements
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-6">
            Interested in learning more about my professional journey?
          </p>
          <button
            onClick={() => window.open('https://customer-assets.emergentagent.com/job_fe566b14-932e-4a07-85ad-fa1d10965058/artifacts/npp8um87_Mahima%20M%20Siddheshwar%20-%20CV.pdf', '_blank')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
