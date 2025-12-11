import RowProduct from "@components/common/RowProduct/RowProduct";
import "./Cart.scss";
import ButtonPrim from "@components/common/ButtonPrim/ButtonPrim";
import SmallNav from "@components/common/SmallNav/SmallNav";
import { useAppDispatch, useAppSelector } from "@store/hook";

import { changeQuantity, deleteItem, cleanCart } from "@store/cart/cartSlice";

const CartC = () => {
  const { items, fullProductInfo, totalPrice } = useAppSelector(
    (state) => state.cartReducer
  );

  const dispatch = useAppDispatch();

  const products = fullProductInfo.filter((pr) => items[pr.id]);

  const handleChangeQ = (
    id: number,
    price: number | undefined,
    type: string
  ) => {
    dispatch(changeQuantity({ id, price, type }));
  };
  const handleCleanCart = () => {
    dispatch(cleanCart());
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
                secondElement={<span>${product.newPrice}</span>}
                thirdElement={
                  <span className="q-wrapper">
                    <button
                      onClick={() =>
                        handleChangeQ(product.id, product.newPrice, "dec")
                      }
                    >
                      -
                    </button>
                    <span>{items[product.id]}</span>
                    <button
                      onClick={() =>
                        handleChangeQ(product.id, product.newPrice, "inc")
                      }
                    >
                      +
                    </button>
                  </span>
                }
                fourthElement={
                  <span>
                    $
                    {product.newPrice
                      ? product.newPrice * items[product.id]
                      : 0}
                  </span>
                }
              />
            ))}
          </div>
          <div className="cart-page__bag__footer">
            <ButtonPrim value="Return To Shop" to="/" />
            <div className="button-primary" onClick={handleCleanCart}>
              Update Cart{" "}
            </div>
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
                <span className="value">{totalPrice}</span>
              </div>
              <div className="detail">
                <span className="key">Shipping:</span>
                <span className="value">Free</span>
              </div>
              <div className="detail">
                <span className="key">Total:</span>
                <span className="value">{totalPrice}</span>
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
