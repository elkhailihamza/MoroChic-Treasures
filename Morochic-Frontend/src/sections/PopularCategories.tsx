import Button from "../components/Button";

import image1 from "../images/carousel-1.svg";
import image2 from "../images/carousel-2.svg";

export const PopularCategories = () => {
  return (
    <section className="flex flex-col justify-around items-center bg-[#283618] md:text-[16px] text-[13px]">
      <div className="text-center text-white pt-10">
        <h1 className="font-medium text-[20px]">Popular Categories</h1>
      </div>
      <div className="w-full flex justify-center mt-10">
        <div className="flex flex-col gap-10 w-3/5 border-opacity-50 text-white">
          <a className="p-3 hover:bg-gray-700/15 rounded" href="">
            <div className="flex md:flex-row flex-col justify-between gap-10">
              <div className="md:w-[300px] w-full h-[110px]">
                <img
                  className="w-full h-full object-cover"
                  src={image1}
                  alt=""
                />
              </div>
              <div className="grid w-full">
                <h1 className="lg:text-[22px] text-[16px]">Category 1</h1>
                <p className="text-[#969696]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  libero voluptatem porro amet aspernatur.
                </p>
              </div>
            </div>
          </a>
          <hr className="bg-gray-700" />
          <a className="p-3 hover:bg-gray-700/15 rounded" href="">
            <div className="flex md:flex-row flex-col justify-between gap-10">
              <div className="md:w-[300px] w-full h-[110px]">
                <img
                  className="w-full h-full object-cover"
                  src={image2}
                  alt=""
                />
              </div>
              <div className="grid w-full">
                <h1 className="lg:text-[22px] text-[16px]">Category 2</h1>
                <p className="text-[#969696]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  libero voluptatem porro amet aspernatur.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="my-10 w-48">
        <Button className="w-full text-white px-4 py-3">View more</Button>
      </div>
    </section>
  );
};
