import SectionHeader from "@components/shared/SectionHeader/SectionHeader";
import "./Trends.scss";
import CountDown from "@components/common/CountDown/CountDown";
import ProductCard from "@components/shared/ProductCard/ProductCard";

import { useEffect, useRef, useState } from "react";
import ButtonPrim from "@components/shared/ButtonPrim/ButtonPrim";
import SlideButtons from "@components/common/SlideButtons/SlideButtons";
import ProductActBtn from "@components/shared/ProductActBtn/ProductActBtn";
import useVisitProduct from "@hooks/useVisitProduct";
import { useAppSelector } from "@store/hook";

const headerTitiles = {
  en: { title: "Today's", subTitle: "Flash Sales" },
  ar: { title: "عروض", subTitle: "اليوم" },
};

const Trends = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const { products } = useAppSelector((state) => state.productsSlice);
  const { itemsId } = useAppSelector((state) => state.wishSlice);
  const lang = useAppSelector((state) => state.langSlice.lang);

  useEffect(() => {
    console.log(lang);
  }, [lang]);

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
          title={headerTitiles[lang as keyof typeof headerTitiles].title}
          subTitle={headerTitiles[lang as keyof typeof headerTitiles].subTitle}
          children={<Content />}
        />
        <div ref={sliderRef} className="wrapper overflow-x-auto scrollbar-hide">
          <div className="trends__products">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                oldPrice={product.oldPrice}
                price={product.newPrice ? product.newPrice : 0}
                discount={product.discount}
                reviews={product.reviews}
                stars={product.stars}
                image={product.image}
                actElement={
                  <>
                    <ProductActBtn
                      image="/images/heart.svg"
                      alter="heart"
                      id={product.id}
                      action={visit}
                      liked={itemsId.includes(product.id) ? true : false}
                      type="like"
                    />
                    <ProductActBtn
                      image="/images/show.svg"
                      alter="show"
                      id={product.id}
                      action={visit}
                      type="visit"
                    />
                  </>
                }
              />
            ))}
          </div>
        </div>
        <div className="wrapper-btn ">
          <ButtonPrim to="/" value={"View All Products"} />
        </div>
      </div>
    </section>
  );
};

export default Trends;
