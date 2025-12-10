import ButtonPrim from "@components/common/ButtonPrim/ButtonPrim";
import CountDown from "@components/common/CountDown/CountDown";
import "./Offer.scss";
import offer1 from "@assets/offer-1.png?w=800&format=webp&quality=80";

const Offer = () => {
  return (
    <div className="offer">
      <div className="container offer__container">
        <div className="offer__content">
          <div className="offer__content__text">
            <span className="offer-title">Categories</span>
            <h2 className="offer-head">Enhance Your Music Experience</h2>
            <CountDown days={6} />
            <ButtonPrim to="/" value="Buy Now!" />
          </div>

          <img className="product-image" src={offer1} alt="product" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
