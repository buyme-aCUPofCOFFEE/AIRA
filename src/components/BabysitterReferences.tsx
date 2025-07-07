
import React from 'react';
import { Phone } from 'lucide-react';

const BabysitterReferences = () => {
  const references = {
    netherlands: [
      {
        name: "Donna",
        phone: "+31 6 84877418",
        children: "1-year-old boy & 4-year-old girl",
        avatar: "D"
      },
      {
        name: "Mr. & Mrs. Pool",
        phone: "+31 6 26799881 / +31 6 52637676",
        children: "5-year-old boy & 3-year-old twins",
        avatar: "P"
      },
      {
        name: "Patricia",
        phone: "+31 6 84877418",
        children: "2-year-old girl",
        avatar: "P"
      }
    ],
    denmark: [
      {
        name: "Rosie",
        phone: "+44 7736 280169",
        children: "3, 7, and 10 years old",
        avatar: "R"
      },
      {
        name: "Karita",
        phone: "+45 28 10 92 24",
        children: "9-month-old girl",
        avatar: "K"
      },
      {
        name: "Lisa",
        phone: "+45 24 63 63 03",
        children: "1-year-old boy",
        avatar: "L"
      }
    ]
  };

  const ReferenceCard = ({ reference, bgColor, borderColor }: any) => (
    <div className={`bg-gradient-to-br ${bgColor} p-6 rounded-3xl shadow-xl border-4 ${borderColor} relative hover:scale-105 transition-transform duration-300`}>
      {/* Decorative elements */}
      <div className="absolute -top-2 right-4 w-4 h-6 bg-yellow-300 rounded-full transform rotate-45 opacity-70"></div>
      
      {/* Avatar */}
      <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-xl">{reference.avatar}</span>
      </div>

      {/* Name */}
      <h4 className="font-bold text-gray-800 text-lg mb-3 text-center">
        {reference.name}
      </h4>

      {/* Phone */}
      <div className="flex items-center justify-center gap-2 mb-3 bg-white/50 p-2 rounded-lg">
        <Phone className="w-4 h-4 text-green-600" />
        <span className="text-sm font-medium text-gray-700">{reference.phone}</span>
      </div>

      {/* Children info */}
      <p className="text-sm text-gray-600 text-center">
        <strong>Children:</strong> {reference.children}
      </p>

      {/* WhatsApp indicator */}
      <div className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">W</span>
      </div>
    </div>
  );

  return (
    <section id="references" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-700 mb-4 font-poppins">
              References 🗣️
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Don't just take my word for it - hear from the families I've worked with!
            </p>
            
            {/* WhatsApp note */}
            <div className="bg-green-100 p-4 rounded-2xl border-3 border-green-300 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="font-bold text-green-700">WhatsApp Verification</span>
              </div>
              <p className="text-green-700 font-medium">
                "For verification, don't hesitate to reach out to my former employers via WhatsApp."
              </p>
            </div>
          </div>

          {/* Netherlands References */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-orange-600 mb-2 flex items-center justify-center gap-3">
                <span className="text-3xl">🇳🇱</span>
                Netherlands
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {references.netherlands.map((ref, index) => (
                <ReferenceCard 
                  key={index}
                  reference={ref}
                  bgColor="from-orange-100 to-orange-200"
                  borderColor="border-orange-300"
                />
              ))}
            </div>
          </div>

          {/* Denmark References */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-2 flex items-center justify-center gap-3">
                <span className="text-3xl">🇩🇰</span>
                Denmark
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {references.denmark.map((ref, index) => (
                <ReferenceCard 
                  key={index}
                  reference={ref}
                  bgColor="from-red-100 to-red-200"
                  borderColor="border-red-300"
                />
              ))}
            </div>
          </div>

          {/* Contact encouragement */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-teal-200 p-8 rounded-3xl shadow-xl border-4 border-pink-300 relative max-w-2xl mx-auto">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-purple-700 mb-4 font-poppins">
                Ready to Connect?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Feel free to contact any of my references to learn more about my childcare experience. 
                They'll be happy to share their positive experiences working with me!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabysitterReferences;
