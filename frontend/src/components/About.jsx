import React from 'react';
import { GraduationCap, Award, Users, TrendingUp } from 'lucide-react';
import portfolioData from '../data/mockData';

const About = () => {
  const { education, certifications, personal } = portfolioData;

  const stats = [
    { icon: GraduationCap, label: "Years of Education", value: "7+" },
    { icon: Award, label: "Certifications", value: "1+" },
    { icon: Users, label: "Projects Completed", value: "10+" },
    { icon: TrendingUp, label: "Years Experience", value: "4+" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            About <span className="text-emerald-600">Me</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate about bridging the gap between biology and computational science to solve real-world healthcare challenges
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">My Journey</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              Completed Master's in Bioinformatics at Indiana University Indianapolis, I'm passionate about leveraging
              computational methods to unlock insights from biological data. My journey began with a strong foundation in
              biotechnology, which led me to discover the fascinating intersection of biology and data science.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              With hands-on experience in quality control at Biocon Biologics and current work as a Bioinformatics Analyst
              Intern at Elucidata Corporation, I've developed a unique perspective that combines rigorous scientific methodology
              with cutting-edge computational techniques. I'm particularly interested in machine learning applications in genomics
              and the development of robust data pipelines for biological research.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              When I'm not analyzing genomic data or optimizing pipelines, I enjoy staying updated with the latest advances in
              AI and bioinformatics, contributing to open-source projects, and sharing my knowledge through writing and mentoring.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4 mx-auto">
                  <stat.icon size={24} className="text-emerald-600" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Education</h3>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{edu.degree}</h4>
                    <p className="text-lg text-emerald-600 font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-slate-600 font-medium">{edu.period}</p>
                    <p className="text-sm text-slate-500">{edu.location}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Certifications</h3>
          <div className="space-y-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{cert.name}</h4>
                    <p className="text-emerald-600 font-medium">{cert.issuer}</p>
                  </div>
                  <span className="text-slate-600 text-sm">{cert.period}</span>
                </div>
                <p className="text-slate-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
