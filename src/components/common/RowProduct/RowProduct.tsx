import type { ReactNode } from "react";
import "./RowProduct.scss";

interface RowProduct {
  firstElement: ReactNode;
  secondElement: ReactNode;
  thirdElement: ReactNode;
  fourthElement: ReactNode;
  classname?: string;
}

const RowProduct = ({
  firstElement,
  secondElement,
  thirdElement,
  fourthElement,
  classname,
}: RowProduct) => {
  return (
    <div className={`row-product ${classname}`}>
      <div className="cart-col cart-col-1">{firstElement}</div>
      <div className="cart-col cart-col-2">{secondElement}</div>
      <div className="cart-col cart-col-3">{thirdElement}</div>
      <div className="cart-col cart-col-4">{fourthElement}</div>
    </div>
  );
};

export default RowProduct;
