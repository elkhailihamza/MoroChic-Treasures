import Button from "../../components/Button";

import image1 from "../../images/carousel-1.svg";
import image2 from "../../images/carousel-2.svg";
import image3 from "../../images/carousel-3.svg";
import image4 from "../../images/carousel-4.svg";
import image5 from "../../images/carousel-5.svg";

export const Slider = () => {
  return (
    <div
      id="main-carousel"
      className="relative w-full m-0 p-0 lg:text-[20px] md:text-[16px] text-[13px]"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden md:h-[500px]">
        <div className="hidden duration-2 ease-in-out" data-carousel-item>
          <img
            src={image1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <div className="relative md:w-60 w-28 grid text-white lg:top-28 lg:left-56 md:top-28 md:left-32 top-20 left-20">
            <h1 className="font-medium  lg:text-[22px] md:text-[16px] text-[13px]">
              Something Text
            </h1>
            <span className="font-regular md:text-[16px] text-[13px]">
              <span className="text-[#DDA15E]">$</span>99,99
            </span>
            <div className="md:w-44 w-24 md:mt-10 mt-5">
              <Button
                color="#606C38"
                base={false}
                className="py-1 w-full rounded-sm text-white"
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden duration-2 ease-in-out" data-carousel-item>
          <img
            src={image2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <div className="relative md:w-60 w-28 grid text-white lg:top-28 lg:left-56 md:top-28 md:left-32 top-20 left-20">
            <h1 className="font-medium  lg:text-[22px] md:text-[16px] text-[13px]">
              Something Text
            </h1>
            <span className="font-regular md:text-[16px] text-[13px]">
              <span className="text-[#DDA15E]">$</span>99,99
            </span>
            <div className="md:w-44 w-24 md:mt-10 mt-5">
              <Button
                color="#606C38"
                base={false}
                className="py-1 w-full rounded-sm text-white"
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden duration-2 ease-in-out" data-carousel-item>
          <img
            src={image3}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <div className="relative md:w-60 w-28 grid text-white lg:top-28 lg:left-56 md:top-28 md:left-32 top-20 left-20">
            <h1 className="font-medium  lg:text-[22px] md:text-[16px] text-[13px]">
              Something Text
            </h1>
            <span className="font-regular md:text-[16px] text-[13px]">
              <span className="text-[#DDA15E]">$</span>99,99
            </span>
            <div className="md:w-44 w-24 md:mt-10 mt-5">
              <Button
                color="#606C38"
                base={false}
                className="py-1 w-full rounded-sm text-white"
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden duration-2 ease-in-out" data-carousel-item>
          <img
            src={image4}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <div className="relative md:w-60 w-28 grid text-white lg:top-28 lg:left-56 md:top-28 md:left-32 top-20 left-20">
            <h1 className="font-medium  lg:text-[22px] md:text-[16px] text-[13px]">
              Something Text
            </h1>
            <span className="font-regular md:text-[16px] text-[13px]">
              <span className="text-[#DDA15E]">$</span>99,99
            </span>
            <div className="md:w-44 w-24 md:mt-10 mt-5">
              <Button
                base={false}
                color="#606C38"
                className="py-1 w-full rounded-sm text-white"
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden duration-2 ease-in-out" data-carousel-item>
          <img
            src={image5}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <div className="relative md:w-60 w-28 grid text-white lg:top-28 lg:left-56 md:top-28 md:left-32 top-20 left-20">
            <h1 className="font-medium  lg:text-[22px] md:text-[16px] text-[13px]">
              Something Text
            </h1>
            <span className="font-regular md:text-[16px] text-[13px]">
              <span className="text-[#DDA15E]">$</span>99,99
            </span>
            <div className="md:w-44 w-24 md:mt-10 mt-5">
              <Button
                color="#606C38"
                base={false}
                className="py-1 w-full rounded-sm text-white"
              >
                Buy
              </Button>
            </div>
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
            width="26"
            viewBox="0 0 16 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.25 26.5L1.75 14L14.25 1.5"
              stroke="#FEFAE0"
              strokeOpacity="0.3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
            width="26"
            viewBox="0 0 16 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75 26.5L14.25 14L1.75 1.5"
              stroke="#FEFAE0"
              strokeOpacity="0.3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
