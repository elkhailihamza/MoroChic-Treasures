import { Card } from "./Card";
import Button from "./Button";

import image1 from "../images/carousel-1.svg";
import image2 from "../images/carousel-2.svg";
import image3 from "../images/carousel-3.svg";

export const MostRecent = () => {
  return (
    <section className="bg-[#FEFAE0]/40 mb-20">
      <div className="flex justify-center mt-10 mb-7">
        <h1 className="font-bold doppio-one-regular md:text-[28px]">
          Most Recent
        </h1>
      </div>

      <div
        id="most-recent-carousel"
        className="relative flex justify-center w-full m-0"
      >
        <div className="carousel divide-x divide-gray-200 md:divide-2 lg:divide-3 overflow-y-hidden h-full">
          <div
            className="carousel-item w-full flex justify-center"
            data-carousel-item
          >
            <div className="flex flex-wrap justify-center items-center h-full lg:gap-16 gap-2 mt-2">
              <Card image={image1} className={"flex flex-col md:w-[200px] w-[140px] bg-white hover:bg-gray-100"}>
                <Button className="bg-[#606C38] py-3 text-white">Buy</Button>
                <div className="text-center mt-5 font-medium">
                  <h1>For: $99,99</h1>
                </div>
              </Card>
              <Card image={image2} className={"flex flex-col md:w-[200px] w-[140px] bg-white hover:bg-gray-100"}>
                <Button className="bg-[#606C38] py-3 text-white">Buy</Button>
                <div className="text-center mt-5 font-medium">
                  <h1>For: $99,99</h1>
                </div>
              </Card>
              <Card image={image3} className={"flex flex-col md:w-[200px] w-[140px] bg-white hover:bg-gray-100"}>
                <Button className="bg-[#606C38] py-3 text-white">Buy</Button>
                <div className="text-center mt-5 font-medium">
                  <h1>For: $99,99</h1>
                </div>
              </Card>
            </div>
          </div>
          <div
            className="carousel-item w-full flex justify-center"
            data-carousel-item
          >
            <div className="flex flex-wrap justify-center items-center h-full lg:gap-16 gap-2 mt-2">
              <Card image={image1} className={"flex flex-col md:w-[200px] w-[140px] bg-white hover:bg-gray-100"}>
                <Button className="bg-[#606C38] py-3 text-white">Buy</Button>
                <div className="text-center mt-5 font-medium">
                  <h1>For: $99,99</h1>
                </div>
              </Card>
              <Card image={image2} className={"flex flex-col md:w-[200px] w-[140px] bg-white hover:bg-gray-100"}>
                <Button className="bg-[#606C38] py-3 text-white">Buy</Button>
                <div className="text-center mt-5 font-medium">
                  <h1>For: $99,99</h1>
                </div>
              </Card>
              <Card image={image3} className={"flex flex-col md:w-[200px] w-[140px] bg-white hover:bg-gray-100"}>
                <Button className="bg-[#606C38] py-3 text-white">Buy</Button>
                <div className="text-center mt-5 font-medium">
                  <h1>For: $99,99</h1>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-white/5"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center">
            <svg
              width="20"
              viewBox="0 0 16 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.25 26.5L1.75 14L14.25 1.5"
                stroke="#0000007F"
                stroke-opacity="0.3"
                stroke-width="4.17"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-white/5"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center">
            <svg
              width="20"
              viewBox="0 0 16 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 26.5L14.25 14L1.75 1.5"
                stroke="#0000007F"
                stroke-opacity="0.3"
                stroke-width="4.17"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
};
