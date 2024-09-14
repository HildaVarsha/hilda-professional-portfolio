import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutOurLocation = () => {
  return (
    <div className="py-16  bg-slate-100">
      <div className="container mx-auto">
        <h1 className="text-red-600 text-lg font-semibold">
          --- Our Locations
        </h1>
        <div className="py-4 flex items-center justify-between">
          <h1 className="font-bold text-4xl w-[550px]">
            We Provide Any Business Problems{" "}
            <strong className="text-red-600">Services</strong>
          </h1>
        </div>
        <div className="flex  gap-8 py-8">
          <Image
            src={
              "https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="Our Location"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
          <div className="w-full">
            <h1 className="text-red-600 text-lg font-semibold pb-4">
              Anchor Informatics
            </h1>

            <div className="pb-4">
              <h1 className="font-bold text-lg pb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> London,Uk
              </h1>
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="pb-4">
              <h1 className="font-bold text-lg pb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Dubai,UAE
              </h1>
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="pb-4">
              <h1 className="font-bold text-lg pb-2 flex items-center gap-4">
                <MapPin className="w-4 h-4" /> Hydrabad,IN
              </h1>
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <p className="text-slate-700 font-semibold">
              If you have any questions or need further assistance, feel free to
              contact us at any time. We value your feedback, so feel free to
              contact us with any suggestions or concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurLocation;
