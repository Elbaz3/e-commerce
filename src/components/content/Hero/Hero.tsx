import CategoryFilter from "@components/common/CategoryFilter/CategoryFilter";
import HeroSlider from "@components/common/HeroSlider/HeroSlider";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero__container">
        <div className="hero__filter">
          <CategoryFilter />
        </div>
        <div className="hero__slider ">
          <HeroSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
