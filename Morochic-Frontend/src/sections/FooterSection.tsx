import { useEffect } from "react";
import Button from "../components/Button";
import { FooterLogo } from "../components/FooterLogo";
import Input from "../components/Input";
import { Sublinks } from "../components/Sublinks";
import { Socialmediaicons } from "../components/Socialmediaicons";
import { SubscribeToNewsletter } from "../components/SubscribeToNewsletter";

export const Footer = () => {
  useEffect(() => {});
  const [FirstLinks, SecondLinks, ThirdLinks] = [
    [
      { href: "/page1", name: "About MoroChic" },
      { href: "/page2", name: "News" },
      { href: "/page3", name: "Contact" },
      { href: "/page4", name: "Blog" },
    ],
    [
      { href: "/page1", name: "Accessibility" },
      { href: "/page2", name: "Help center" },
      { href: "/page3", name: "Shipping and returns" },
      { href: "/page4", name: "Products" },
    ],
    [
      { href: "/page1", name: "Terms and services" },
      { href: "/page2", name: "Offers and deals" },
      { href: "/page3", name: "Terms of use" },
      { href: "/page4", name: "Privacy policy" },
    ],
  ];
  return (
    <section className="bg-[#000000]">
      <div className="w-full flex justify-center">
        <div className="w-5/6 md:px-10 md:pt-10 pt-5 pb-2">
          <div className="flex lg:justify-between justify-center md:mb-[16px] mb-[8px]">
            <div className="lg:w-[225px] md:w-[150px] w-[125px] h-16">
              <FooterLogo />
            </div>
            <div className="mt-7 mb-10 lg:block hidden xl:text-[18px] text-[16px]">
              <SubscribeToNewsletter />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col justify-around sm:px-16 px-7 sm:gap-16 gap-5 divide-x mt-7">
            <Sublinks header="What is MoroChic" links={FirstLinks}></Sublinks>
            <div className="lg:block hidden" />
            <Sublinks header="MoroChic Help" links={SecondLinks}></Sublinks>
            <div className="lg:block hidden" />
            <Sublinks header="Legal & Stuff" links={ThirdLinks}></Sublinks>
          </div>
          <div className="px-4 mt-6">
            <hr />
          </div>
          <div className="flex justify-center mt-5">
            <div className="flex flex-col items-center lg:w-[190px] md:w-[150px] w-[125px] gap-2">
              <h1 className={"text-white"}>Follow us on</h1>
              <Socialmediaicons />
            </div>
          </div>
          <div className="text-center text-white mt-7">
            <h1 className="md:font-medium md:text-[13px] text-[11px] text-[#E5E5E5]/75">
              © Copyright, All rights reserved.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
