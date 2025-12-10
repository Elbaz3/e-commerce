import ProductActBtn from "@components/common/ProductActBtn/ProductActBtn";
import ProductCard from "@components/common/ProductCard/ProductCard";
import SectionHeader from "@components/common/SectionHeader/SectionHeader";
import useVisitProduct from "@hooks/useVisitProduct";
import img1 from "@assets/p-1.png?w=800&format=webp&quality=80";
import img2 from "@assets/p-2.png?w=800&format=webp&quality=80";
import img3 from "@assets/p-3.png?w=800&format=webp&quality=80";
import img4 from "@assets/p-4.png?w=800&format=webp&quality=80";
import wish from "@assets/heart.svg?w=64&format=webp&quality=90";
import show from "@assets/show.svg?w=64&format=webp&quality=90";

import imgP1 from "@assets/product-img-1.png?w=80&format=webp&quality=100";
import imgP2 from "@assets/product-img-2.png?w=80&format=webp&quality=100";
import imgP3 from "@assets/product-img-3.png?w=80&format=webp&quality=100";
import imgP4 from "@assets/product-img-4.png?w=80&format=webp&quality=100";
import pImg from "@assets/product.png?w=500&format=webp&quality=80";

import ProductAction from "@components/common/ProductAction/ProductAction";
import "./Product.scss";
import SmallNav from "@components/common/SmallNav/SmallNav";

const product = {
  title: "",
  image: pImg,
  smallImg: [imgP1, imgP2, imgP3, imgP4],
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
    image: img1,
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
  },
  {
    id: 4,
    title: "27-inch Gaming Monitor",
    oldPrice: 400,
    newPrice: 310,
    discount: -23,
    reviews: 76,
    stars: 4,
    image: img4,
  },
];

const ProductC = () => {
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
          {/* <div className="product__overview__details flex flex-col gap-4">
            <h3 className="product-title">Havic HV G-92 Gamepad</h3>
            <div className="product-states flex">
              <div className="stars"></div>
              <div className="reviews">(3433)</div>
              <span>|</span>
              <div className="availability">in stock</div>
            </div>
            <div className="product-price">$8999</div>
            <div className="product-description">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </div>
            <div className="product-custom">
              <div className="colors">
                <span>colors: </span>
                <span>
                  <input type="radio" name="" id="" />
                  <input type="radio" name="" id="" />
                </span>
              </div>
            </div>
            <div className="product-more-details"></div>
          </div> */}
          <ProductAction />
        </div>
        <div className="more-products">
          <SectionHeader title="Related Items" />
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
    </div>
  );
};

export default ProductC;
