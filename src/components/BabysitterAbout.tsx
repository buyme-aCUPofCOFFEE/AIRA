
import React from 'react';

const BabysitterAbout = () => {
  return (
    <section id="about" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-700 mb-4 font-poppins">
              About Me 🌟
            </h2>
          </div>

          {/* About Card */}
          <div className="relative">
            {/* Main about card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-pink-200 relative">
              {/* Decorative tape elements */}
              <div className="absolute -top-3 left-12 w-20 h-6 bg-yellow-300 rounded transform -rotate-6 opacity-80"></div>
              <div className="absolute -top-2 right-16 w-16 h-5 bg-teal-300 rounded transform rotate-12 opacity-80"></div>
              
              {/* Paper clip decoration */}
              <div className="absolute top-8 right-8 w-8 h-12 border-4 border-gray-400 rounded-lg transform rotate-12 opacity-60"></div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Responsible and caring childcare provider with experience as an au pair in the 
                  Netherlands and Denmark. I'm skilled in looking after infants and toddlers, 
                  assisting with household tasks, and creating a safe, engaging environment for children.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm reliable, flexible, and highly recommended by previous host families and 
                  tourist clients. I believe in treating every child with love, patience, and 
                  understanding - just as I would my own.
                </p>

                {/* Key qualities */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-2xl text-center border-2 border-pink-300">
                    <div className="text-3xl mb-2">🤗</div>
                    <h3 className="font-bold text-pink-700 mb-2">Caring</h3>
                    <p className="text-sm text-pink-600">Nurturing and loving approach to childcare</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-6 rounded-2xl text-center border-2 border-teal-300">
                    <div className="text-3xl mb-2">🎯</div>
                    <h3 className="font-bold text-teal-700 mb-2">Reliable</h3>
                    <p className="text-sm text-teal-600">Dependable and trustworthy childcare</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-2xl text-center border-2 border-yellow-300">
                    <div className="text-3xl mb-2">🎨</div>
                    <h3 className="font-bold text-yellow-700 mb-2">Creative</h3>
                    <p className="text-sm text-yellow-600">Fun activities and engaging play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabysitterAbout;
