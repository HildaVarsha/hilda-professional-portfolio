import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPin,
  PhoneIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import TopMenuBar from "./TopMenuBar";

const TopNavbar = () => {
  const LinkComponent = ({
    href,
    name,
    icon,
  }: {
    href: string;
    name: string;
    icon: any;
  }) => {
    return (
      <Link href={href} className="flex items-center gap-2 font-medium">
        {icon}
        {name}
      </Link>
    );
  };

  return (
    <>
      <div className="flex w-full">
        <div className="bg-red-600  text-white flex items-center gap-4 w-full p-2 pl-12">
          <LinkComponent
            href={"/"}
            name={"anchorinformatics@gmail.com"}
            icon={<MailIcon className="w-4 h-4" />}
          />
          <LinkComponent
            href={""}
            name={"99898987878"}
            icon={<PhoneIcon className="w-4 h-4" />}
          />
          <LinkComponent
            href={""}
            name={"London,UK"}
            icon={<MapPin className="w-4 h-4" />}
          />
        </div>
        <div className="flex items-center justify-end gap-4 bg-slate-900 text-white w-full p-2 pr-12">
          <FacebookIcon className="w-4 h-4" />
          <InstagramIcon className="w-4 h-4" />
          <TwitterIcon className="w-4 h-4" />
        </div>
      </div>
      <TopMenuBar />
    </>
  );
};

export default TopNavbar;
