import React from "react";
import { Card } from "../ui";
import { ProjectorIcon } from "lucide-react";

const ServicesList = () => {
  const ServicesCard = ({
    icon,
    title,
    description,
  }: {
    icon: any;
    title: string;
    description: string;
  }) => {
    return (
      <Card className="rounded-none shadow-md p-6  border border-red-600 relative overflow-hidden group">
        <div className="absolute inset-0 bg-red-600 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>

        <div className="relative z-10 flex flex-col justify-center items-center">
          <div className="py-8 text-red-600 group-hover:text-white">{icon}</div>
          <h1 className="font-bold text-lg group-hover:text-white">{title}</h1>
          <p className="text-slate-700 py-8 group-hover:text-white">
            {description}
          </p>
        </div>
      </Card>
    );
  };
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl text-red-600 text-center">
            ---Our Services
          </h1>
          <h1 className="pt-4 font-bold text-4xl text-center">
            What We Provide
          </h1>
          <div className="border-b-4 border-red-600 h-8 w-12 "></div>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto py-6">
          <ServicesCard
            icon={<ProjectorIcon className="w-8 h-8 " />}
            title={"UX/UI Design"}
            description={
              " Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
            }
          />
          <ServicesCard
            icon={<ProjectorIcon className="w-8 h-8" />}
            title={"UX/UI Design"}
            description={
              " Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
            }
          />
          <ServicesCard
            icon={<ProjectorIcon className="w-8 h-8" />}
            title={"UX/UI Design"}
            description={
              " Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
            }
          />
          <ServicesCard
            icon={<ProjectorIcon className="w-8 h-8" />}
            title={"UX/UI Design"}
            description={
              " Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
            }
          />
          <ServicesCard
            icon={<ProjectorIcon className="w-8 h-8" />}
            title={"UX/UI Design"}
            description={
              " Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
            }
          />
          <ServicesCard
            icon={<ProjectorIcon className="w-8 h-8" />}
            title={"UX/UI Design"}
            description={
              " Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
