
import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const BabysitterHero = () => {
  return (
    <section id="home" className="pt-20 pb-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-300/20 rounded-full blur-xl"></div>
        {/* Decorative doodles */}
        <div className="absolute top-32 right-10 text-6xl opacity-10 transform rotate-12">🎈</div>
        <div className="absolute bottom-32 left-12 text-4xl opacity-10 transform -rotate-12">⭐</div>
        <div className="absolute top-1/2 right-1/3 text-3xl opacity-10">💖</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Profile and Info */}
            <div className="order-2 lg:order-1">
              {/* Profile Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-teal-200 relative">
                {/* Decorative tape */}
                <div className="absolute -top-3 left-8 w-16 h-6 bg-yellow-300 rounded transform -rotate-12 opacity-80"></div>
                <div className="absolute -top-2 right-12 w-12 h-5 bg-pink-300 rounded transform rotate-6 opacity-80"></div>
                
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-6 border-pink-200 shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=400&h=400"
                      alt="Aira Ledesma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Heart decoration */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-poppins">
                    AIRA LEDESMA
                  </h1>
                  <div className="inline-block bg-gradient-to-r from-teal-400 to-teal-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg transform -rotate-1">
                    Babysitter | Aupair
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-pink-50 p-3 rounded-xl">
                    <Phone className="w-5 h-5 text-pink-500" />
                    <span className="font-medium text-gray-700">+639121655727</span>
                  </div>
                  <div className="flex items-center gap-3 bg-yellow-50 p-3 rounded-xl">
                    <Mail className="w-5 h-5 text-yellow-600" />
                    <span className="font-medium text-gray-700">aira.le929@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 bg-teal-50 p-3 rounded-xl">
                    <MapPin className="w-5 h-5 text-teal-500" />
                    <span className="font-medium text-gray-700">Copenhagen, Denmark</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Welcome Message */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Main welcome card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-purple-200 relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-2 right-4 w-8 h-12 bg-yellow-300 rounded-full transform rotate-45 opacity-70"></div>
                  <div className="absolute bottom-4 -left-2 w-6 h-6 bg-pink-400 rounded-full opacity-70"></div>
                  
                  <div className="text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-purple-700 mb-6 font-poppins">
                      Welcome! 👋
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Hi there! I'm Aira, your friendly and experienced childcare provider. 
                      I love creating safe, fun, and nurturing environments for children while 
                      giving parents peace of mind.
                    </p>
                    
                    {/* Fun stats */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-4 rounded-2xl">
                        <div className="text-2xl font-bold text-pink-600">2+</div>
                        <div className="text-sm text-pink-700">Years Experience</div>
                      </div>
                      <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-2xl">
                        <div className="text-2xl font-bold text-teal-600">7+</div>
                        <div className="text-sm text-teal-700">Happy Families</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating quote */}
                <div className="absolute -bottom-6 left-4 right-4 bg-yellow-200 p-4 rounded-2xl shadow-lg transform rotate-1 border-2 border-yellow-300">
                  <p className="text-center text-gray-700 font-medium text-lg italic">
                    "I will surely treat your kids as they are my own." 💖
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

export default BabysitterHero;
