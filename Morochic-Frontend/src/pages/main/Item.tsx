import { Divider } from "../../components/Divider";
import { CustomerReviewsSection } from "../../sections/item/CustomerReviewsSection";
import { DescriptionSection } from "../../sections/item/DescriptionSection";
import { ReviewSection } from "../../sections/item/ReviewSection";
import { TopSection } from "../../sections/item/TopSection";

export const Item = () => {
  return (
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
