import React from "react";
import { Card, CardContent } from "../ui";
import ShimmerButton from "../magicui/shimmer-button";
import Link from "next/link";
import { BoxIcon } from "lucide-react";

const HomeOurServices = () => {
  const CardComponent = ({
    index,
    title,
    description,
  }: {
    index: number;
    title: string;
    description: string;
  }) => {
    return (
      <Card className="rounded-none relative overflow-hidden group border-0">
        <div className="absolute inset-0 bg-red-600 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>

        <CardContent className="relative z-10 pt-4">
          <BoxIcon className="w-12 h-12 text-red-600 group-hover:text-white" />
          <div className="border-b border-slate-300 py-8 ">
            <p className=" w-32 font-bold text-slate-700  group-hover:text-white">
              {title}
            </p>
          </div>

          <p className="py-8 text-lg font-semibold text-slate-700 group-hover:text-white">
            {description}
          </p>

          <Link
            href={"/services"}
            className="rounded-full px-3 py-2 mb-8 bg-red-600 text-white group-hover:bg-white group-hover:text-red-600 border border-transparent group-hover:border-red-600"
          >
            Read More
          </Link>
        </CardContent>

        <div className="h-8 w-8 font-semibold text-center pt-1 bg-red-600 group-hover:bg-white group-hover:text-red-600 text-white absolute top-0 right-0">
          {index}
        </div>
      </Card>
    );
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/2962069/pexels-photo-2962069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto pt-12">
        <h1 className="text-red-600 text-lg font-semibold">--- Our Services</h1>
        <div className="py-4 flex items-center justify-between">
          <h1 className="font-bold text-4xl w-[550px] text-white">
            We Provide Any Business Problems{" "}
            <strong className="text-red-600">Services</strong>
          </h1>
          <ShimmerButton className="shadow-2xl cursor-pointer hover:bg-red-700">
            <Link
              href={"/services"}
              title="Services"
              className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg"
            >
              More Services
            </Link>
          </ShimmerButton>
        </div>
        <div className="py-8 grid grid-cols-4 gap-8">
          <CardComponent
            index={1}
            title="Web development"
            description="Dramatically cultivate quality user-centric growth"
          />
          <CardComponent
            index={2}
            title="Web development"
            description="Dramatically cultivate quality user-centric growth"
          />
          <CardComponent
            index={3}
            title="Web development"
            description="Dramatically cultivate quality user-centric growth"
          />
          <CardComponent
            index={4}
            title="Web development"
            description="Dramatically cultivate quality user-centric growth"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeOurServices;
