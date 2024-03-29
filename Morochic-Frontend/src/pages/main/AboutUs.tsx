import { CraftsmanshipTraditionSection } from "../../sections/about/CraftsmanshipTraditionSection"
import { OurMissionSection } from "../../sections/about/OurMissionSection"
import { OurStorySection } from "../../sections/about/OurStorySection"
import { WhoWeAreSection } from "../../sections/about/WhoWeAreSection"

export const AboutUs = () => {
  return (
    <>
      <WhoWeAreSection />
      <OurStorySection />
      <CraftsmanshipTraditionSection />
      <OurMissionSection />
    </>
  )
}
