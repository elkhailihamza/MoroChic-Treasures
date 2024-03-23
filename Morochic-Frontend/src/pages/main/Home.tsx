import { MostRecent } from "../../components/MostRecent";
import { PopularCategories } from "../../components/PopularCategories";
import { Slider } from "../../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <MostRecent />  
      <PopularCategories /> 
    </>
  );
};

export default Home;
