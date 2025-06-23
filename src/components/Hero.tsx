
import React from 'react';
import { ChevronDown, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pastel-lavender/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pastel-mint/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pastel-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="animate-slide-up text-center lg:text-left">
            <div className="mb-6">
              <span className="px-4 py-2 bg-pastel-lavender/10 text-pastel-lavender rounded-full text-sm font-semibold uppercase tracking-wide border border-pastel-lavender/30">
                Creative Agency
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins leading-tight">
              <span className="block text-foreground">WE ARE</span>
              <span className="block text-gradient">CREATIVE</span>
              <span className="block text-foreground">DESIGN AGENCY</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Passionate Computer Science student specializing in creating intuitive digital experiences 
              through thoughtful design and innovative technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={scrollToAbout}
                className="flex items-center gap-3 px-8 py-4 btn-gradient text-background font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={20} />
                ABOUT US
              </button>
              <button className="flex items-center gap-3 px-8 py-4 border-2 border-pastel-lavender text-pastel-lavender font-semibold rounded-full hover:bg-pastel-lavender hover:text-background transition-all duration-300">
                <Download size={20} />
                VIEW CV
              </button>
            </div>

            <div className="text-sm text-muted-foreground">
              Premium Quality
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative">
            <div className="relative">
              <div className="w-full h-[600px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=600&h=800"
                  alt="Heart Key Ledesma"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pastel-lavender/30 via-transparent to-pastel-mint/30"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-pastel-mint/20 rounded-full backdrop-blur-sm border border-pastel-mint/30 flex items-center justify-center animate-float">
                <span className="text-2xl">✨</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pastel-coral/20 rounded-full backdrop-blur-sm border border-pastel-coral/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-3xl">🎨</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-pastel-lavender cursor-pointer hover:text-pastel-mint transition-colors duration-300"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
