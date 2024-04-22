import { ItemCard } from "../../components/ItemCard";

export const FeaturedSection = () => {
  return (
    <>
      <div className="mt-16 lg:px-20">
        <h1 className="text-2xl">Featured</h1>
        <div className="flex flex-wrap gap-2 mt-3">
          <ItemCard base={false} className="w-full h-96 bg-gray-300"></ItemCard>
          <div className="carousel flex w-full gap-4">
            <div className="w-32 h-20">
              <ItemCard
                base={false}
                className="bg-gray-300 carousel-item"
              ></ItemCard>
            </div>
            <div className="w-32 h-20">
              <ItemCard
                base={false}
                className="bg-gray-300 carousel-item"
              ></ItemCard>
            </div>
            <div className="w-32 h-20">
              <ItemCard
                base={false}
                className="bg-gray-300 carousel-item"
              ></ItemCard>
            </div>
            <div className="w-32 h-20">
              <ItemCard
                base={false}
                className="bg-gray-300 carousel-item"
              ></ItemCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
