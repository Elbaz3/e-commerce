import "./FeatureProduct.scss";

interface FeatureProductProps {
  title: string;
  desc: string;
  image: string;
}

const FeatureProduct = ({ title, desc, image }: FeatureProductProps) => {
  return (
    <div className="feature-product">
      <img className="product-image" src={image} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="btn">Shop Now</div>
    </div>
  );
};

export default FeatureProduct;
