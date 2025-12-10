import SectionHeader from "@components/common/SectionHeader/SectionHeader";
import FeatureProduct from "@components/common/FeatureProduct/FeatureProduct";
import "./Feature.scss";

import image1 from "@assets/playstation.png?w=800&format=webp&quality=80&url";
import image2 from "@assets/woman.png?w=800&format=webp&quality=80&url";
import image3 from "@assets/speaker.png?w=800&format=webp&quality=80&url";
import image4 from "@assets/perfum.png?w=800&format=webp&quality=80&url";

import service1 from "@assets/Services.png?w=800&format=webp&quality=80&url";
import service2 from "@assets/Services-2.png?w=800&format=webp&quality=80&url";
import service3 from "@assets/Services-3.png?w=800&format=webp&quality=80&url";

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
                image={image1}
              />
            </div>
            <div className="right">
              <div className="right-top">
                <FeatureProduct
                  title="Women’s Collections"
                  desc="Featured woman collections that give you another vibe."
                  image={image2}
                />
              </div>
              <div className="right-bottom">
                <FeatureProduct
                  title="Speakers"
                  desc="Amazon wireless speakers"
                  image={image3}
                />{" "}
                <FeatureProduct
                  title="Perfume"
                  desc="GUCCI INTENSE OUD EDP"
                  image={image4}
                />
              </div>
            </div>
          </div>
          <div className="feature__content__bottom">
            <div className="bottom-item">
              <img src={service1} alt="" />
              <div className="text">
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
              </div>
            </div>
            <div className="bottom-item">
              <img src={service2} alt="" />
              <div className="text">
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
              </div>
            </div>
            <div className="bottom-item">
              <img src={service3} alt="" />
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
