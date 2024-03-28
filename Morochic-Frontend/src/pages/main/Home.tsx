import { AboutUs } from "../../sections/AboutSection";
import { ItemOfTheDay } from "../../sections/ItemOfTheDaySection";
import { MostRecent } from "../../sections/MostRecentSection";
import { PopularCategories } from "../../sections/PopularCategoriesSection";
import { Slider } from "../../sections/SliderSection";

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
