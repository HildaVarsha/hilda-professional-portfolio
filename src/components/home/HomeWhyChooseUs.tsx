"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Card } from "../ui";
import { AwardIcon } from "lucide-react";
import NumberTicker from "../magicui/number-ticker";
import Image from "next/image";

const HomeWhyChooseUs = () => {
  const ProgressBarComp = ({
    label,
    percentage,
  }: {
    label: string;
    percentage: number;
  }) => {
    return (
      <>
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-slate-700 font-semibold">{label}</h1>
          <p>{percentage}%</p>
        </div>
        <ProgressBar
          completed={percentage}
          bgColor="red"
          height="14px"
          className="pb-4"
        />
      </>
    );
  };
  const OurAcheivement = () => {
    return (
      <Card className="rounded-none bg-slate-100 w-44 flex flex-col items-center justify-center p-4">
        <AwardIcon className="w-8 h-8 text-red-600 " />
        <p className="text-slate-900 font-bold text-3xl py-4">120 +</p>
        <p className="text-slate-700">Project Done</p>
      </Card>
    );
  };
  return (
    <div className="container mx-auto py-16 flex items-center gap-8">
      <div className="w-full">
        <h4 className="text-red-600 text-lg font-semibold">---Why Chose Us?</h4>
        <h1 className="font-bold text-4xl py-4">
          We Unlock the Potential Finance{" "}
          <strong className="text-red-600">Consulting</strong>
        </h1>
        <p className="text-slate-700 pt-4 pb-8">
          Completely pontificate front-end information before performance based
          interfaces. Globally disintermediate researched relationships.
        </p>
        <ProgressBarComp label="Business Strategy" percentage={80} />
        <ProgressBarComp label="Technology Consulting" percentage={70} />
        <div className="flex items-center jutify-center gap-4 py-8">
          <OurAcheivement />
          <OurAcheivement />
        </div>
      </div>
      <div className="w-full">
        <Image
          src={
            "https://images.pexels.com/photos/6565248/pexels-photo-6565248.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2"
          }
          alt="Awards"
          width={100}
          height={100}
          className="w-full h-[550px] object-cover"
        />
      </div>
    </div>
  );
};

export default HomeWhyChooseUs;
