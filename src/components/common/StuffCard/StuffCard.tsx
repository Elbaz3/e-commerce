import twitter from "@assets/twitter-1.svg";
import instagram from "@assets/insta-1.svg";
import linkedIn from "@assets/in-1.svg";
import "./StuffCard.scss";

interface StuffCardProps {
  image: string;
  title: string;
  name: string;
}

const StuffCard = ({ image, title, name }: StuffCardProps) => {
  return (
    <div className="stuff-card">
      <div className="stuff-image">
        <img src={image} alt="" width={370} height={430} />
      </div>
      <div className="stuff-text">
        <h3>{name}</h3>
        <div className="stuff-title">{title}</div>
        <div className="stuff-social">
          <ul>
            <li>
              <a href="">
                <img src={twitter} alt="twitter" width={24} height={24} />
              </a>
            </li>
            <li>
              <a href="">
                <img src={instagram} alt="instagram" width={24} height={24} />
              </a>
            </li>
            <li>
              <a href="">
                <img src={linkedIn} alt="linked in" width={24} height={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StuffCard;
