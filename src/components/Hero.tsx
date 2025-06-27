
import React from 'react';
import { ChevronDown, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-emerald-400 text-lg font-medium">Hi There!</p>
              <h1 className="text-6xl md:text-8xl font-bold font-poppins">
                <span className="block text-foreground">I am a</span>
                <span className="block text-gradient">Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                I make the complex simple.
              </p>
            </div>

            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded hover:bg-emerald-600 transition-all duration-300"
            >
              Contact Me
            </button>

            {/* Contact Info */}
            <div className="pt-12">
              <div className="text-center lg:text-left">
                <p className="text-foreground text-lg flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <span>ledesmaheartkey@gmail.com</span>
                  <span className="text-muted-foreground">|</span>
                  <span>+63 951 035 0639</span>
                  <span className="text-muted-foreground">|</span>
                  <span>Bohol, Philippines</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative flex justify-end">
            <div className="relative">
              <div className="w-full max-w-md h-[600px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=600&h=800"
                  alt="Heart Key Ledesma"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/20 rounded-full backdrop-blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500/20 rounded-full backdrop-blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-emerald-400 cursor-pointer hover:text-teal-400 transition-colors duration-300"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
