import ButtonPrim from "@components/shared/ButtonPrim/ButtonPrim";
import ProductCard from "@components/shared/ProductCard/ProductCard";
import SectionHeader from "@components/shared/SectionHeader/SectionHeader";

import ProductActBtn from "@components/shared/ProductActBtn/ProductActBtn";
import useVisitProduct from "@hooks/useVisitProduct";
import { useAppSelector } from "@store/hook";

const BestSelling = () => {
  const { products } = useAppSelector((state) => state.productsSlice);
  const { itemsId } = useAppSelector((state) => state.wishSlice);

  const Content = () => {
    return (
      <>
        <div className="trend-head best-head">
          <ButtonPrim value={"View All"} to="/" />
        </div>
      </>
    );
  };

  const visit = useVisitProduct();

  return (
    <section className="trends">
      <div className="container trends__container">
        <SectionHeader
          title="This Month"
          subTitle="Best Selling Products"
          children={<Content />}
        />
        <div className="wrapper overflow-x-auto scrollbar-hide">
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
                      liked={itemsId.includes(product.id) ? true : false}
                      type="like"
                      action={visit}
                    />
                    <ProductActBtn
                      image="/images/show.svg"
                      alter="eye"
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
      </div>
    </section>
  );
};

export default BestSelling;
