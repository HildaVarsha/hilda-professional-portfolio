"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUsBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "550px",
      }}
    >
      <div className="container mx-auto flex flex-col justify-center h-full">
        <h1 data-aos="fade-left" className="font-bold text-3xl text-red-600">
          About Us
        </h1>

        <h4 data-aos="fade-left" className="text-6xl font-bold text-white py-4">
          {" "}
          Your Financial Plan for Bussiness
        </h4>
        <p data-aos="fade-right" className="font-semibold text-white ">
          Without consulting plans,Plans not Growing fashion user
        </p>
      </div>
    </div>
  );
};

export default AboutUsBanner;
