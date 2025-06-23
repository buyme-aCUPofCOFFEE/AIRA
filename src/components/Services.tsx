
import React from 'react';
import { Palette, Monitor, Smartphone, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that prioritize user experience and accessibility.',
      features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Visual Design & Branding', 'Usability Testing'],
      color: 'pastel-lavender'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies and best practices.',
      features: ['Frontend Development', 'Backend Integration', 'Responsive Design', 'Performance Optimization'],
      color: 'pastel-mint'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications with React Native for seamless user experiences.',
      features: ['Cross-platform Apps', 'Native Performance', 'API Integration', 'App Store Deployment'],
      color: 'pastel-coral'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string, text: string, border: string, hover: string } } = {
      'pastel-lavender': {
        bg: 'bg-pastel-lavender/10',
        text: 'text-pastel-lavender',
        border: 'border-pastel-lavender/30',
        hover: 'hover:border-pastel-lavender/60'
      },
      'pastel-mint': {
        bg: 'bg-pastel-mint/10',
        text: 'text-pastel-mint',
        border: 'border-pastel-mint/30',
        hover: 'hover:border-pastel-mint/60'
      },
      'pastel-coral': {
        bg: 'bg-pastel-coral/10',
        text: 'text-pastel-coral',
        border: 'border-pastel-coral/30',
        hover: 'hover:border-pastel-coral/60'
      }
    };
    return colorMap[color] || colorMap['pastel-lavender'];
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient font-poppins">
            Services
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div 
                  key={index}
                  className={`card-glow bg-card/50 backdrop-blur-sm p-8 rounded-2xl border ${colors.border} ${colors.hover} transition-all duration-300 hover:scale-105 group`}
                >
                  <div className={`inline-flex p-4 rounded-xl ${colors.bg} ${colors.text} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full ${colors.bg}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`flex items-center gap-2 ${colors.text} font-semibold hover:gap-4 transition-all duration-300`}>
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card/30 backdrop-blur-sm p-12 rounded-2xl border border-border/30">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Need intuitive, beautiful interfaces?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create digital experiences that your users will love. 
              From concept to deployment, I'll help bring your vision to life.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 btn-gradient text-background font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Collaborate
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
