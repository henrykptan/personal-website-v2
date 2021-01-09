import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplitLeft from '../components/sections/FeaturesSplitLeft';
import FeaturesSplitRight from '../components/sections/FeaturesSplitRight';


const Home = () => {

  return (
    <>
      <Hero />
      <FeaturesSplitRight invertMobile topDivider imageFill />
      <FeaturesTiles topDivider/>
      <FeaturesSplitLeft invertMobile topDivider imageFill />
    </>
  );
}

export default Home;