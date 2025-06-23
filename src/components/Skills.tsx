
import React from 'react';
import { Code, Database, Palette, Users, Clock, MessageSquare, Brain, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      color: 'pastel-lavender',
      skills: ['JavaScript', 'HTML', 'CSS', 'C++', 'Python (Basic)', 'SQL']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Database className="w-6 h-6" />,
      color: 'pastel-mint',
      skills: ['React Native', 'Node.js', 'FastAPI']
    },
    {
      title: 'Tools & Technologies',
      icon: <Zap className="w-6 h-6" />,
      color: 'pastel-coral',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Microsoft Office Suite']
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      color: 'pastel-sky',
      skills: ['Communication', 'Time Management', 'Collaboration', 'Critical Thinking']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'pastel-lavender': 'border-pastel-lavender/30 text-pastel-lavender bg-pastel-lavender/10',
      'pastel-mint': 'border-pastel-mint/30 text-pastel-mint bg-pastel-mint/10',
      'pastel-coral': 'border-pastel-coral/30 text-pastel-coral bg-pastel-coral/10',
      'pastel-sky': 'border-pastel-sky/30 text-pastel-sky bg-pastel-sky/10'
    };
    return colorMap[color] || colorMap['pastel-lavender'];
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient font-poppins">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="card-glow bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-pastel-lavender/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${getColorClasses(category.color)}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:scale-105 ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Highlight */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-pastel-mint">Core Competencies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Palette className="w-8 h-8" />, title: 'UI/UX Design', desc: 'User-centered design principles' },
                { icon: <Code className="w-8 h-8" />, title: 'Full-Stack Dev', desc: 'End-to-end development' },
                { icon: <Brain className="w-8 h-8" />, title: 'Machine Learning', desc: 'AI-powered solutions' },
                { icon: <MessageSquare className="w-8 h-8" />, title: 'Problem Solving', desc: 'Analytical thinking' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="card-glow bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border/30 text-center hover:border-pastel-lavender/50 transition-all duration-300 group"
                >
                  <div className="text-pastel-lavender mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
