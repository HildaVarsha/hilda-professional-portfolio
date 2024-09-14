import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import React from "react";

const ContactUsAddress = () => {
  return (
    <div className="pt-6 w-full">
      <div>
        <h1 className="font-bold text-xl text-red-600">---CONTACT DETAILS</h1>
        <h1 className="font-bold text-4xl pt-4">Contact us</h1>
        <div className="border-b-4 border-red-600 h-8 w-12 "></div>
        <p className="font-medium pt-4 text-slate-700">
          Give us a call or drop by anytime, we endeavour to answer all
          enquiries within 24 hours on business days. We will be happy to answer
          your questions.
        </p>
      </div>
      <div className="flex items-center gap-4 pt-8">
        <MapPin className="w-10 h-10 text-red-600" />
        <div>
          <h1 className="font-bold text-lg">Our Address:</h1>
          <p className="pt-2 text-slate-700">411 University St,London,Uk</p>
        </div>
      </div>
      <div className="flex items-center gap-4 pt-8">
        <MailIcon className="w-10 h-10 text-red-600" />
        <div>
          <h1 className="font-bold text-lg">Our Mailbox:</h1>
          <p className="pt-2 text-slate-700">anchorinformatics@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center gap-4 pt-8">
        <PhoneIcon className="w-10 h-10 text-red-600" />
        <div>
          <h1 className="font-bold text-lg">Our Phone:</h1>
          <p className="pt-2 text-slate-700">7863756476</p>
        </div>
      </div>
      <div className="pt-8 text-slate-700">
        We value open communication and are always here to assist you. Whether
        you have a question about our services, need support with one of our
        products, or just want to give us feedback, we are ready to help. Our
        team is committed to providing prompt and thorough responses to all
        inquiries. You can reach us through the contact form below or use the
        provided email and phone number for more immediate assistance. We aim to
        respond to all inquiries within 24 hours during business days
      </div>
    </div>
  );
};

export default ContactUsAddress;
