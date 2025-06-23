
import React from 'react';
import { Download, GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      institution: 'Bohol Island State University – Bilar Campus',
      degree: 'BS in Computer Science',
      period: '2025–2026 (Expected)',
      status: 'Current',
      color: 'pastel-lavender'
    },
    {
      institution: 'Batuan National High School',
      degree: 'STEM Track',
      period: '2021–2022',
      status: 'Completed',
      color: 'pastel-mint'
    },
    {
      institution: 'Panhugan Elementary School',
      degree: 'Class Valedictorian',
      period: '2015–2016',
      status: 'Completed',
      color: 'pastel-coral'
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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient font-poppins">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left side - Image and CTA */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=600&h=800"
                  alt="Heart Key Ledesma"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pastel-lavender/20 to-pastel-mint/20"></div>
              </div>
              
              <button className="absolute bottom-6 left-6 flex items-center gap-3 px-6 py-3 bg-background/90 backdrop-blur-sm text-foreground font-semibold rounded-full hover:scale-105 transition-all duration-300 border border-pastel-lavender/30">
                <Download size={18} />
                Download CV
              </button>
            </div>

            {/* Right side - Bio */}
            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated <span className="text-pastel-lavender font-semibold">Computer Science student</span> at 
                  Bohol Island State University – Bilar Campus, expected to graduate in 2025–2026. 
                  My journey in technology is driven by a passion for creating 
                  <span className="text-pastel-mint font-semibold"> human-centered digital experiences</span> that 
                  make a meaningful impact.
                </p>
                
                <p>
                  Specializing in <span className="text-pastel-coral font-semibold">UI/UX design</span> and 
                  <span className="text-pastel-sky font-semibold"> full-stack development</span>, I focus on building 
                  intuitive interfaces and robust applications. My work spans from machine learning-powered 
                  solutions to comprehensive web platforms, always prioritizing accessibility and user experience.
                </p>
                
                <p>
                  As a <span className="text-pastel-peach font-semibold">lifelong learner</span>, I'm constantly 
                  exploring new technologies and methodologies to stay at the forefront of innovation. 
                  My goal is to bridge the gap between complex technology and everyday users through 
                  thoughtful design and clean, efficient code.
                </p>
                
                <p>
                  Beyond coding, I believe in the power of <span className="text-pastel-rose font-semibold">collaboration</span> 
                  and effective communication to bring ideas to life. Whether working on academic projects 
                  or freelance assignments, I bring dedication, creativity, and a commitment to excellence 
                  to every endeavor.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-pastel-mint" />
                  <span>Bohol, Philippines</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap size={16} className="text-pastel-lavender" />
                  <span>Expected Grad: 2025-2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-pastel-mint">
              Education Journey
            </h3>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pastel-lavender via-pastel-mint to-pastel-coral"></div>
              
              <div className="space-y-8">
                {education.map((edu, index) => {
                  const colors = getColorClasses(edu.color);
                  
                  return (
                    <div key={index} className="relative flex items-center ml-16">
                      {/* Timeline Dot */}
                      <div className={`absolute -left-20 w-8 h-8 ${colors.bg} ${colors.border} border-2 rounded-full flex items-center justify-center ${colors.text}`}>
                        <GraduationCap size={16} />
                      </div>

                      {/* Content Card */}
                      <div className={`card-glow bg-card/50 backdrop-blur-sm p-6 rounded-xl border ${colors.border} hover:border-pastel-lavender/50 transition-all duration-300 w-full`}>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-xl font-semibold text-foreground mb-1">
                              {edu.institution}
                            </h4>
                            <p className={`font-medium ${colors.text}`}>
                              {edu.degree}
                            </p>
                          </div>
                          <div className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-semibold`}>
                            {edu.status}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {edu.period}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-8 h-8" />, title: 'Academic Excellence', desc: 'Class Valedictorian & STEM Graduate', color: 'pastel-lavender' },
              { icon: <GraduationCap className="w-8 h-8" />, title: 'CS Student', desc: 'Specializing in UI/UX & Full-Stack', color: 'pastel-mint' },
              { icon: <MapPin className="w-8 h-8" />, title: 'Based in Bohol', desc: 'Available for Remote Collaboration', color: 'pastel-coral' }
            ].map((item, index) => {
              const colors = getColorClasses(item.color);
              return (
                <div 
                  key={index}
                  className={`card-glow bg-card/30 backdrop-blur-sm p-6 rounded-xl border ${colors.border} text-center hover:border-pastel-lavender/50 transition-all duration-300 group`}
                >
                  <div className={`${colors.text} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
