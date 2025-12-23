import ButtonPrim from "@components/shared/ButtonPrim/ButtonPrim";

import ProductCard from "@components/shared/ProductCard/ProductCard";
import SectionHeader from "@components/shared/SectionHeader/SectionHeader";
import ProductActBtn from "@components/shared/ProductActBtn/ProductActBtn";
import "./WishList.scss";
import useVisitProduct from "@hooks/useVisitProduct";
import { useAppSelector } from "@store/hook";

const productsF = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    oldPrice: 160,
    newPrice: 120,
    discount: 0,
    reviews: 88,
    stars: 5,
    image: "/images/p-1.png",
    newP: true,
  },
  {
    id: 2,
    title: "RGB Mechanical Keyboard",
    oldPrice: 220,
    newPrice: 165,
    discount: -25,
    reviews: 134,
    stars: 4,
    image: "/images/p-2.png",
    newP: false,
  },
  {
    id: 3,
    title: "Wireless Gaming Mouse",
    oldPrice: 90,
    newPrice: 59,
    discount: -35,
    reviews: 212,
    stars: 5,
    image: "/images/p-3.png",
    newP: false,
  },
  {
    id: 4,
    title: "27-inch Gaming Monitor",
    oldPrice: 400,
    newPrice: 310,
    discount: 0,
    reviews: 76,
    stars: 4,
    image: "/images/p-4.png",
    newP: true,
  },
];

const WishListC = () => {
  const visit = useVisitProduct();
  const { itemsId, productsFullInfo } = useAppSelector(
    (state) => state.wishSlice
  );

  const products = productsFullInfo.filter((product) =>
    itemsId.includes(product.id)
  );

  return (
    <div className="wishlist">
      <div className="container wishlist__container">
        <div className="wishlist__products">
          <div className="wishlist__products__header">
            <div className="list-quantity">wishlist ({products.length})</div>
            <ButtonPrim to="/" value="Move All To Bag" />
          </div>
          <div className="wishlist__products__body">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.newPrice ? product.newPrice : 0}
                discount={product.discount}
                image={product.image}
                actElement={
                  <ProductActBtn
                    image="/images/delete.svg"
                    alter="like"
                    id={product.id}
                    action={visit}
                    type="delete"
                  />
                }
              />
            ))}
          </div>
        </div>
        <div className="wishlist__products">
          <SectionHeader
            title="Just For You"
            children={<ButtonPrim to="/" value="See All" />}
          />
          <div className="wishlist__products__body">
            {productsF.map((product) => (
              <ProductCard
                id={product.id}
                key={product.id}
                title={product.title}
                price={product.newPrice}
                newP={product.newP ? true : false}
                discount={product.discount ? product.discount : 0}
                image={product.image}
                actElement={
                  <ProductActBtn
                    image="/images/show.svg"
                    id={product.id}
                    action={visit}
                    alter="show"
                    type="visit"
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListC;
