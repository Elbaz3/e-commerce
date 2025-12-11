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
                <img
                  src="/images/twitter-1.svg"
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/images/insta-1.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/images/in-1.svg"
                  alt="linked in"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StuffCard;
