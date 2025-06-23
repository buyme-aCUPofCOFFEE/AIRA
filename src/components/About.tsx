
import React from 'react';
import { Download, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2025-2026',
      title: 'BS Computer Science (Expected)',
      institution: 'Bohol Island State University - Bilar Campus',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      year: '2021-2022',
      title: 'Senior High School - STEM',
      institution: 'Batuan National High School',
      icon: <MapPin className="w-5 h-5" />
    },
    {
      year: '2015-2016',
      title: 'Elementary - Class Valedictorian',
      institution: 'Panhugan Elementary School',
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient font-poppins">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio Content */}
            <div className="space-y-6">
              <div className="card-glow bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                <h3 className="text-2xl font-semibold mb-6 text-pastel-lavender">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm <span className="text-pastel-mint font-semibold">Heart Key Ledesma</span>, a passionate Computer Science student 
                    at Bohol Island State University – Bilar Campus, with an expected graduation in 2025–2026.
                  </p>
                  
                  <p>
                    My journey in technology is driven by a deep fascination with <span className="text-pastel-coral font-semibold">human-centered design</span> 
                    and innovative solutions. I specialize in creating intuitive user experiences through thoughtful 
                    <span className="text-pastel-sky font-semibold"> UI/UX design</span>, building robust applications with 
                    <span className="text-pastel-peach font-semibold"> full-stack development</span>, and exploring the potential of 
                    <span className="text-pastel-rose font-semibold"> machine learning</span> to solve real-world problems.
                  </p>

                  <p>
                    What sets me apart is my commitment to understanding users' needs and translating them into 
                    meaningful digital experiences. I believe that technology should be accessible, beautiful, and 
                    purposeful – principles that guide every project I undertake.
                  </p>

                  <p>
                    When I'm not coding or designing, you'll find me exploring new technologies, contributing to 
                    open-source projects, or mentoring fellow students in their programming journey.
                  </p>
                </div>

                <button className="mt-6 flex items-center gap-2 px-6 py-3 btn-gradient text-background font-semibold rounded-full hover:scale-105 transition-all duration-300">
                  <Download size={18} />
                  Download Resume
                </button>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8 text-pastel-mint">Educational Journey</h3>
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className="card-glow bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border/30 hover:border-pastel-lavender/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-pastel-lavender/20 rounded-full flex items-center justify-center text-pastel-lavender">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-pastel-coral font-semibold mb-1">{item.year}</div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.institution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-card/30 rounded-xl border border-border/30">
                  <div className="text-2xl font-bold text-pastel-lavender">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-card/30 rounded-xl border border-border/30">
                  <div className="text-2xl font-bold text-pastel-mint">91%</div>
                  <div className="text-sm text-muted-foreground">ML Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
