import { ItemCard } from "../../components/ItemCard";

export const ForYouSection = () => {
  return (
    <>
      <div className="mt-16 lg:px-40 md:px-5">
        <h1 className="text-2xl">For You</h1>
        <div className="flex sm:justify-between justify-center gap-7 flex-wrap mt-3">
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
        </div>
      </div>
    </>
  );
};
