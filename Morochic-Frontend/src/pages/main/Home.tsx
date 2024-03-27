import { AboutUs } from "../../sections/AboutUs";
import { ItemOfTheDay } from "../../sections/ItemOfTheDay";
import { MostRecent } from "../../sections/MostRecent";
import { PopularCategories } from "../../sections/PopularCategories";
import { Slider } from "../../sections/Slider";

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
