import React from "react";
import { Card } from "../ui";
import Image from "next/image";

const AboutOurTeam = () => {
  const TeamMembersCard = ({ name, role }: { name: string; role: string }) => {
    return (
      <div>
        <Card>
          <Image
            src={
              "https://images.pexels.com/photos/3861954/pexels-photo-3861954.jpeg"
            }
            alt=""
            width={100}
            height={100}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h1 className="font-bold text-lg">{name}</h1>
            <p className="text-slate-700 py-2">{role}</p>
          </div>
        </Card>
      </div>
    );
  };
  return (
    <div className="pt-72 container mx-auto">
      <h4 className="text-red-600 text-lg font-semibold">---About Our Team</h4>
      <h1 className="font-bold text-4xl py-4">Our Dedicated Team</h1>
      <p className="text-slate-700 pt-4 pb-8">
        Aliquam sodales justo sit amet urna auctor scelerisquinterdum leo anet
        tempus enim and esent egetis hendrerit vel nibh vitae ornar sem velit
        aliquam facilisivitae finibus risus feslin is hendrerit vel nibh vitae
        ornar uspendisse consequat quis sem.
      </p>
      <div className="py-4 grid grid-cols-4 gap-8">
        <TeamMembersCard name={"Aliquam"} role={"Developer"} />
        <TeamMembersCard name={"Aliquam"} role={"Tester"} />
        <TeamMembersCard name={"Aliquam"} role={"Designer"} />
        <TeamMembersCard name={"Aliquam"} role={"Designer"} />
      </div>
    </div>
  );
};

export default AboutOurTeam;
