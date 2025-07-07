
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const BabysitterExperience = () => {
  const experiences = [
    {
      country: "🇳🇱 Netherlands",
      role: "Aupair",
      period: "2023–2024",
      children: "3 host kids (5-year-old and 3-year-old twins – all boys)",
      responsibilities: [
        "Cared for 3 energetic boys with patience and love",
        "Assisted with daily childcare routines",
        "Helped with household chores and organization",
        "Created fun learning activities and games"
      ],
      bgColor: "from-orange-100 to-orange-200",
      borderColor: "border-orange-300",
      textColor: "text-orange-700"
    },
    {
      country: "🇩🇰 Denmark",
      role: "Aupair",
      period: "2024–Present",
      children: "2 host kids (4-year-old and 6-month-old – all boys)",
      responsibilities: [
        "Caring for toddler and infant with different needs",
        "Providing babysitting support for busy parents",
        "Managing house chores efficiently",
        "Ensuring safe and nurturing environment"
      ],
      bgColor: "from-red-100 to-red-200",
      borderColor: "border-red-300",
      textColor: "text-red-700"
    },
    {
      country: "🧳 Present",
      role: "Babysitter (Freelance)",
      period: "Current",
      children: "Tourist families in Copenhagen",
      responsibilities: [
        "Offers services to tourist families",
        "Babysits kids while parents dine or explore",
        "Flexible scheduling for different family needs",
        "Highly recommended by satisfied clients"
      ],
      bgColor: "from-purple-100 to-purple-200",
      borderColor: "border-purple-300",
      textColor: "text-purple-700"
    }
  ];

  return (
    <section id="experience" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-700 mb-4 font-poppins">
              My Experience 👩‍💼
            </h2>
            <p className="text-lg text-gray-600">
              Trusted childcare provider across different countries and cultures
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-teal-300 to-purple-300 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-teal-400 rounded-full flex items-center justify-center transform md:-translate-x-1/2 shadow-lg">
                      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 ${isLeft ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                      <div className={`bg-gradient-to-br ${exp.bgColor} p-8 rounded-3xl shadow-xl border-4 ${exp.borderColor} relative`}>
                        {/* Decorative elements */}
                        <div className="absolute -top-2 right-4 w-6 h-8 bg-yellow-300 rounded-full transform rotate-12 opacity-70"></div>
                        
                        {/* Country badge */}
                        <div className="inline-block bg-white px-4 py-2 rounded-full text-lg font-bold mb-4 shadow-md">
                          {exp.country}
                        </div>

                        <h3 className={`text-2xl font-bold ${exp.textColor} mb-2`}>
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-2 mb-4">
                          <Calendar className={`w-4 h-4 ${exp.textColor}`} />
                          <span className={`font-semibold ${exp.textColor}`}>{exp.period}</span>
                        </div>

                        <div className="flex items-start gap-2 mb-6">
                          <Users className={`w-4 h-4 ${exp.textColor} mt-1`} />
                          <p className={`${exp.textColor} font-medium`}>{exp.children}</p>
                        </div>

                        <div className="space-y-3">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <div key={respIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700">{resp}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabysitterExperience;
