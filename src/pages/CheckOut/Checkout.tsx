import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonPrim from "@components/shared/ButtonPrim/ButtonPrim";
import Breadcrumb from "@components/shared/Breadcrumb/Breadcrumb";
import { paymentSchema } from "@util/schemas";
import { useAppSelector } from "@store/hook";
import "./Billing.scss";

const schema = paymentSchema;

const Billing = () => {
  const { items, fullProductInfo, totalPrice } = useAppSelector(
    (state) => state.cartReducer
  );

  const products = fullProductInfo.filter((pr) => items[pr.id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="check-out">
      <div className="container">
        <Breadcrumb />
      </div>
      <div className="container check-out__container ">
        <div className="check-out__form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span>
                First Name<span className="text-red-600">*</span>
              </span>

              <input {...register("firstName")} />
              {errors.firstName && <span>Required</span>}
            </label>

            <label>
              Company Name
              <input {...register("company")} />
            </label>

            <label>
              <span>
                Street Address<span className="text-red-600">*</span>
              </span>

              <input {...register("street")} />
              {errors.street && <span>Required</span>}
            </label>

            <label>
              Apartment
              <input {...register("apartment")} />
            </label>

            <label>
              <span>
                "Town/City<span className="text-red-600">*</span>
              </span>

              <input {...register("city")} />
              {errors.city && <span>Required</span>}
            </label>

            <label>
              <span>
                "Phone Number<span className="text-red-600">*</span>
              </span>

              <input {...register("phone")} />
              {errors.phone && <span>Required</span>}
            </label>

            <label>
              <span>
                "Email Address<span className="text-red-600">*</span>
              </span>

              <input {...register("email")} />
              {errors.email && <span>Invalid email</span>}
            </label>
            <label className="check">
              <input type="checkbox" />
              Save this information for faster check-out next time
            </label>
          </form>
        </div>

        <div className="check-out__submit">
          <div className="review">
            <div className="review-products">
              <div className="products-details">
                {products.map((product, i) => (
                  <div key={i} className="product-details">
                    <div className="image-name">
                      <img src={product.image} alt="" width={54} height={54} />
                      <span>
                        {product.title.length > 11
                          ? product.title.slice(0, 12) + "..."
                          : product.title}
                      </span>
                    </div>
                    <div className="price">${product.newPrice}</div>
                  </div>
                ))}
              </div>

              <div className="cart-details">
                <div className="cart-details-wrapper">
                  <div className="detail">
                    <span className="key">Subtotal:</span>
                    <span className="value">${totalPrice}</span>
                  </div>
                  <div className="detail">
                    <span className="key">Shipping:</span>
                    <span className="value">Free</span>
                  </div>
                  <div className="detail">
                    <span className="key">Total:</span>
                    <span className="value">${totalPrice}</span>
                  </div>
                </div>
              </div>
              <div className="billing-details">
                <label className="bank" htmlFor="">
                  <div className="wrap-radio">
                    <input type="radio" name="Bank" id="" />
                    Bank
                  </div>
                  <span className="logos">
                    <img
                      src="/images/logo-b-1.svg"
                      alt="logo for bank company"
                      width={42}
                      height={28}
                    />
                    <img
                      src="/images/logo-b-2.svg"
                      alt="logo for bank company"
                      width={42}
                      height={28}
                    />
                    <img
                      src="/images/logo-b-3.svg"
                      alt="logo for bank company"
                      width={42}
                      height={28}
                    />
                    <img
                      src="/images/logo-b-4.svg"
                      alt="logo for bank company"
                      width={42}
                      height={28}
                    />
                  </span>
                </label>
                <label htmlFor="">
                  <input type="radio" name="Bank" id="" />
                  Cash on delivery
                </label>
              </div>
            </div>

            <div className="promo ">
              <input type="text" placeholder="Coupon Code" />
              <ButtonPrim to="" value="Apply Coupon" />
            </div>
          </div>
          <ButtonPrim value="Place Order" to="/" />
        </div>
      </div>
    </div>
  );
};

export default Billing;
