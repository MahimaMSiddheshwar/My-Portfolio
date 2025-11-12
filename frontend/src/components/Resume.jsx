import React from 'react';
import { Download, FileText, Eye, ExternalLink } from 'lucide-react';

const Resume = () => {
  // ✅ Use local resume file from /public
  const resumeUrl = '/resume.pdf';

  const handleDownload = () => {
    window.open(resumeUrl, '_blank');
  };

  const handlePreview = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            My <span className="text-emerald-600">Resume</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Download my complete resume to learn more about my professional experience,
            skills, and achievements in bioinformatics and quality control
          </p>
        </div>

        {/* Resume Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header with PDF icon */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <FileText size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                Mahima M Siddheshwar - CV
              </h3>
              <p className="text-center text-emerald-100">
                Bioinformatics Analyst & QC Specialist
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Resume highlights */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Complete work experience and achievements</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Educational background and certifications</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Technical skills and expertise areas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Key projects and research contributions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Contact information and references</span>
                    </li>
                  </ul>
                </div>

                {/* Resume stats */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Professional Summary:</h4>
                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-emerald-600">3+</div>
                      <div className="text-sm text-slate-600">Years Experience</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">10+</div>
                      <div className="text-sm text-slate-600">Projects Completed</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600">15+</div>
                      <div className="text-sm text-slate-600">Technical Skills</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Download size={20} />
                  Download Resume (PDF)
                </button>
                <button
                  onClick={handlePreview}
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  <Eye size={20} />
                  Preview Online
                </button>
              </div>

              {/* Note */}
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-500">
                  PDF format • Updated September 2025 • Professional references available upon request
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Connect?</h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            answering questions about my experience in bioinformatics and quality control.
          </p>
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200"
          >
            <ExternalLink size={20} />
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
