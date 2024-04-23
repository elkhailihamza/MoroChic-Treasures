import { ItemRatingSVG } from "../../../components/ItemRatingSVG";
import { RightPointingArrowSVG } from "../../../components/RightPointingArrowSVG";
import { ItemCard } from "../../../components/ItemCard";

export const TopSection = () => {
  return (
    <div className="flex flex-wrap justify-around gap-10 px-7">
        <div className="grid grid-cols-1 w-96 gap-5">
          <div className="px-16 w-full h-80 justify-self-center">
            <ItemCard className="rounded-[16px]" base={false} />
          </div>
          <div className="flex justify-between">
            <div className="flex carousel gap-4 h-20">
              <ItemCard
                className="carousel-item w-20 rounded-[16px]"
                base={false}
              ></ItemCard>
              <ItemCard
                className="carousel-item w-20 rounded-[16px]"
                base={false}
              ></ItemCard>
              <ItemCard
                className="carousel-item w-20 rounded-2xl"
                base={false}
              ></ItemCard>
              <ItemCard
                className="carousel-item w-20 rounded-2xl"
                base={false}
              ></ItemCard>
              <ItemCard
                className="carousel-item w-20 rounded-2xl"
                base={false}
              ></ItemCard>
              <ItemCard
                className="carousel-item w-20 rounded-2xl"
                base={false}
              ></ItemCard>
            </div>
            <RightPointingArrowSVG
              className="border-s-0 h-full cursor-pointer hover:bg-slate-200 rounded-bl-none rounded-tl-none rounded-lg"
              width={"75"}
              opacity="1"
            />
          </div>
        </div>
        <div className="md:w-96 w-[80%] mt-2">
          <h1 className="text-center font-semibold text-2xl">Item</h1>
          <div className="flex justify-between items-center mt-4 px-2">
            <h1 className="text-xl">
              <span className="text-[#BC6C25]">$</span>19.99
            </h1>
            <ItemRatingSVG />
          </div>
          <div className="mt-7">
            <p>
              Elevate your style with our enchanting traditional dress. Immerse
              yourself in Moroccan allure as you adorn this timeless piece,
              meticulously crafted to celebrate the rich cultural heritage of
              the region.
            </p>
            <br />
            <p>
              Embrace elegance and tradition in every stitch. Dress up and
              captivate with the essence of Morocco.
            </p>
          </div>
        </div>
      </div>
  )
}
