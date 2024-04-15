import { Slider } from "../../sections/home/SliderSection";
import { AboutUs } from "../../sections/home/AboutSection";
import { ItemOfTheDay } from "../../sections/home/ItemOfTheDaySection";
import { MostRecent } from "../../sections/home/MostRecentSection";
import { PopularCategories } from "../../sections/home/PopularCategoriesSection";

const Home = () => {
  return (
    <>
      <Slider />
      <MostRecent />
      <PopularCategories />
      <AboutUs />
      <ItemOfTheDay />
    </>
  );
};

export default Home;
