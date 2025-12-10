import type { ReactNode } from "react";
import "./RowProduct.scss";

interface RowProduct {
  firstElement: ReactNode;
  secondElement: ReactNode;
  thirdElement: ReactNode;
  fourthElement: ReactNode;
}

const RowProduct = ({
  firstElement,
  secondElement,
  thirdElement,
  fourthElement,
}: RowProduct) => {
  return (
    <div className="row-product">
      <div className="cart-col cart-col-1">{firstElement}</div>
      <div className="cart-col cart-col-1">{secondElement}</div>
      <div className="cart-col cart-col-1">{thirdElement}</div>
      <div className="cart-col cart-col-1">{fourthElement}</div>
    </div>
  );
};

export default RowProduct;
