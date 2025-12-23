import SectionHeader from "@components/shared/SectionHeader/SectionHeader";
import FeatureProduct from "@components/common/FeatureProduct/FeatureProduct";
import "./Feature.scss";

const Feature = () => {
  return (
    <section className="feature">
      <div className="container">
        <SectionHeader title="Featured" subTitle="New Arrival" />
        <div className="feature__content">
          <div className="feature__content__top ">
            <div className="left ">
              <FeatureProduct
                title="PlayStation"
                desc="Black and White version of the PS5 coming out on sale."
                image="/images/playstation.png"
              />
            </div>
            <div className="right">
              <div className="right-top">
                <FeatureProduct
                  title="Women’s Collections"
                  desc="Featured woman collections that give you another vibe."
                  image="/images/woman.png"
                />
              </div>
              <div className="right-bottom">
                <FeatureProduct
                  title="Speakers"
                  desc="Amazon wireless speakers"
                  image="/images/speaker.png"
                />{" "}
                <FeatureProduct
                  title="Perfume"
                  desc="GUCCI INTENSE OUD EDP"
                  image="/images/perfum.png"
                />
              </div>
            </div>
          </div>
          <div className="feature__content__bottom">
            <div className="bottom-item">
              <img src="/images/Services.png" alt="" />
              <div className="text">
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
              </div>
            </div>
            <div className="bottom-item">
              <img src="/images/Services-2.png" alt="" />
              <div className="text">
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
              </div>
            </div>
            <div className="bottom-item">
              <img src="/images/Services-3.png" alt="" />
              <div className="text">
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
