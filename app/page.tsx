// pages/index.tsx
import React from 'react';
import HeroSection from './home/page';
import AchievementsSection from '../components/achievements';

import About from './about/page';
import Contact from './contact/page';
import Skills from './skills/page';
import Projects from './projects/page';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AchievementsSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
 
    </div>
  );
};

export default Home;