import ButtonPrim from "@components/common/ButtonPrim/ButtonPrim";
import img1 from "@assets/p-1.png?w=800&format=webp&quality=80";
import img2 from "@assets/p-2.png?w=800&format=webp&quality=80";
import img3 from "@assets/p-3.png?w=800&format=webp&quality=80";
import img4 from "@assets/p-4.png?w=800&format=webp&quality=80";
import show from "@assets/show.svg?w=64&format=webp&quality=90";
import deleteP from "@assets/delete.svg?w=64&format=webp&quality=90";
import ProductCard from "@components/common/ProductCard/ProductCard";
import SectionHeader from "@components/common/SectionHeader/SectionHeader";
import ProductActBtn from "@components/common/ProductActBtn/ProductActBtn";
import "./WishList.scss";
import useVisitProduct from "@hooks/useVisitProduct";

const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    oldPrice: 160,
    newPrice: 120,
    discount: 0,
    reviews: 88,
    stars: 5,
    image: img1,
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
    image: img2,
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
    image: img3,
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
    image: img4,
    newP: true,
  },
];

const WishListC = () => {
  const visit = useVisitProduct();

  function deleteFromWish(id: number) {}

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
                title={product.title}
                price={product.newPrice}
                discount={product.discount}
                image={product.image}
                actElement={
                  <ProductActBtn
                    image={deleteP}
                    alter="basket"
                    id={product.id}
                    action={deleteFromWish}
                  />
                }
              />
            ))}
          </div>
        </div>
        <div className="wishlist__products">
          <SectionHeader
            title="Just For You"
            children={<ButtonPrim value="See All" />}
          />
          <div className="wishlist__products__body">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.newPrice}
                newP={product.newP ? true : false}
                discount={product.discount ? product.discount : 0}
                image={product.image}
                actElement={
                  <ProductActBtn
                    image={show}
                    id={product.id}
                    action={visit}
                    alter="show"
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
