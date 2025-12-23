import "./AboutC.scss";
import StatsBox from "@components/aboutUs/StatsBox/StatsBox";
import StuffCard from "@components/aboutUs/StuffCard/StuffCard";
import Breadcrumb from "@components/shared/Breadcrumb/Breadcrumb";

const stats = [
  {
    title: "10.5k",
    desc: "Sallers active our site",
    image: "/images/stat-1svg.svg",
  },
  {
    title: "33k",
    desc: "Mopnthly Produduct Sale",
    image: "/images/stat-2.svg",
  },
  {
    title: "45.5k",
    desc: "Customer active in our site",
    image: "/images/stat-3.svg",
  },
  {
    title: "25k",
    desc: "Anual gross sale in our site",
    image: "/images/stat-4.svg",
  },
];

const stuff = [
  {
    name: "Tom Cruise",
    title: "Founder & Chairman",
    image: "/images/stuff-1.png",
  },
  {
    name: "Emma Watson",
    title: "Managing Director",
    image: "/images/stuff-2.png",
  },
  {
    name: "Will Smith",
    title: "Product Designer",
    image: "/images/stuff-3.png",
  },
];

const AboutC = () => {
  return (
    <div className="about">
      <div className="container">
        <Breadcrumb />
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
            <img src="/images/about-hero.png" alt="" />
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
            <img
              src="/images/Services.png"
              alt="service"
              width={80}
              height={80}
            />
            <div className="text">
              <h3>FREE AND FAST DELIVERY</h3>
              <p>Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className="bottom-item">
            <img
              src="/images/Services-2.png"
              alt="service"
              width={80}
              height={80}
            />
            <div className="text">
              <h3>FREE AND FAST DELIVERY</h3>
              <p>Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className="bottom-item">
            <img
              src="/images/Services-3.png"
              alt="service"
              width={80}
              height={80}
            />
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
