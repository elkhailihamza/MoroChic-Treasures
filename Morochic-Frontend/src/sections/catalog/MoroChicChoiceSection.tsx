import { ItemCard } from "../../components/ItemCard";

export const MoroChicChoiceSection = () => {
  return (
    <>
      <div className="mt-16 lg:px-20">
        <h1 className="text-2xl">MoroChic Choice</h1>
        <div className="flex justify-between flex-wrap sm:gap-5 gap-3 mt-3">
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
        </div>
      </div>
    </>
  );
};
