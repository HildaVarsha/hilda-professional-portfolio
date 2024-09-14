import React from "react";
import { Button, Card, Input, Textarea } from "../ui";

const ContactUsForm = () => {
  return (
    <div className="w-full">
      <Card className="p-6 bg-slate-100 rounded-none flex flex-col gap-4">
        <div>
          <h1 className="font-bold text-xl text-red-600">---Get In Touch</h1>
          <h1 className="font-bold text-4xl pt-4">Ready to Get Started?</h1>
          <div className="border-b-4 border-red-600 h-8 w-12 "></div>
          <p className="font-medium pt-4 text-slate-700">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <div>
          <h1 className="pb-2">Name</h1>
          <Input className="bg-white" placeholder="Your Name" />
        </div>
        <div>
          <h1 className="pb-2">Email</h1>
          <Input className="bg-white" placeholder="Your Email" />
        </div>
        <div>
          <h1 className="pb-2">Phone Number</h1>
          <Input className="bg-white" placeholder="Phone NUmber" />
        </div>
        <div>
          <h1 className="pb-2">Message</h1>
          <Textarea className="bg-white h-44" placeholder="Your Message" />
        </div>
        <div className="flex items-center justify-center">
          <Button className="bg-red-600 text-white h-12 mt-4 w-44">Send</Button>
        </div>
      </Card>
    </div>
  );
};

export default ContactUsForm;
