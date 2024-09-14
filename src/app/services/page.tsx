import {
  ServicesBanner,
  ServicesList,
  ServicesTestimonials,
  ServicesTrust,
} from "@/components/services";
import React from "react";

const Services = () => {
  return (
    <div className="">
      <ServicesBanner />
      <ServicesList />
      <ServicesTrust />
      <ServicesTestimonials />
    </div>
  );
};

export default Services;
