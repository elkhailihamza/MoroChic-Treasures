import { ItemRatingSVG } from "../../../components/ItemRatingSVG";
import { RightPointingArrowSVG } from "../../../components/RightPointingArrowSVG";
import { ItemCard } from "../../../components/ItemCard";
import { useProduct } from "../../../contexts/ProductContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const TopSection = () => {
  const { selectedProduct } = useProduct();
  return (
    <div className="flex flex-wrap justify-around gap-10 px-7">
      <div className="grid grid-cols-1 w-96 gap-5">
        <div className="px-16 w-full h-80 justify-self-center">
          <ItemCard className="rounded-[16px]" base={false} />
        </div>
        <div className="flex justify-between">
          <div className="flex carousel gap-4 h-20">
            {selectedProduct && Object.keys(selectedProduct).length > 0 ? (
              <>
                {/* {selectedProduct.} */}
              </>
            ) : (
              <></>
            )}
          </div>
          <RightPointingArrowSVG
            className="border-s-0 h-full cursor-pointer hover:bg-slate-200 rounded-bl-none rounded-tl-none rounded-lg"
            width={"75"}
            opacity="1"
          />
        </div>
      </div>
      <div className="md:w-96 w-[80%] mt-2">
        <h1 className="text-center font-semibold text-2xl">{selectedProduct?.title}</h1>
        <div className="flex justify-between items-center mt-4 px-2">
          <h1 className="text-xl">
            <span className="text-[#BC6C25]">$</span>{selectedProduct?.stock}
          </h1>
          <ItemRatingSVG />
        </div>
        <div className="mt-7">
          <p>{selectedProduct?.["mini-body"]}</p>
        </div>
      </div>
    </div>
  );
};
