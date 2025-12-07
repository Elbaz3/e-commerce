import { Carousel } from "antd";
import iphone from "@assets/iphone.png";
import apple from "@assets/apple.png";
import arrow from "@assets/slider-icon.svg";
import "./HeroSlider.scss";

const heroSlides = [
  {
    id: 1,
    brand: "Apple",
    subtitle: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    image: iphone,
  },
  {
    id: 2,
    brand: "Samsung",
    subtitle: "Galaxy S23",
    title: "Up to 15% off Voucher",
    image: iphone,
  },
  {
    id: 3,
    brand: "Sony",
    subtitle: "PlayStation 5",
    title: "Limited Offer",
    image: iphone,
  },
];

const HeroSlider = () => {
  return (
    <Carousel autoplay dots className="slider ">
      {heroSlides.map((slide) => (
        <div key={slide.id}>
          <div className=" slider__content ">
            {/* LEFT CONTENT */}
            <div className="slider__text">
              <div className="slider__text__brand">
                <img src={apple} width={40} alt={slide.brand} />
                <span className="brand-names">{slide.subtitle}</span>
              </div>

              <h1 className="slider__text__title">{slide.title}</h1>

              <button className="slider__text__btn">
                <span>Shop Now</span> <img src={arrow} alt="arrow" />
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <img
              src={slide.image}
              alt={slide.subtitle}
              className="slider__image"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSlider;
