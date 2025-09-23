import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import portfolioData from '../data/mockData';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Let's <span className="text-emerald-600">Connect</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to collaborate on bioinformatics projects or discuss opportunities?
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Whether you're interested in collaborating on research, discussing job opportunities,
                or just want to connect with a fellow bioinformatics enthusiast, I'm always open to
                meaningful conversations.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Linkedin size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">LinkedIn</h4>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Professional Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Location</h4>
                  <p className="text-slate-600">{personal.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Phone</h4>
                  <p className="text-slate-600">{personal.phone}</p>
                </div>
              </div>
            </div>

            {/* Availability note */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <h4 className="font-semibold text-emerald-800 mb-2">Current Availability</h4>
              <p className="text-emerald-700">
                Open to full-time bioinformatics positions, research collaborations,
                and consulting opportunities. Available for discussions about exciting projects
                in genomics, data analysis, and quality control.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project, opportunity, or question..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                <p className="text-slate-600">
                  Thank you for reaching out. I'll get back to you as soon as possible!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
