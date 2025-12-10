import SectionHeader from "@components/common/SectionHeader/SectionHeader";
import SlideButtons from "@components/common/SlideButtons/SlideButtons";
import CategoryCard from "@components/common/CategoryCard/CategoryCard";
import phones from "@assets/phones.svg";
import computers from "@assets/computers.svg";
import smartWatch from "@assets/smart-watch.svg";
import camera from "@assets/camera.svg";
import headPhone from "@assets/headphone.svg";
import gaming from "@assets/gaming.svg";
import { useRef } from "react";
import "./CategoriesList.scss";

const categories = [
  { image: phones, name: "Phones" },
  { image: computers, name: "Computers" },
  { image: smartWatch, name: "Smart Watch" },
  { image: camera, name: "Camera" },
  { image: headPhone, name: "Headphones" },
  { image: gaming, name: "Gaming" },

  { image: phones, name: "Phones" },
  { image: computers, name: "Computers" },
  { image: smartWatch, name: "Smart Watch" },
  { image: camera, name: "Camera" },
  { image: headPhone, name: "Headphones" },
  { image: gaming, name: "Gaming" },
];

const CategoriesList = () => {
  const CatRef = useRef(null);
  return (
    <section className="categories-list">
      <div className="container">
        <div className="categories-list__header">
          <SectionHeader title="Categories" subTitle="Browse By Category" />
          <SlideButtons sliderRef={CatRef} />
        </div>
        <div ref={CatRef} className="wrapper overflow-x-auto scrollbar-hide">
          <div className=" categories-list__content  ">
            {categories.map((category, i) => (
              <CategoryCard
                key={i}
                image={category.image}
                name={category.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesList;
