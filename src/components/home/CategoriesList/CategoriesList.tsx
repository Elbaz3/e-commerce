import SectionHeader from "@components/shared/SectionHeader/SectionHeader";
import SlideButtons from "@components/common/SlideButtons/SlideButtons";
import CategoryCard from "@components/shared/CategoryCard/CategoryCard";

import { useRef } from "react";
import "./CategoriesList.scss";

const categories = [
  { image: "/images/phones.svg", name: "Phones" },
  { image: "/images/computers.svg", name: "Computers" },
  { image: "/images/smart-watch.svg", name: "Smart Watch" },
  { image: "/images/camera.svg", name: "Camera" },
  { image: "/images/headphone.svg", name: "Headphones" },
  { image: "/images/gaming.svg", name: "Gaming" },

  { image: "/images/phones.svg", name: "Phones" },
  { image: "/images/computers.svg", name: "Computers" },
  { image: "/images/smart-watch.svg", name: "Smart Watch" },
  { image: "/images/camera.svg", name: "Camera" },
  { image: "/images/headphone.svg", name: "Headphones" },
  { image: "/images/gaming.svg", name: "Gaming" },
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
