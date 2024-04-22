import { ItemCard } from "../../components/ItemCard";

export const MoreFromUsSection = () => {
  return (
    <>
      <div className="mt-16 lg:px-20">
        <h1 className="text-2xl">More From us</h1>
        <div className="grid gap-4 mt-2">
          <ItemCard className="p-5 rounded-sm" base={false}></ItemCard>
          <ItemCard className="p-5 rounded-sm" base={false}></ItemCard>
          <ItemCard className="p-5 rounded-sm" base={false}></ItemCard>
          <ItemCard className="p-5 rounded-sm" base={false}></ItemCard>

          <div className="mx-auto mt-5">
            <h1 className="text-blue-600 hover:text-blue-700 w-full hover:underline cursor-pointer">View More</h1>
          </div>
        </div>
      </div>
    </>
  );
};
