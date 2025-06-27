
import React from 'react';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'ASL Transliteration App',
      description: 'Real-time American Sign Language to speech/text conversion system using Convolutional Neural Networks and React Native. Achieved 91% model accuracy to aid deaf/mute communication.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600',
      tech: ['React Native', 'Python', 'CNN', 'TensorFlow'],
      category: 'Mobile App',
      icon: <Smartphone className="w-5 h-5" />,
      color: 'yellow',
      features: [
        '91% Model Accuracy',
        'Real-time Translation',
        'Cross-platform Support',
        'Accessibility Focused'
      ]
    },
    {
      title: 'COMSOC Journal System',
      description: 'Comprehensive web platform for academic paper submission and peer review process. Features user role management, payment handling, and complete paper workflow management.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600',
      tech: ['FastAPI', 'HTML', 'CSS', 'JavaScript', 'SQL'],
      category: 'Web Application',
      icon: <Globe className="w-5 h-5" />,
      color: 'yellow',
      features: [
        'User Role Management',
        'Payment Integration',
        'Workflow Automation',
        'Peer Review System'
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-800/40 to-slate-900/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white font-poppins">
            Portfolio
          </h2>

          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-yellow-400/30 transition-all duration-300 group shadow-xl"
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-cols-2' : ''}`}>
                    {/* Project Image */}
                    <div className={`relative overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-emerald-900/20 to-transparent"></div>
                      
                      {/* Category Badge with Yellow Accent */}
                      <div className="absolute top-6 left-6">
                        <div className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg">
                          {project.icon}
                          {project.category}
                        </div>
                      </div>

                      {/* Decorative Yellow Corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/20 rounded-bl-3xl"></div>
                    </div>

                    {/* Project Details */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-slate-800/80 to-slate-700/60 ${!isEven ? 'lg:order-1' : ''}`}>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Features with Yellow Accents */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-yellow-400 mb-3 uppercase tracking-wide">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-300">
                              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-yellow-400 mb-3 uppercase tracking-wide">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-slate-700/80 border border-slate-600 rounded-full text-xs font-medium text-slate-300 hover:border-yellow-400/50 hover:text-yellow-400 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg">
                          <ExternalLink size={16} />
                          View Project
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300">
                          <Github size={16} />
                          View Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-16">
            <p className="text-slate-400 mb-6">
              Interested in seeing more of my work?
            </p>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Portfolio;
