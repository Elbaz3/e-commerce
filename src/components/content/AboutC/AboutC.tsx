import heroImage from "@assets/about-hero.png?w=800&format=webp&quality=80";
import "./AboutC.scss";
import StatsBox from "@components/common/StatsBox/StatsBox";
import icon1 from "@assets/stat-1svg.svg?w=800&format=webp&quality=80";
import icon2 from "@assets/stat-2.svg?w=800&format=webp&quality=80";
import icon3 from "@assets/stat-3.svg?w=800&format=webp&quality=80";
import icon4 from "@assets/stat-4.svg?w=800&format=webp&quality=80";
import stuff1 from "@assets/stuff-1.png?w=800&format=webp&quality=80";
import stuff2 from "@assets/stuff-2.png?w=800&format=webp&quality=80";
import stuff3 from "@assets/stuff-3.png?w=800&format=webp&quality=80";
import service1 from "@assets/Services.png?w=800&format=webp&quality=80&url";
import service2 from "@assets/Services-2.png?w=800&format=webp&quality=80&url";
import service3 from "@assets/Services-3.png?w=800&format=webp&quality=80&url";
import StuffCard from "@components/common/StuffCard/StuffCard";
import SmallNav from "@components/common/SmallNav/SmallNav";

const stats = [
  {
    title: "10.5k",
    desc: "Sallers active our site",
    image: icon1,
  },
  {
    title: "33k",
    desc: "Mopnthly Produduct Sale",
    image: icon2,
  },
  {
    title: "45.5k",
    desc: "Customer active in our site",
    image: icon3,
  },
  {
    title: "25k",
    desc: "Anual gross sale in our site",
    image: icon4,
  },
];

const stuff = [
  {
    name: "Tom Cruise",
    title: "Founder & Chairman",
    image: stuff1,
  },
  {
    name: "Emma Watson",
    title: "Managing Director",
    image: stuff2,
  },
  {
    name: "Will Smith",
    title: "Product Designer",
    image: stuff3,
  },
];

const AboutC = () => {
  return (
    <div className="about">
      <div className="container">
        <SmallNav items={["Home", "About"]} />
      </div>
      <div className="container">
        <div className="about__hero ">
          <div className="about__hero__text">
            <h2>Our Story</h2>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="about__hero__image">
            <img src={heroImage} alt="" />
          </div>
        </div>

        <div className="about__stats ">
          {stats.map((stat, i) => (
            <StatsBox
              key={i}
              image={stat.image}
              title={stat.title}
              description={stat.desc}
            />
          ))}
        </div>

        <div className="about__stuff">
          {stuff.map((stuf, i) => (
            <StuffCard
              key={i}
              name={stuf.name}
              title={stuf.title}
              image={stuf.image}
            />
          ))}
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
  );
};

export default AboutC;
