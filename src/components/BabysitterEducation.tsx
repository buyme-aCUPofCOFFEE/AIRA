
import React from 'react';

const BabysitterEducation = () => {
  return (
    <section id="education" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-600 mb-4 font-poppins">
              Education 🎓
            </h2>
          </div>

          {/* Education Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-300 relative">
              {/* Decorative tape */}
              <div className="absolute -top-3 left-12 w-20 h-6 bg-pink-300 rounded transform -rotate-6 opacity-80"></div>
              <div className="absolute -top-2 right-16 w-16 h-5 bg-teal-300 rounded transform rotate-12 opacity-80"></div>
              
              {/* Notebook spiral decoration */}
              <div className="absolute left-4 top-8 bottom-8 w-8 flex flex-col justify-around">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-6 h-6 border-4 border-gray-400 rounded-full bg-white opacity-60"></div>
                ))}
              </div>

              <div className="ml-12 text-center">
                <div className="text-6xl mb-6">🏫</div>
                
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                  Bachelor of Science in Hotel and Restaurant Technology
                </h3>
                
                <p className="text-xl font-semibold text-yellow-700 mb-2">
                  Bohol Island State University
                </p>
                
                <p className="text-lg text-yellow-600">
                  Philippines
                </p>

                {/* Additional note */}
                <div className="mt-6 bg-white/60 p-4 rounded-2xl border-2 border-yellow-400">
                  <p className="text-gray-700 font-medium">
                    My educational background in hospitality has enhanced my ability to provide 
                    exceptional service and create comfortable, welcoming environments for families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabysitterEducation;
