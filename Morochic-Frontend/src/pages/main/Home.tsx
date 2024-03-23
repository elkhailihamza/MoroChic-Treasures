import { AboutUs } from "../../components/AboutUs";
import { ItemOfTheDay } from "../../components/ItemOfTheDay";
import { MostRecent } from "../../components/MostRecent";
import { PopularCategories } from "../../components/PopularCategories";
import { Slider } from "../../components/Slider";

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
