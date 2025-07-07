
import React from 'react';
import Navigation from '../components/Navigation';
import BabysitterHero from '../components/BabysitterHero';
import BabysitterAbout from '../components/BabysitterAbout';
import BabysitterExperience from '../components/BabysitterExperience';
import BabysitterSkills from '../components/BabysitterSkills';
import BabysitterGallery from '../components/BabysitterGallery';
import BabysitterReferences from '../components/BabysitterReferences';
import BabysitterEducation from '../components/BabysitterEducation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-teal-50">
      <Navigation />
      <BabysitterHero />
      <BabysitterAbout />
      <BabysitterExperience />
      <BabysitterSkills />
      <BabysitterEducation />
      <BabysitterGallery />
      <BabysitterReferences />
      <Footer />
    </div>
  );
};

export default Index;
