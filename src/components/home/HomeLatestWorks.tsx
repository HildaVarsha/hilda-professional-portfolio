import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui";
import Image from "next/image";

const HomeLatestWorks = () => {
  const CarouselComp = () => {
    return (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Image
                src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Latest works"
                width={100}
                height={100}
                className="w-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  };
  return (
    <div className="bg-black py-16 relative h-[500px]">
      <div className="container mx-auto">
        <h1 className="font-bold text-xl text-red-600">---Latest Works</h1>
        <div className="flex  justify-between py-4">
          <h1 className="font-bold text-4xl w-[450px] text-white py-4">
            We Unlock the Potential Finance{" "}
            <strong className="text-red-600">Consulting</strong>
          </h1>
          <div>
            <p className="text-white font-bold text-4xl">1630</p>
            <p className="text-slate-200 py-4">Project Completed</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-8 absolute bottom-[-180px] left-64">
        <CarouselComp />
      </div>
    </div>
  );
};

export default HomeLatestWorks;
