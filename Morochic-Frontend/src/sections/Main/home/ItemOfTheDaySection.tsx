import image1 from "../../../images/carousel-1.svg";
import Button from "../../../components/Button";

export const ItemOfTheDay = () => {
  return (
    <section className="bg-[#283618] text-white border-t-4 border-y-2 border-black">
      <div className="w-full text-center md:p-10 p-5">
        <h1 className="doppio-one-regular md:text-[30px] text-[20px]">
          Item of the day
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-4/5 flex lg:justify-between justify-center align-center items-center flex-wrap-reverse gap-5">
          <div className="lg:w-3/5 w-full">
            <div className="lg:ms-10">
              <div className="mb-5">
                <h1 className="doppio-one-regular md:text-[28px] text-[16px]">
                  Item_Name_Here
                </h1>
                <h2 className="doppio-one-regular text-[#BC6C25]">$99,99</h2>
              </div>
              <p className="mb-10 leading-relaxed tracking-wide md:text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                debitis accusamus culpa aut cumque cupiditate harum sunt
                dignissimos molestias voluptate doloremque alias, temporibus
                aliquid nam repellendus.
              </p>
              <div className="flex md:justify-center gap-5 mb-4">
                <Button>Checkout</Button>
                <Button color="#606C38">View more like it</Button>
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <img className="mx-auto object-cover rounded-lg" src={image1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
