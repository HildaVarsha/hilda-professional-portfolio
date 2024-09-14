import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui";
import Image from "next/image";

const AboutUsCompany = () => {
  const TabsComponent = () => {
    return (
      <div>
        <Tabs defaultValue="mission" className="w-full">
          <TabsList>
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="our_value">Our Value</TabsTrigger>
          </TabsList>
          <TabsContent
            value="mission"
            className="border border-slate-200 p-5 rounded-lg"
          >
            <h1 className="font-bold text-xl text-red-600">Our Mission</h1>
            <p className="text-slate-700 py-2">
              Dolor sit amet consectetur elit sed do eiusmod tempor incididunt
              labore et dolore magna aliqua enim ad minim veniam quis nostre
              exercitation ulac laboris aliquip ex ea commodo consequat duis
              aute irure.dolor in repre henderit in voluptate
            </p>
            <li className="py-2 text-slate-700">
              consectetur elit sed do eius
            </li>
            <li className="py-2 text-slate-700">consectetur elit sed</li>
            <li className="py-2 text-slate-700">consectetur elit sed do</li>
          </TabsContent>
          <TabsContent
            value="our_value"
            className="border border-slate-200 p-5 rounded-lg"
          >
            <h1 className="font-bold text-xl text-red-600">Our Value</h1>
            <p className="text-slate-700 py-2">
              Dolor sit amet consectetur elit sed do eiusmod tempor incididunt
              labore et dolore magna aliqua enim ad minim veniam quis nostre
              exercitation ulac laboris aliquip ex ea commodo consequat duis
              aute irure.dolor in repre henderit in voluptate
            </p>
            <p className="text-slate-700 py-2">
              Dolor sit amet consectetur elit sed do eiusmod tempor incididunt
              labore et dolore magna aliqua enim ad minim veniam quis nostre
              exercitation ulac laboris aliquip ex ea commodo consequat duis
              aute irure.dolor in repre henderit in voluptate
            </p>
          </TabsContent>
        </Tabs>
      </div>
    );
  };
  return (
    <div className="container mx-auto flex  gap-8 py-16">
      <div className="w-full  p-2">
        <Image
          src={
            "https://images.pexels.com/photos/2928013/pexels-photo-2928013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="About Anchor Informatics"
          width={100}
          height={100}
          className="w-full h-[600px] border border-red-600 object-cover p-4"
        />
      </div>
      <div className="w-full">
        <h1 className="font-bold text-xl text-red-600">---About Company</h1>

        <h1 className="font-bold text-4xl  pt-4">
          We deal with the aspects of professional
          <strong className="text-red-600 pl-2">IT Services</strong>
        </h1>
        <div className="border-b-4 border-red-600 h-8 w-12 "></div>
        <p className="text-slate-700 py-4">
          Anchor Informatics is the partner of choice for many of the world’s
          leading and enterprises, SMEs and technology challengers. We help
          businesses elevate their value through custom software development.
        </p>
        <div>
          <TabsComponent />
        </div>
      </div>
    </div>
  );
};

export default AboutUsCompany;
