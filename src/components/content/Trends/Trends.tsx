import SectionHeader from "@components/common/SectionHeader/SectionHeader";
import "./Trends.scss";
import CountDown from "@components/common/CountDown/CountDown";
import ProductCard from "@components/common/ProductCard/ProductCard";
import wish from "@assets/heart.svg?w=64&format=webp&quality=90";
import show from "@assets/show.svg?w=64&format=webp&quality=90";

import { useRef } from "react";
import ButtonPrim from "@components/common/ButtonPrim/ButtonPrim";
import SlideButtons from "@components/common/SlideButtons/SlideButtons";
import ProductActBtn from "@components/common/ProductActBtn/ProductActBtn";
import useVisitProduct from "@hooks/useVisitProduct";
import { bestProducts } from "@util/MocupData";

const products = bestProducts;
const Trends = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const Content = () => {
    return (
      <>
        <div className="trend-head">
          <CountDown days={5} />
          <SlideButtons sliderRef={sliderRef} />
        </div>
      </>
    );
  };

  const visit = useVisitProduct();
  return (
    <section className="trends">
      <div className="container trends__container">
        <SectionHeader
          title="Today's"
          subTitle="Flash Sales"
          children={<Content />}
        />
        <div ref={sliderRef} className="wrapper overflow-x-auto scrollbar-hide">
          <div className="trends__products">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                oldPrice={product.oldPrice}
                price={product.newPrice}
                discount={product.discount}
                reviews={product.reviews}
                stars={product.stars}
                image={product.image}
                actElement={
                  <>
                    <ProductActBtn
                      image={wish}
                      alter="heart"
                      id={product.id}
                      action={visit}
                    />
                    <ProductActBtn
                      image={show}
                      alter="eye"
                      id={product.id}
                      action={visit}
                    />
                  </>
                }
              />
            ))}
          </div>
        </div>
        <div className="wrapper-btn ">
          <ButtonPrim value={"View All Products"} />
        </div>
      </div>
    </section>
  );
};

export default Trends;
