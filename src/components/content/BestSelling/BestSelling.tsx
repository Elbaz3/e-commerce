import ButtonPrim from "@components/common/ButtonPrim/ButtonPrim";
import ProductCard from "@components/common/ProductCard/ProductCard";
import SectionHeader from "@components/common/SectionHeader/SectionHeader";
import wish from "@assets/heart.svg?w=64&format=webp&quality=90";
import show from "@assets/show.svg?w=64&format=webp&quality=90";
import ProductActBtn from "@components/common/ProductActBtn/ProductActBtn";
import useVisitProduct from "@hooks/useVisitProduct";
import { bestProducts } from "@util/MocupData";

const products = bestProducts;

const BestSelling = () => {
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
      </div>
    </section>
  );
};

export default BestSelling;
