import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { navBarData } from "@/core/constant";
type NavBarItem = {
  id: number;
  name: string;
  path: string;
};

const TopMenuBar = () => {
  return (
    <div className="w-full bg-white border-b border-slate-400">
      <div className="flex items-center container mx-auto h-24">
        <Image
          src={"/logo.png"}
          alt="Anchor Informatics"
          width={100}
          height={100}
          className="object-contain w-full"
        />
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-8">
            {navBarData?.map((menu: NavBarItem) => (
              <Link
                key={menu?.id}
                href={menu?.path}
                title={menu?.name}
                className="font-semibold text-zinc-900 hover:text-red-600 cursor-pointer"
              >
                {menu?.name}
              </Link>
            ))}
          </div>
          <Button className="bg-red-600 text-white font-semibold hover:bg-orange-500">
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopMenuBar;
