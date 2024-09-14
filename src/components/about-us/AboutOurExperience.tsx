"use client";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const AboutOurExperience = () => {
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
          <h1 className="text-white font-semibold">{label}</h1>
          <p className="text-white">{percentage}%</p>
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
  return (
    <div className="relative">
      <video
        className=" w-full h-[500px] object-cover"
        src={
          "https://videos.pexels.com/video-files/12122308/12122308-uhd_2560_1440_24fps.mp4"
        }
        autoPlay
        muted
        loop
      />
      <div className="max-w-4xl mx-auto bg-slate-900 p-8 rounded-md absolute bottom-[-200px] left-[430px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl text-white text-center">
            ---Our Experiences
          </h1>
          <h1 className="font-bold text-white text-4xl w-[550px] text-center pt-4">
            25 Years Of Experience With IT Solution
            <strong className="text-red-600 pl-2">Services</strong>
          </h1>
          <div className="border-b-4 border-red-600 h-8 w-12 "></div>
        </div>

        <ProgressBarComp label="App Development" percentage={80} />
        <ProgressBarComp label="UI/UX Design" percentage={70} />
        <ProgressBarComp label="Web Developement" percentage={75} />
        <ProgressBarComp label="Financial" percentage={90} />
      </div>
    </div>
  );
};

export default AboutOurExperience;
