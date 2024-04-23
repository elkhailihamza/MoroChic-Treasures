import { CategorySection } from "../../sections/Main/catalog/CategorySection";
import { FeaturedSection } from "../../sections/Main/catalog/FeaturedSection";
import { MoroChicChoiceSection } from "../../sections/Main/catalog/MoroChicChoiceSection";
import { MoreFromUsSection } from "../../sections/Main/catalog/MoreFromUsSection";
import { ForYouSection } from "../../sections/Main/catalog/ForYouSection";

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
