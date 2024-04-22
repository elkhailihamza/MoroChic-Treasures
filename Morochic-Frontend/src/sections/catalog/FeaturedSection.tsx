import { FullSizeItemCard } from "../../components/FullSizeItemCard";
import { MiniItemCard } from "../../components/MiniItemCard";

export const FeaturedSection = () => {
  return (
    <>
      <div className="mt-16 lg:px-20">
        <h1 className="text-2xl">Featured</h1>
        <div className="flex flex-wrap gap-2 mt-3">
          <FullSizeItemCard></FullSizeItemCard>
          <div className="carousel flex gap-4">
            <MiniItemCard className="carousel-item"></MiniItemCard>
            <MiniItemCard className="carousel-item"></MiniItemCard>
            <MiniItemCard className="carousel-item"></MiniItemCard>
            <MiniItemCard className="carousel-item"></MiniItemCard>
          </div>
        </div>
      </div>
    </>
  );
};
