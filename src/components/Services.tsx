
import React from 'react';
import { Code, Palette, Smartphone, BarChart3, Users, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies.',
      color: 'pastel-mint'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: '3D Design',
      description: 'Creating stunning 3D designs and visual experiences for web and mobile.',
      color: 'pastel-lavender'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Design Trends',
      description: 'Staying current with the latest design trends and implementing them effectively.',
      color: 'pastel-coral'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Customer Support',
      description: 'Providing excellent customer support and maintaining client relationships.',
      color: 'pastel-sky'
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Branding',
      description: 'Developing comprehensive brand identities and visual communication systems.',
      color: 'pastel-peach'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Marketing',
      description: 'Digital marketing strategies to help businesses grow their online presence.',
      color: 'pastel-rose'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string, text: string, border: string } } = {
      'pastel-mint': { bg: 'bg-pastel-mint/10', text: 'text-pastel-mint', border: 'border-pastel-mint/30' },
      'pastel-lavender': { bg: 'bg-pastel-lavender/10', text: 'text-pastel-lavender', border: 'border-pastel-lavender/30' },
      'pastel-coral': { bg: 'bg-pastel-coral/10', text: 'text-pastel-coral', border: 'border-pastel-coral/30' },
      'pastel-sky': { bg: 'bg-pastel-sky/10', text: 'text-pastel-sky', border: 'border-pastel-sky/30' },
      'pastel-peach': { bg: 'bg-pastel-peach/10', text: 'text-pastel-peach', border: 'border-pastel-peach/30' },
      'pastel-rose': { bg: 'bg-pastel-rose/10', text: 'text-pastel-rose', border: 'border-pastel-rose/30' }
    };
    return colorMap[color] || colorMap['pastel-mint'];
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold font-poppins mb-4">
              <span className="text-muted-foreground/20">My </span>
              <span className="text-foreground">Services</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div 
                  key={index}
                  className="bg-card/30 backdrop-blur-sm p-8 rounded-xl border border-border/30 hover:border-pastel-mint/50 transition-all duration-300 group text-center"
                >
                  <div className={`inline-flex p-4 rounded-xl ${colors.bg} ${colors.text} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 bg-card/30 backdrop-blur-sm p-12 rounded-2xl border border-border/30">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to Start a Project?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create digital experiences that your users will love.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-pastel-mint text-background font-semibold rounded hover:bg-pastel-mint/90 transition-all duration-300"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
