import ProductActBtn from "@components/common/ProductActBtn/ProductActBtn";
import ProductCard from "@components/common/ProductCard/ProductCard";
import SectionHeader from "@components/common/SectionHeader/SectionHeader";
import useVisitProduct from "@hooks/useVisitProduct";

import ProductAction from "@components/common/ProductAction/ProductAction";
import "./Product.scss";
import SmallNav from "@components/common/SmallNav/SmallNav";
import { useAppSelector } from "@store/hook";

const product = {
  title: "",
  image: "/images/product.png",
  smallImg: [
    "/images/product-img-1.png",
    "/images/product-img-2.png",
    "/images/product-img-3.png",
    "/images/product-img-4.png",
  ],
};

const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    oldPrice: 160,
    newPrice: 120,
    discount: -40,
    reviews: 88,
    stars: 5,
    image: "/images/p-1.png",
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
  },
  {
    id: 4,
    title: "27-inch Gaming Monitor",
    oldPrice: 400,
    newPrice: 310,
    discount: -23,
    reviews: 76,
    stars: 4,
    image: "/images/p-4.png",
  },
];

const ProductC = () => {

    const { itemsId } = useAppSelector((state) => state.wishSlice);
  
  const visit = useVisitProduct();
  return (
    <div className="product-p">
      <div className="container">
        <SmallNav items={["Account", "Gaming", "Havic HV G-92 Gamepad"]} />
      </div>
      <div className="container product-p__container">
        <div className="product-p__overview ">
          <div className="product-p__overview__images">
            <div className="small-images">
              {product.smallImg.map((img, i) => (
                <div key={i} className="image-s">
                  <img src={img} alt="product" width={112} height={97} />
                </div>
              ))}
            </div>
            <div className="big-image">
              <img src={product.image} alt="" />
            </div>
          </div>

          <ProductAction />
        </div>
        <div className="more-products">
          <SectionHeader title="Related Items" />
          <div className="trends__products">
            {products.map((product) => (
              <ProductCard
                id={product.id}
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
                      image="/images/heart.svg"
                      alter="heart"
                      id={product.id}
                      action={visit}
                      liked={itemsId.includes(product.id) ? true : false}
                      type="like"
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
    </div>
  );
};

export default ProductC;
