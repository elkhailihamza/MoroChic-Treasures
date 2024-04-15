import { Divider } from "../../components/Divider";
import { CraftsmanshipTraditionSection } from "../../sections/about/CraftsmanshipTraditionSection";
import { HeaderSection } from "../../sections/about/HeaderSection";
import { JoinSection } from "../../sections/about/JoinSection";
import { OurMissionSection } from "../../sections/about/OurMissionSection";
import { OurStorySection } from "../../sections/about/OurStorySection";
import { WhoWeAreSection } from "../../sections/about/WhoWeAreSection";

export const AboutUs = () => {
  return (
    <>
      <div className="pt-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <HeaderSection />
          <WhoWeAreSection />
          <Divider divide={true} />
          <OurStorySection />
          <Divider />
          <CraftsmanshipTraditionSection />
          <Divider />
          <OurMissionSection />
          <Divider divide={true} />
          <JoinSection />
        </div>
      </div>
    </>
  );
};
