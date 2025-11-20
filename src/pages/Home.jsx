import React from "react";
import './Home.css';
import { HeroSection } from "../components/HomeSections/HeroSection";
import { CategorySection } from "../components/HomeSections/CategorySection";
import { FeatureSection } from "../components/HomeSections/FeatureSection";
import { MissionSection } from "../components/HomeSections/MissionSection";
import {ProductCarousel} from "../components/HomeSections/FavouriteSection";
import { TestimonialSection} from "../components/HomeSections/TestimonialSection";
import {ContentSections} from "../components/HomeSections/ContentSections";
import {SocialFeed} from "../components/HomeSections/SocialFeedSection";
import {BenefitsSection} from "../components/HomeSections/BenefitsSection";


function Home() {
  return (<>
    <HeroSection />
    <CategorySection />
    < FeatureSection />
    <MissionSection />
    <ProductCarousel/>
    < TestimonialSection/>
    <ContentSections/>
    <SocialFeed/>
    <BenefitsSection/>
  </>

  );
}

export default Home;