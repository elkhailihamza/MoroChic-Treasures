import image from "../../images/main/about/phone-man.jpg";

export const OurMissionSection = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="md:block hidden">
        <img className="object-contain w-80 rounded-lg" src={image} alt="man-on-the-phone" />
      </div>
      <div className="flex flex-col justify-center items-center md:w-3/6 w-full">
        <h2 className="lg:text-2xl text-xl font-medium underline">
          Our Mission:
        </h2>
        <p className="mt-4 md:text-base text-sm">
          More than a store, MoroChic celebrates and preserves Moroccan cultural
          identity through fashion, with each purchase contributing to this
          beautiful heritage.
        </p>
      </div>
    </div>
  );
};
