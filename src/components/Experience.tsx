
import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Freelance Virtual Assistant',
      company: 'International Client',
      period: 'Feb 2025 - May 2025',
      location: 'Remote',
      description: 'Provided comprehensive data entry services for international client, managing large datasets with accuracy and efficiency.',
      responsibilities: [
        'Data entry and management for international client',
        'Quality assurance and data validation',
        'Client communication and reporting',
        'Meeting tight deadlines consistently'
      ],
      skills: ['Data Management', 'Microsoft Office', 'Client Communication', 'Time Management'],
      icon: <Briefcase className="w-5 h-5" />,
      color: 'pastel-coral'
    },
    {
      type: 'education',
      title: 'Course Projects & Development',
      company: 'Various Academic Projects',
      period: '2023 - Present',
      location: 'BISU Bilar Campus',
      description: 'Led development of multiple innovative projects as UX/UI Designer and Programmer, focusing on accessibility and user-centered design.',
      responsibilities: [
        'ASL Transliteration App development with 91% accuracy',
        'COMSOC Journal System architecture and implementation',
        'UI/UX design for multiple web and mobile applications',
        'Machine learning model development and optimization'
      ],
      skills: ['React Native', 'FastAPI', 'Python', 'UI/UX Design', 'Machine Learning'],
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'pastel-lavender'
    }
  ];

  const achievements = [
    {
      title: 'ASL Translation Accuracy',
      value: '91%',
      description: 'Machine learning model accuracy for real-time ASL translation',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Projects Completed',
      value: '5+',
      description: 'Successfully delivered academic and freelance projects',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: 'Client Satisfaction',
      value: '100%',
      description: 'Maintained excellent client relationships and project delivery',
      icon: <Star className="w-6 h-6" />
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string, text: string, border: string } } = {
      'pastel-lavender': {
        bg: 'bg-pastel-lavender/10',
        text: 'text-pastel-lavender',
        border: 'border-pastel-lavender/30'
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
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient font-poppins">
            Experience
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pastel-lavender via-pastel-mint to-pastel-coral transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const colors = getColorClasses(exp.color);
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-4 md:left-1/2 w-8 h-8 ${colors.bg} ${colors.border} border-2 rounded-full flex items-center justify-center transform md:-translate-x-1/2 ${colors.text}`}>
                      {exp.icon}
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 ${isLeft ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                      <div className={`card-glow bg-card/50 backdrop-blur-sm p-8 rounded-2xl border ${colors.border} hover:border-pastel-lavender/50 transition-all duration-300`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-semibold uppercase tracking-wide`}>
                            {exp.type}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>

                        <div className="flex items-center gap-2 text-pastel-mint font-semibold mb-4">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-pastel-coral mb-3">Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className={`w-1.5 h-1.5 rounded-full ${colors.bg} mt-2 flex-shrink-0`}></div>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-pastel-sky mb-3">Technologies & Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-3 py-1 bg-card border border-border/50 rounded-full text-xs font-medium text-muted-foreground"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-pastel-mint">Key Achievements</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="card-glow bg-card/30 backdrop-blur-sm p-8 rounded-xl border border-border/30 text-center hover:border-pastel-lavender/50 transition-all duration-300 group"
                >
                  <div className="text-pastel-lavender mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{achievement.value}</div>
                  <h4 className="text-lg font-semibold text-pastel-mint mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
