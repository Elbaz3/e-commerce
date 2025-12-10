import RowProduct from "@components/common/RowProduct/RowProduct";
import "./Cart.scss";
import ButtonPrim from "@components/common/ButtonPrim/ButtonPrim";
import SmallNav from "@components/common/SmallNav/SmallNav";
import { useState } from "react";
import { billingProducts } from "@util/MocupData";

type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

type QuantityState = {
  [productId: number]: number;
};

const products = billingProducts;

const CartC = () => {
  const initialQuantities: QuantityState = products.reduce(
    (acc: QuantityState, p: Product) => {
      acc[p.id] = p.quantity;
      return acc;
    },
    {}
  );

  const [quantity, setQuantity] = useState<QuantityState>(initialQuantities);

  const handleChangeQ = (id: number, type: "inc" | "dec") => {
    setQuantity((prev) => ({
      ...prev,
      [id]: type === "inc" ? prev[id] + 1 : Math.max(1, prev[id] - 1),
    }));
  };

  return (
    <div className="cart-page">
      <div className="container">
        <SmallNav items={["Home", "Cart"]} />
      </div>
      <div className="container cart-page__container">
        <div className="cart-page__bag">
          <RowProduct
            firstElement={<span>Product</span>}
            secondElement={<span>Price</span>}
            thirdElement={<span>Quantity</span>}
            fourthElement={<span>Subtotal</span>}
          />
          <div className="cart-page__bag__content">
            {products.map((product, i) => (
              <RowProduct
                key={i}
                firstElement={
                  <span>
                    <img
                      src={product.image}
                      alt="product"
                      width={54}
                      height={54}
                    />
                    <span>
                      {product.title.length > 11
                        ? product.title.slice(0, 12) + "..."
                        : product.title}
                    </span>
                  </span>
                }
                secondElement={<span>${product.price}</span>}
                thirdElement={
                  <span className="q-wrapper">
                    <button onClick={() => handleChangeQ(product.id, "dec")}>
                      -
                    </button>
                    <span>{quantity[product.id]}</span>
                    <button onClick={() => handleChangeQ(product.id, "inc")}>
                      +
                    </button>
                  </span>
                }
                fourthElement={<span>${product.price * product.quantity}</span>}
              />
            ))}
          </div>
          <div className="cart-page__bag__footer">
            <ButtonPrim value="Return To Shop" to="/" />
            <ButtonPrim value="Update Cart" to="/" />
          </div>
        </div>
        <div className="cart-page__action">
          <div className="promo">
            <input type="text" placeholder="Coupon Code" />
            <ButtonPrim to="/" value="Apply Coupon" />
          </div>

          <div className="cart-details">
            <h3>Cart Total</h3>
            <div className="cart-details-wrapper">
              <div className="detail">
                <span className="key">Subtotal:</span>
                <span className="value">
                  {products.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>
              <div className="detail">
                <span className="key">Shipping:</span>
                <span className="value">Free</span>
              </div>
              <div className="detail">
                <span className="key">Total:</span>
                <span className="value">
                  {" "}
                  {products.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>
            </div>
            <ButtonPrim value="Procees to checkout" to="/checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartC;
