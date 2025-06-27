
import React from 'react';
import { Download, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=600&h=700"
                  alt="Heart Key Ledesma"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pastel-lavender/10 to-pastel-mint/10"></div>
              </div>
            </div>

            {/* Right side - About Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-pastel-mint text-lg font-medium mb-4">Who am I?</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  I'm <span className="text-gradient">Heart Key Ledesma</span>, a visual UX/UI Designer and Web Developer
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated Computer Science student at Bohol Island State University – Bilar Campus, 
                  expected to graduate in 2025–2026. My journey in technology is driven by a passion for 
                  creating human-centered digital experiences that make a meaningful impact.
                </p>
                
                <p>
                  Specializing in UI/UX design and full-stack development, I focus on building intuitive 
                  interfaces and robust applications. My work spans from machine learning-powered solutions 
                  to comprehensive web platforms, always prioritizing accessibility and user experience.
                </p>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className="text-sm text-muted-foreground mb-2">Name:</h4>
                  <p className="text-foreground font-medium">Heart Key Ledesma</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-2">From:</h4>
                  <p className="text-foreground font-medium">Bohol, Philippines</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-2">Age:</h4>
                  <p className="text-foreground font-medium">24</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-2">Email:</h4>
                  <p className="text-foreground font-medium">ledesmaheartkey@gmail.com</p>
                </div>
              </div>

              <button className="px-8 py-3 bg-pastel-mint text-background font-semibold rounded hover:bg-pastel-mint/90 transition-all duration-300">
                Download CV
              </button>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-pastel-mint">
              Education Journey
            </h3>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    institution: 'Bohol Island State University – Bilar Campus',
                    degree: 'BS in Computer Science',
                    period: '2025–2026 (Expected)',
                    status: 'Current'
                  },
                  {
                    institution: 'Batuan National High School',
                    degree: 'STEM Track',
                    period: '2021–2022',
                    status: 'Completed'
                  },
                  {
                    institution: 'Panhugan Elementary School',
                    degree: 'Class Valedictorian',
                    period: '2015–2016',
                    status: 'Completed'
                  }
                ].map((edu, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          {edu.institution}
                        </h4>
                        <p className="text-pastel-mint font-medium">
                          {edu.degree}
                        </p>
                      </div>
                      <div className="px-3 py-1 bg-pastel-mint/10 text-pastel-mint rounded-full text-xs font-semibold">
                        {edu.status}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
