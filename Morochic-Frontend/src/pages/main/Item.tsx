import { Divider } from "../../components/Divider";
import { CustomerReviewsSection } from "../../sections/Main/item/CustomerReviewsSection";
import { DescriptionSection } from "../../sections/Main/item/DescriptionSection";
import { ReviewSection } from "../../sections/Main/item/ReviewSection";
import { TopSection } from "../../sections/Main/item/TopSection";

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
