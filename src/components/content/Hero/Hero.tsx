import { Menu } from "antd";

import "./Hero.scss";
import { useLocation, useNavigate } from "react-router-dom";
import CategoryFilter from "@components/common/CategoryFilter/CategoryFilter";
import HeroSlider from "@components/common/HeroSlider/HeroSlider";

const categories = [
  { label: "Woman’s Fashion", key: "women" },
  { label: "Men’s Fashion", key: "men" },
  { label: "Electronics", key: "electronics" },
  { label: "Home & Lifestyle", key: "home" },
  { label: "Medicine", key: "medicine" },
  { label: "Sports & Outdoor", key: "sports" },
  { label: "Baby’s & Toys", key: "baby" },
  { label: "Groceries & Pets", key: "groceries" },
  { label: "Health & Beauty", key: "beauty" },
];

const Hero = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentKey = pathname.split("/").pop();

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
