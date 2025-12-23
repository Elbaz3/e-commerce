import "./CategoryCard.scss";

interface CategoryCardProps {
  image: string;
  name: string;
}

const CategoryCard = ({ image, name }: CategoryCardProps) => {
  return (
    <a href="/products" className="category-card">
      <img src={image} alt="icon" />
      <p>{name}</p>
    </a>
  );
};

export default CategoryCard;
