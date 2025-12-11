import SectionHeader from "@components/common/SectionHeader/SectionHeader";
import ButtonPrim from "@components/common/ButtonPrim/ButtonPrim";
import ProductCard from "@components/common/ProductCard/ProductCard";
import wish from "@assets/heart.svg?w=64&format=webp&quality=90";
import show from "@assets/show.svg?w=64&format=webp&quality=90";
import "./OurProducts.scss";
import ProductActBtn from "@components/common/ProductActBtn/ProductActBtn";
import useVisitProduct from "@hooks/useVisitProduct";
import { useAppSelector } from "@store/hook";

const OurProducts = () => {
  const { products } = useAppSelector((state) => state.productsSlice);
  const { itemsId } = useAppSelector((state) => state.wishSlice);

  const visit = useVisitProduct();

  return (
    <section className="our-products ">
      <div className="container ">
        <SectionHeader title="Our Products" subTitle="Explore Our Products" />
        <div className="products ">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
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
                    liked={itemsId.includes(product.id) ? true : false}
                    type="like"
                  />
                  <ProductActBtn
                    image={show}
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
        <div className="button-wrapper w-full flex justify-center">
          <ButtonPrim value="View All Products" to="/" />
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
