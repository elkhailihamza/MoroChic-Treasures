import { Divider } from "../../components/Divider";
import { CraftsmanshipTraditionSection } from "../../sections/Main/about/CraftsmanshipTraditionSection";
import { HeaderSection } from "../../sections/Main/about/HeaderSection";
import { JoinSection } from "../../sections/Main/about/JoinSection";
import { OurMissionSection } from "../../sections/Main/about/OurMissionSection";
import { OurStorySection } from "../../sections/Main/about/OurStorySection";
import { WhoWeAreSection } from "../../sections/Main/about/WhoWeAreSection";

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
