import {
  ContactUsAddress,
  ContactUsBanner,
  ContactUsForm,
  ContactUsMap,
} from "@/components/contact-us";
import React from "react";

const ContactUs = () => {
  return (
    <div className="">
      <ContactUsBanner />
      <div className="py-16 container mx-auto flex  gap-8">
        <ContactUsAddress />
        <ContactUsForm />
      </div>
      <ContactUsMap />
    </div>
  );
};

export default ContactUs;
