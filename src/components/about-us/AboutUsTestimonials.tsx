"use client";
import React from "react";
import Rating from "react-star-ratings";
import {
  Avatar,
  AvatarImage,
  Card,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui";

const AboutUsTestimonials = () => {
  const TestimonialCard = () => {
    return (
      <Card className="rounded-none p-5 flex items-center justify-center border border-zinc-200">
        <div className="flex flex-col items-center justify-center ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <p className="font-bold text-slate-700 py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            voluptatem obcaecati, veniam cumque asperiores recusandae at,
            exercitationem quia fugit error vel fuga architecto iusto.
          </p>
          <Rating
            rating={3}
            starRatedColor="red"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="4px"
          />
          <div className="pt-4">
            <h1 className="font-semibold text-slate-600">Johnson</h1>
            <p className="text-red-600">Developer</p>
          </div>
        </div>
      </Card>
    );
  };
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl text-red-600">
          ---CLIENT TESTIMONIALS
        </h1>
        <h1 className="font-bold text-4xl w-[550px] text-center py-6">
          What Says Our Most Of Happy
          <strong className="text-red-600 pl-2">Clients</strong>
        </h1>
        <div className="border-b-4 border-red-600 h-8 w-12 "></div>
      </div>
      <div className="py-6">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="w-full">
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <TestimonialCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUsTestimonials;
