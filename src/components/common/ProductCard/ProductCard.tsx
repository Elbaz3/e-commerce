import "./ProductCard.scss";

import star from "@assets/full-start.svg?w=64&format=webp&quality=90";
import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hook";
import type { ReactNode } from "react";

interface productCardProps {
  id: number;
  title: string;
  oldPrice?: number;
  price: number;
  discount?: number;
  stars?: number;
  reviews?: number;
  image: string;
  newP?: true | false;
  actElement: ReactNode;
}

const ProductCard = ({
  id,
  title = "proplem",
  oldPrice,
  price,
  discount,
  stars,
  reviews,
  newP,
  image,
  actElement,
}: productCardProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, price }));
    console.log(`${id} - ${title} - added succesfully`);
  };

  return (
    <div className="product-card">
      <div className={`product-card__top `}>
        <img className="product-image" src={image} alt="product" />
        <div className="icon-wrapper">
          {(discount || newP) && (
            <div className={`product-card__discount ${newP ? "new-bg" : ""}`}>
              {discount ? discount + "%" : "new"}
            </div>
          )}
          <div className="product-card__action">{actElement}</div>
        </div>
        <div className="add-cart" onClick={handleAddToCart}>
          Add To Cart
        </div>
      </div>
      <div className="product-card__bottom">
        <div className="product-title">
          {title.length > 25 ? title.slice(0, 25) + "..." : title}
        </div>
        <div className="product-price">
          <span className="new-price">${price}</span>
          {oldPrice && <span className="old-price">${oldPrice}</span>}
        </div>
        <div className="product-rate">
          <div className="stars-rate ">
            {stars && (
              <>
                <img src={star} alt="" width={20} loading="lazy" />
                <img src={star} alt="" width={20} loading="lazy" />
                <img src={star} alt="" width={20} loading="lazy" />
                <img src={star} alt="" width={20} loading="lazy" />
                <img src={star} alt="" width={20} loading="lazy" />
              </>
            )}
          </div>

          {reviews && <div className="reviews-rate">({reviews})</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
