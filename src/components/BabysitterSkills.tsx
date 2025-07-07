
import React from 'react';
import { Heart, Shield, Clock, Utensils, Home, Baby } from 'lucide-react';

const BabysitterSkills = () => {
  const skills = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Child Safety & First Aid",
      description: "Trained in basic first aid and child safety protocols",
      bgColor: "from-red-100 to-red-200",
      borderColor: "border-red-300",
      iconColor: "text-red-600"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Diaper Changing & Hygiene",
      description: "Expert in infant care and maintaining cleanliness",
      bgColor: "from-blue-100 to-blue-200",
      borderColor: "border-blue-300",
      iconColor: "text-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patience & Emotional Support",
      description: "Providing comfort and understanding to children",
      bgColor: "from-pink-100 to-pink-200",
      borderColor: "border-pink-300",
      iconColor: "text-pink-600"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Meal Preparation & Feeding",
      description: "Nutritious meal prep and feeding assistance",
      bgColor: "from-green-100 to-green-200",
      borderColor: "border-green-300",
      iconColor: "text-green-600"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Light Housekeeping",
      description: "Keeping living spaces tidy and organized",
      bgColor: "from-purple-100 to-purple-200",
      borderColor: "border-purple-300",
      iconColor: "text-purple-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Management",
      description: "Efficient scheduling and routine management",
      bgColor: "from-yellow-100 to-yellow-200",
      borderColor: "border-yellow-300",
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <section id="skills" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-pink-700 mb-4 font-poppins">
              What I Can Offer ✅
            </h2>
            <p className="text-lg text-gray-600">
              Professional childcare skills with a personal touch
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${skill.bgColor} p-8 rounded-3xl shadow-xl border-4 ${skill.borderColor} relative hover:scale-105 transition-transform duration-300`}
              >
                {/* Decorative elements */}
                <div className="absolute -top-2 right-4 w-4 h-6 bg-teal-300 rounded-full transform rotate-45 opacity-70"></div>
                <div className="absolute bottom-4 -left-1 w-3 h-3 bg-pink-400 rounded-full opacity-70"></div>
                
                {/* Icon */}
                <div className={`${skill.iconColor} mb-4`}>
                  {skill.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {skill.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {skill.description}
                </p>

                {/* Checkmark */}
                <div className="absolute top-6 right-6 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-white border-l-0 border-t-0 transform rotate-45 -translate-y-0.5"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Personal Statement */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-teal-200 p-8 rounded-3xl shadow-xl border-4 border-pink-300 relative max-w-2xl mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-3 left-8 w-16 h-6 bg-yellow-300 rounded transform -rotate-12 opacity-80"></div>
              <div className="absolute -top-2 right-12 w-12 h-5 bg-teal-300 rounded transform rotate-6 opacity-80"></div>
              
              <div className="text-3xl mb-4">💖</div>
              <h3 className="text-2xl font-bold text-purple-700 mb-4 font-poppins italic">
                Personal Statement
              </h3>
              <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                "I will surely treat your kids as they are my own."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabysitterSkills;
