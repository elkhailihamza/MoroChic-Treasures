import { CategorySection } from "../../sections/catalog/CategorySection";
import { FeaturedSection } from "../../sections/catalog/FeaturedSection";
import { MoroChicChoiceSection } from "../../sections/catalog/MoroChicChoiceSection";
import { MoreFromUsSection } from "../../sections/catalog/MoreFromUsSection";
import { ForYouSection } from "../../sections/catalog/ForYouSection";

export const Catalog = () => {
  return (
    <div className="mb-12 lg:px-28 md:px-12 px-5">
      <CategorySection />
      <ForYouSection />
      <FeaturedSection />
      <MoroChicChoiceSection />
      <MoreFromUsSection />
    </div>
  );
};
