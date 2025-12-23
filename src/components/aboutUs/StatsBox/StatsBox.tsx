import "./StatsBox.scss";

interface StatsBoxProps {
  image: string;
  title: string;
  description: string;
}

const StatsBox = ({ image, title, description }: StatsBoxProps) => {
  return (
    <div className="stats-box">
      <div className="image-wrapper-1">
        <div className="image-wrapper-2">
          <img src={image} alt="icon" width={40} height={40} />
        </div>
      </div>
      <span className="stats-title">{title}</span>
      <span className="stats-desc">{description}</span>
    </div>
  );
};

export default StatsBox;
