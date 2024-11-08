// App.jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import CourseFeatures from './components/CourseFeatures';
import InstructorInfo from './components/InstructorInfo';
import PricingSection from './components/PricingSection';
import AlumniComments from './components/AlumniComments';
import Enroll from './components/Enroll';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
       <HeroSection />
            <CourseFeatures />
            <InstructorInfo />
            <Enroll />
            <AlumniComments />
            <PricingSection />
            <Footer />
    </div>
  );
};

export default App;
