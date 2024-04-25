import { useParams } from "react-router-dom";
import { Divider } from "../../components/Divider";
import { CustomerReviewsSection } from "../../sections/Main/item/CustomerReviewsSection";
import { DescriptionSection } from "../../sections/Main/item/DescriptionSection";
import { ReviewSection } from "../../sections/Main/item/ReviewSection";
import { TopSection } from "../../sections/Main/item/TopSection";
import { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import { useProduct } from "../../contexts/ProductContext";

export const Item = () => {
  const { id } = useParams();
  const { fetchInfo, isProductLoading } = useProduct();

  useEffect(() => {
    const fetch = async () => {
      await fetchInfo(Number(id));
    };

    fetch;
  });

  return isProductLoading ? (
    <div className="h-screen w-full flex flex-col justify-center items-center select-none">
      <SpinnerCircular color="#000000" />
      <h1 className="text-slate-800">Fetching Product...</h1>
    </div>
  ) : (
    <div className="md:px-20 px-7 py-20">
      <TopSection />
      <Divider className="mx-auto mt-7" />
      <DescriptionSection />
      <Divider className="mx-auto mt-7" />
      <CustomerReviewsSection />
      <Divider className="mx-auto mt-7" />
      <ReviewSection />
    </div>
  );
};
