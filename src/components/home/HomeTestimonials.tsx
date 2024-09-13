"use client";
import React from "react";
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
import Rating from "react-star-ratings";
import Autoplay from "embla-carousel-autoplay";

const HomeTestimonials = () => {
  const TestimonialsCard = () => {
    return (
      <div>
        <Card className="rounded-none p-4  border-l-4 border-l-red-600 relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-600 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>

          <div className="relative z-10 text-slate-700 group-hover:text-white pb-8">
            If you are using an older or newer version of Magic UI, there might
            be some conflicts.
          </div>

          <Rating
            rating={3}
            starRatedColor="orange"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="4px"
          />
        </Card>
        <div className="pt-4 flex gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <div>
            <h1 className="font-semibold text-white">Johnson</h1>
            <p className="text-slate-300">Developer</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      className="mt-48 py-8"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-red-600 text-lg font-semibold text-center">
          --- Testimonials ---
        </h1>
        <h1 className="font-bold text-4xl  text-white text-center py-8">
          We Provide Any Business Problems{" "}
          <strong className="text-red-600">Services</strong>
        </h1>
        <div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="w-full">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialsCard />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
