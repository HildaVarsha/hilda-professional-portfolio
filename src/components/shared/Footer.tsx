import Link from "next/link";
import React from "react";

const Footer = () => {
  const Header = ({ label }: { label: string }) => {
    return <h1 className="text-2xl font-bold text-white pb-8">{label}</h1>;
  };
  const LinkComp = ({ href, label }: { href: string; label: string }) => {
    return (
      <Link href={href} className="text-slate-300 pb-3">
        {label}
      </Link>
    );
  };
  const CompanyInfo = () => {
    return (
      <div>
        <Header label="Anchor Informatics" />
        <p className="text-slate-300 w-64">
          Busines Consulting is optimize standing manufactured products and
          installation synergy. Professionally predominat why professional
          business
        </p>
      </div>
    );
  };
  const CompanyScreens = () => {
    return (
      <div className="flex flex-col">
        <Header label="Company" />
        <LinkComp href={"/"} label={"Home"} />
        <LinkComp href={"/services"} label={"Services"} />
        <LinkComp href={"/about-us"} label={"About Us"} />
        <LinkComp href={"/contact-us"} label={"Contact Us"} />
      </div>
    );
  };
  const Services = () => {
    return (
      <div className="flex flex-col">
        <Header label="Services" />
        <LinkComp href={"/"} label={"Home"} />
        <LinkComp href={"/services"} label={"Services"} />
        <LinkComp href={"/about-us"} label={"About Us"} />
        <LinkComp href={"/contact-us"} label={"Contact Us"} />
      </div>
    );
  };
  const ContactUs = () => {
    return (
      <div className="flex flex-col">
        <Header label="Contact Us" />
        <p className="text-slate-300">
          102/B New Elephant Rd, Uttara Dhaka – 1212, Bangladesh
        </p>
      </div>
    );
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pt-16"
    >
      <div className="border-b border-slate-600 pb-8">
        <div className="container mx-auto flex justify-between">
          <CompanyInfo />
          <CompanyScreens />
          <Services />
          <ContactUs />
        </div>
      </div>
      <div className="container mx-auto py-8 flex items-center justify-between">
        <p className="text-sm text-slate-300">
          Copyright © 2024 IT-Soft all rights reserved.
        </p>
        <Link
          title="Anchor Informatics"
          href={"/"}
          className="text-slate-300 hover:text-red-600"
        >
          Anchor Informatics
        </Link>
      </div>
    </div>
  );
};

export default Footer;
