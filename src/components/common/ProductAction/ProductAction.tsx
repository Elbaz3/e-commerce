import { useState } from "react";

import "./ProductAction.scss";

const ProductAction = () => {
  const [color, setColor] = useState("blue");
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(2);

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { id: "blue", value: "bg-blue-500" },
    { id: "red", value: "bg-red-500" },
  ];

  return (
    <div className="product-act">
      {/* Title */}
      <h1 className="product-title">Havic HV G-92 Gamepad</h1>

      {/* Rating */}
      <div className="product-state">
        <div className="stars">
          <img src="/images/full-start.svg" />
          <img src="/images/full-start.svg" />
          <img src="/images/full-start.svg" />
          <img src="/images/full-start.svg" />
          <img src="/images/full-start.svg" />
        </div>
        <span>(150 Reviews)</span>
        <span>|</span>
        <span className="stock-state">In Stock</span>
      </div>

      {/* Price */}
      <p className="product-price">$192.00</p>

      {/* Description */}
      <p className="product-desc">
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal. Pressure
        sensitive.
      </p>

      <hr />

      {/* Colours */}
      <div>
        <p className="product-colors">Colours:</p>
        <div className="colors-list">
          {colors.map((c) => (
            <button
              key={c.id}
              onClick={() => setColor(c.id)}
              className={` color-btn ${c.value} ${
                color === c.id ? "outline-2" : ""
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <p className="size-title">Size:</p>
        <div className="size-list">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`size-box ${size === s ? "size-active" : "size"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Buy Now */}
      <div className="quantity">
        <div className="quantity-box">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="btn-quantity"
          >
            -
          </button>
          <div className="px-4 py-2 border-l border-r">{qty}</div>
          <button onClick={() => setQty((q) => q + 1)} className="btn-quantity">
            +
          </button>
        </div>

        <button className="button-primary ">Buy Now</button>

        <div className="add-wish">
          <img src="/images/Wishlist.svg" alt="heart" width={25} height={25} />
        </div>
      </div>

      {/* Delivery Info */}
      <div className="delivery">
        <div className="return-info">
          <img src="/images/delivery.svg" className="" />

          <div>
            <p className="font-semibold">Free Delivery</p>
            <a className="desc" href="#">
              Enter your postal code for Delivery Availability
            </a>
          </div>
        </div>

        <hr />

        <div className="return-info">
          <img src="/images/return.svg" className="" />
          <div>
            <p className="font-semibold">Return Delivery</p>
            <p className="desc">
              Free 30 Days Delivery Returns.{" "}
              <a href="#" className="">
                Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAction;
