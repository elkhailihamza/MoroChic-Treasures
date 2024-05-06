import { Slider } from "../../sections/Main/home/SliderSection";
import { AboutUs } from "../../sections/Main/home/AboutSection";
import { ItemOfTheDay } from "../../sections/Main/home/ItemOfTheDaySection";
import { MostRecent } from "../../sections/Main/home/MostRecentSection";
import { PopularCategories } from "../../sections/Main/home/PopularCategoriesSection";

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
