import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const HomeCompanyHistory = () => {
  const IconComp = ({ label }: { label: string }) => {
    return (
      <div className="flex items-center gap-4 pb-2">
        <CircleCheck className="w-5 h-5 text-orange-600" />
        <p>{label}</p>
      </div>
    );
  };
  const CEOComp = () => {
    return (
      <div className="flex flex-1 items-stretch pt-8">
        <div className="p-4 bg-orange-200">
          <Image
            src={
              "https://images.pexels.com/photos/4491490/pexels-photo-4491490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="CEO"
            width={100}
            height={100}
            className="w-28 h-28 rounded-full"
          />
        </div>
        <div className="p-4 bg-slate-100 flex-1 flex-col items-center">
          <p>
            “Appropriately enhance princip centered innovation standard
            platforms credibly orchestrate”
          </p>
          <p className="mt-4">
            <strong className="text-orange-600">CEO</strong>- Rafi
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="flex gap-8 container mx-auto py-8">
      <Image
        src={
          "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&dpr=2"
        }
        alt="Anchor Informatics"
        width={100}
        height={100}
        className="object-fill w-full h-full"
      />
      <div className="w-full">
        <h1 className="font-bold text-xl text-orange-600">---Since 2014</h1>
        <p className="py-3 font-bold text-4xl ">
          Our Scope global stakeholder Over 2000+{" "}
          <strong className="text-orange-600">Companies</strong>
        </p>
        <p className="text-slate-500 py-4">
          Appropriately enhance principle-centered innovation rather than high
          standards in platforms. Credibly orchestrate functional
        </p>
        <div className="py-4">
          <IconComp label="Holisticly orchestrate innovative" />
          <IconComp label="Holisticly orchestrate innovative" />
          <IconComp label="Holisticly orchestrate innovative" />
        </div>
        <CEOComp />
      </div>
    </div>
  );
};

export default HomeCompanyHistory;
