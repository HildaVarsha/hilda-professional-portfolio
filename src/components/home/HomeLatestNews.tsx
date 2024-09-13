import React from "react";
import { Button, Card } from "../ui";
import Image from "next/image";
import Marquee from "../magicui/marquee";

const HomeLatestNews = () => {
  const CarComp = ({
    src,
    title,
    description,
  }: {
    src: string;
    title: string;
    description: string;
  }) => {
    return (
      <Card>
        <Image
          src={src}
          alt="Anchor Informatics"
          width={100}
          height={100}
          className="object-cover w-full h-64"
        />
        <div className="p-4">
          <p className="text-slate-500">{title}</p>
          <h2 className="font-bold text-lg py-2">{description}</h2>
          <Button className="my-2 bg-red-600 text-white rounded-full">
            More About
          </Button>
        </div>
      </Card>
    );
  };
  return (
    <div className="container mx-auto py-16">
      <h1 className="font-bold text-xl text-red-600">---Latest News</h1>
      <div className="flex justify-between py-8">
        <p className="py-3 font-bold text-4xl ">
          We’re here to share story from Latest
          <strong className="text-red-600 pl-2">News</strong>
        </p>
        <p className="text-slate-500 py-4">
          Progressively maintain enterprise value vis-a-vis competitive
          materials. Distinctively myocardinate next-generation interfaces
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {[1, 2, 3, 4, 5].map((news) => (
          <CarComp
            key={news}
            src="https://images.pexels.com/photos/3944418/pexels-photo-3944418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="Anchor Informatics"
            description="Plan Your Project With Anchor Informatics"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default HomeLatestNews;
