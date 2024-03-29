import image from "../../images/main/about/phone-man.jpg";

export const OurMissionSection = () => {
  return (
    <section>
      <div className="flex justify-center">
        <div className="flex justify-evenly items-center gap-10 py-20 px-10">
          <div className="w-[300px] md:block hidden">
            <img className="object-contain rounded-[8px]" src={image} alt="" />
          </div>
          <div className="flex flex-col justify-center text-center items-center gap-5 md:w-1/2 w-full">
            <h1 className="font-medium text-[26px]">Our Mission</h1>
            <p>
              More than a store, MoroChic celebrates and preserves Moroccan
              cultural identity through fashion, with each purchase contributing
              to this beautiful heritage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
