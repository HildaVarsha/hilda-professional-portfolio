import {
  AboutOurExperience,
  AboutOurLocation,
  AboutOurTeam,
  AboutUsBanner,
  AboutUsCompany,
  AboutUsTestimonials,
} from "@/components/about-us";
import React from "react";

const AboutUs = () => {
  return (
    <div className="">
      <AboutUsBanner />
      <AboutUsCompany />
      <AboutOurExperience />
      <AboutOurTeam />
      <AboutOurLocation />
      <AboutUsTestimonials />
    </div>
  );
};

export default AboutUs;
