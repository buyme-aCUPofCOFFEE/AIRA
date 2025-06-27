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
      color: 'pastel-lavender',
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
      color: 'pastel-mint',
      features: [
        'User Role Management',
        'Payment Integration',
        'Workflow Automation',
        'Peer Review System'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string, text: string, border: string } } = {
      'pastel-lavender': {
        bg: 'bg-pastel-lavender/10',
        text: 'text-pastel-lavender',
        border: 'border-pastel-lavender/30'
      },
      'pastel-mint': {
        bg: 'bg-pastel-mint/10',
        text: 'text-pastel-mint',
        border: 'border-pastel-mint/30'
      },
      'pastel-coral': {
        bg: 'bg-pastel-coral/10',
        text: 'text-pastel-coral',
        border: 'border-pastel-coral/30'
      }
    };
    return colorMap[color] || colorMap['pastel-lavender'];
  };

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient font-poppins">
            Portfolio
          </h2>

          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => {
              const colors = getColorClasses(project.color);
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`card-glow bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:border-pastel-lavender/30 transition-all duration-300 group`}
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-cols-2' : ''}`}>
                    {/* Project Image */}
                    <div className={`relative overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                      <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-medium`}>
                        {project.icon}
                        {project.category}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-pastel-lavender transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-pastel-mint mb-3">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className={`w-1.5 h-1.5 rounded-full ${colors.bg}`}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-pastel-coral mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-card border border-border/50 rounded-full text-xs font-medium text-muted-foreground hover:border-pastel-lavender/50 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 btn-gradient text-background font-semibold rounded-full hover:scale-105 transition-all duration-300">
                          <ExternalLink size={16} />
                          View Project
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 border-2 border-pastel-lavender text-pastel-lavender font-semibold rounded-full hover:bg-pastel-lavender hover:text-background transition-all duration-300">
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
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-pastel-mint text-pastel-mint font-semibold rounded-full hover:bg-pastel-mint hover:text-background transition-all duration-300"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
