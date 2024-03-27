import { useEffect } from "react";
import Button from "./Button";
import { FooterLogo } from "./FooterLogo";
import Input from "./Input";
import { Sublinks } from "./Sublinks";
import { Socialmediaicons } from "./Socialmediaicons";

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
          <div className="flex md:justify-between justify-center md:mb-[16px] mb-[8px]">
            <div className="lg:w-[225px] md:w-[150px] w-[125px] h-16">
              <FooterLogo />
            </div>
            <div className="mt-7 md:block hidden">
              <div className="flex justify-center items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5" />
                  <path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z" />
                </svg>
                <span className="text-white">Subscribe To Our Newsletter</span>
              </div>
              <div className="mt-1">
                <Input
                  type="email"
                  name="newsletter"
                  className="rounded py-1"
                  placeholder="Email.."
                ></Input>
              </div>
              <div className="flex justify-center mt-2">
                <Button
                  color="#283618"
                  className="px-5 py-1 rounded-lg text-white"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col justify-around sm:px-16 px-7 sm:gap-16 gap-5 divide-x">
            <div>
              <Sublinks header="What is MoroChic" links={FirstLinks}></Sublinks>
            </div>
            <div className="lg:block hidden" />
            <div className="border-none">
              <Sublinks header="MoroChic Help" links={SecondLinks}></Sublinks>
            </div>
            <div className="lg:block hidden" />
            <div className="border-none">
              <Sublinks header="Legal & Stuff" links={ThirdLinks}></Sublinks>
            </div>
          </div>
          <div className="px-4 mt-6">
            <hr />
          </div>
          <div className="flex justify-center mt-5">
            <div className="flex flex-col items-center lg:w-[190px] md:w-[150px] w-[125px] gap-2">
              <h1
                className={
                  "text-white lg:text-[20px] md:text-[16px] text-[13px]"
                }
              >
                Follow us on
              </h1>
              <Socialmediaicons />
            </div>
          </div>
          <div className="text-center text-white mt-7">
            <h1 className="md:font-medium md:text-[16px] text-[11px] text-[#E5E5E5]/75">
              © Copyright, All rights reserved.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
