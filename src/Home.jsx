import Card from "./components/Card";
import FirstText from "./components/FirstText";
import Newsletter from "./components/Newsletter";
import SecondText from "./components/SecondText";
import SectionTitle from "./components/SectionTitle";

const Home = () => {

const TitleOne = (
  <span>
    Sustainable <br /> Example Website
  </span>
);
const TitleTwo = (
  <span>
    Learn More About <br /> Web Sustainability
  </span>
);

  return (
    <div className='max-w-2xl mx-auto'>
      <FirstText />
      <SectionTitle title={TitleOne} />
      <Card/>
      <SecondText/>
      <SectionTitle title={TitleTwo} />
      <Newsletter/>
    </div>
  );
}
export default Home