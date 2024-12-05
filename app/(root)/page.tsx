// import FeatureSection from "./landing/feature-section";
import { Grounps } from "./landing/Grounps";
import Hero from "./landing/Hero";

import ShowcaseSection from "./landing/showcase-section";

export default function Home() {
  return (
    <>
      <Hero />
      
      <ShowcaseSection />
      {/* <FeatureSection /> */}
      <Grounps />
    </>
  );
}
