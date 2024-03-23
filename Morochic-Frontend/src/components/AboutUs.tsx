import Button from "./Button";

import image1 from "../images/carousel-1.svg";

export const AboutUs = () => {
  return (
    <section className="bg-[FEFAE0] flex flex-col justify-center align-center">
      <div className="text-center">
        <h1 className="style-script-regular text-[#606C38] text-[46px] translate-y-4">
          about us
        </h1>
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        <div className="h-[400px] w-[400px] mt-10 lg:block hidden">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={image1}
            alt=""
          />
        </div>
        <div className="lg:w-2/5 w-4/5 mt-5">
          <div className="flex flex-col justify-between lg:ms-6 h-full">
            <div className="md:text-[30px] text-[20px] font-medium">
              <p className="doppio-one-regular">Descover our legacy of</p>
              <p className="doppio-one-regular text-[#606C38] ms-7 -translate-y-3">
                Craftsmanship and style
              </p>
            </div>
            <div className="h-full w-full mb-4">
              <p className="mt-3 md:mb-7">
                Step into the rich tapestry of tradition with MoroChic, where
                every garment is a testament to the beauty of cultural heritage.
              </p>
              <p className="md:block hidden">
                Our curated selection of traditional clothing captures the
                essence of craftsmanship, offering a mesmerizing journey through
                centuries-old techniques and artistic expression.
              </p>
            </div>
            <div className="flex flex-col items-center lg:text-center gap-5 h-full mt-5 mb-10">
              <p className="font-medium">
                Click here to uncover the stories behind our brand and the
                artisans who bring our vision to life.
              </p>
              <Button className="text-white md:px-5 md:py-4 px-3 py-2">
                Know more about us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
