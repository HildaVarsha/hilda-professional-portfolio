"use client";
import React, { useEffect } from "react";
import { Button } from "../ui";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import ShineBorder from "../magicui/shine-border";
import { CoolMode } from "../magicui";

const HomeBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="h-full w-full bg-gradient-to-t from-zinc-800 to-zinc-600 relative">
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
        <h1 data-aos="fade-left" className="font-bold text-3xl text-red-600">
          Your Trusted Agency
        </h1>

        <h4 data-aos="fade-left" className="text-6xl font-bold text-white py-4">
          {" "}
          Your Financial Plan for Bussiness
        </h4>
        <p data-aos="fade-right" className="font-semibold text-white ">
          Without consulting plans,Plans not Growing fashion user
        </p>
        <CoolMode>
          <Button
            data-aos="fade-right"
            className="bg-red-600 text-white mt-8 rounded-full font-semibold h-12"
          >
            Work Together
          </Button>
        </CoolMode>
      </div>

      {/* <ShineBorder
        data-aos="fade-right"
        className="absolute bottom-64 left-4 h-72 w-64 rounded-full"
        color={["#ff5733", "#e70909", "#FFBE7B"]}
      >
        <Image
          src={
            "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2"
          }
          alt="Teams"
          width={100}
          height={100}
          className="object-cover rounded-full h-64 w-full"
        />
      </ShineBorder> */}
    </div>
  );
};

export default HomeBanner;
