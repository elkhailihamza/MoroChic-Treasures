import Button from "../../components/Button";
import image from "../../images/main/about/camera_man.png";

export const JoinSection = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center text-center w-4/5">
        <h1 className="md:text-2xl text-xl font-medium">Join the Journey</h1>
        <p className="mt-10 lg:text-base text-sm">
          Discover the allure of Moroccan traditional clothing with MoroChic.
          Thank you for being a part of our journey, sharing the magic, beauty,
          and timeless traditions woven into every garment.
        </p>
        <div>
          <Button color="#283618" className="mt-10 rounded-none p-10">
            Discover
          </Button>
        </div>
      </div>
      <div className="md:block hidden">
        <img src={image} className="w-80 object-contain" alt="" />
      </div>
    </div>
  );
};
