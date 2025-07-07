
import React from 'react';
import { Mail, Phone, MapPin, Star, Heart, Baby } from 'lucide-react';

const CV = () => {
  const personalInfo = {
    name: "HEART KEY LEDESMA",
    title: "DEVELOPER | UI/UX DESIGNER",
    email: "ledesmaheartkey@gmail.com",
    phone: "+63 951 035 0639",
    location: "Bohol, Philippines"
  };

  const aboutText = "Passionate and innovative Computer Science student with expertise in full-stack development and UI/UX design. Dedicated to creating accessible, user-centered digital experiences that make a meaningful impact in technology and society.";

  const experience = [
    {
      country: "PHILIPPINES",
      role: "FREELANCE VIRTUAL ASSISTANT",
      period: "2025",
      details: [
        "Data entry and management for international clients",
        "Quality assurance and validation processes",
        "Client communication and project coordination"
      ]
    },
    {
      country: "ACADEMIC PROJECTS",
      role: "UX/UI DESIGNER & DEVELOPER",
      period: "2023-PRESENT",
      details: [
        "ASL Transliteration App with 91% accuracy using CNN",
        "COMSOC Journal System for academic paper management",
        "Multiple web and mobile application designs"
      ]
    }
  ];

  const education = {
    degree: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
    institution: "Bohol Island State University - Philippines",
    period: "2025-2026 (Expected)"
  };

  const skills = [
    "React & React Native Development",
    "UI/UX Design & Prototyping",
    "Machine Learning & CNN",
    "Full-stack Web Development",
    "Python & FastAPI",
    "Database Management",
    "User Research & Testing",
    "Responsive Design"
  ];

  const references = [
    {
      name: "Dr. Maria Santos",
      phone: "+63 912 345 6789",
      role: "Academic Supervisor",
      note: "Final year project advisor"
    },
    {
      name: "John International Client",
      phone: "+1 555 123 4567",
      role: "Freelance Client",
      note: "Data management project"
    },
    {
      name: "Prof. Ana Cruz",
      phone: "+63 998 765 4321",
      role: "Department Head",
      note: "Computer Science Department"
    }
  ];

  return (
    <section id="cv" className="py-20 relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 font-poppins">
            Curriculum Vitae
          </h2>

          {/* Main CV Layout */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-teal-400">
            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 p-8">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-teal-400/20 rounded-full -translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-400/20 rounded-full translate-x-4 translate-y-4"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-teal-400 shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=400&h=400"
                      alt="Heart Key Ledesma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center lg:text-left flex-1">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
                    {personalInfo.name}
                  </h1>
                  <div className="bg-teal-400 text-white px-6 py-3 rounded-full text-lg font-bold inline-block shadow-lg">
                    {personalInfo.title}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 text-gray-800">
                    <Phone className="w-5 h-5 text-teal-600" />
                    <span className="font-medium">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-800">
                    <Mail className="w-5 h-5 text-teal-600" />
                    <span className="font-medium">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-800">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="font-medium">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="p-8 grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Me */}
                <div className="bg-pink-100 rounded-2xl p-6 border-l-4 border-pink-400">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    ABOUT ME
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{aboutText}</p>
                </div>

                {/* Experience */}
                <div className="bg-teal-50 rounded-2xl p-6 border-l-4 border-teal-400">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center text-white font-bold">
                      E
                    </div>
                    EXPERIENCE
                  </h3>
                  
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="bg-teal-400 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                          {exp.country}
                        </div>
                        <h4 className="font-bold text-gray-800 text-lg mb-1">{exp.role}</h4>
                        <p className="text-teal-600 font-semibold mb-3">{exp.period}</p>
                        <ul className="space-y-1">
                          {exp.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                              <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Education */}
                <div className="bg-yellow-100 rounded-2xl p-6 border-l-4 border-yellow-400">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                    EDUCATION
                  </h3>
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-bold text-gray-800 text-sm mb-2">{education.degree}</h4>
                    <p className="text-teal-600 font-semibold text-sm mb-1">{education.institution}</p>
                    <p className="text-gray-600 text-xs">{education.period}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="bg-green-100 rounded-2xl p-6 border-l-4 border-green-400">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                    WHAT I CAN OFFER?
                  </h3>
                  <div className="space-y-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="bg-white rounded-lg p-2 text-sm text-gray-700 shadow-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* References Section */}
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">References</h3>
                <p className="text-pink-600 italic text-lg">"For verification, don't hesitate to reach out to my references"</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {references.map((ref, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{ref.name.charAt(0)}</span>
                    </div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{ref.name}</h4>
                    <p className="text-teal-600 font-semibold text-xs mb-1">{ref.phone}</p>
                    <p className="text-gray-600 text-xs">{ref.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Footer */}
            <div className="h-4 bg-gradient-to-r from-teal-400 via-yellow-400 to-pink-400"></div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-400/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default CV;
