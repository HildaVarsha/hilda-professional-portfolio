import React from "react";
import { Button } from "../ui";
import Link from "next/link";

const ServicesTrust = () => {
  return (
    <div className="relative w-full">
      <video
        className=" w-full h-[500px] object-cover"
        src={
          "  https://videos.pexels.com/video-files/8061454/8061454-uhd_2560_1440_25fps.mp4"
        }
        autoPlay
        muted
        loop
      />
      <div className="absolute top-44 left-[28%]">
        <h1 className="text-4xl font-bold text-white w-[650px] text-center">
          We Deliver Solution with the Goal of A Trusting Relationships
        </h1>
        <p className="py-6 text-slate-200 font-semibold w-[650px] text-center">
          Appropriate for your specific business, making it easy for you to have
          quality IT services.
        </p>
        <div className="flex items-center justify-center">
          <Link
            href="/about-us"
            className="bg-red-600 p-4 rounded-md text-white hover:bg-red-500 text-center font-semibold"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesTrust;
