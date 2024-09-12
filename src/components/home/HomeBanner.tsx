import React from "react";
import { Button } from "../ui";

const HomeBanner = () => {
  return (
    <div className="h-full w-full bg-gradient-to-t from-zinc-800 to-zinc-600relative">
      <video
        className=" w-full h-full object-cover"
        src={
          "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4"
        }
        autoPlay
        muted
        loop
      />
      <div className="container mx-auto h-full flex flex-col items-center justify-center absolute top-4">
        <h1 className="font-bold text-2xl text-red-600">Your Trusted Agency</h1>
        <h4 className="text-5xl font-bold text-white py-4">
          {" "}
          Your Financial Plan for Bussiness
        </h4>
        <p className="font-semibold text-white ">
          Without consulting plans,Plans not Growing fashion user
        </p>
        <Button className="bg-red-600 text-white mt-4 rounded-full font-semibold h-12">
          Work Together
        </Button>
      </div>
    </div>
  );
};

export default HomeBanner;
