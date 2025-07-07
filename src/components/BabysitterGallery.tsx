
import React from 'react';

const BabysitterGallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&q=80&w=400&h=300",
      alt: "Playing with children",
      caption: "Fun playtime activities"
    },
    {
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&q=80&w=400&h=300",
      alt: "Reading to kids",
      caption: "Story time together"
    },
    {
      src: "https://images.unsplash.com/photo-1602189904682-4c5e12eaa5e9?auto=format&fit=crop&q=80&w=400&h=300",
      alt: "Arts and crafts",
      caption: "Creative activities"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400&h=300",
      alt: "Outdoor play",
      caption: "Outdoor adventures"
    },
    {
      src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=400&h=300",
      alt: "Meal time",
      caption: "Healthy meal preparation"
    },
    {
      src: "https://images.unsplash.com/photo-1587616211892-411b2d269fb2?auto=format&fit=crop&q=80&w=400&h=300",
      alt: "Learning activities",
      caption: "Educational games"
    }
  ];

  return (
    <section id="gallery" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-700 mb-4 font-poppins">
              Photo Gallery 📷
            </h2>
            <p className="text-lg text-gray-600">
              Memories and moments with the wonderful families I've worked with
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Photo frame */}
                <div className="bg-white p-4 rounded-2xl shadow-xl border-4 border-pink-200 transform rotate-1 hover:rotate-0 transition-transform duration-300 relative">
                  {/* Decorative tape */}
                  <div className="absolute -top-2 left-4 w-12 h-5 bg-yellow-300 rounded transform -rotate-12 opacity-80"></div>
                  
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Privacy overlay for children's faces */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20"></div>
                  </div>
                  
                  {/* Caption */}
                  <div className="mt-3 text-center">
                    <p className="text-gray-700 font-medium">{image.caption}</p>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-teal-300 rounded-full opacity-60"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy note */}
          <div className="mt-12 text-center">
            <div className="bg-purple-100 p-6 rounded-2xl border-3 border-purple-300 max-w-2xl mx-auto">
              <p className="text-purple-700 font-medium">
                📝 Note: All photos are shared with permission from families. 
                Children's faces may be blurred or covered with cute emojis for privacy protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabysitterGallery;
