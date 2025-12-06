import { Select } from "antd";
import "./Header.scss";

const { Option } = Select;
type Language = "en" | "ar" | "fr";

const Header = () => {
  const handleChange = (value: Language) => {
    console.log("Selected language:", value);
  };

  return (
    <div className="header">
      <div className="header__top">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span>
            <a href="">ShopNow</a>
          </span>
        </p>
        <Select<Language>
          defaultValue="en"
          style={{ width: 160 }}
          onChange={handleChange}
          className="header__select"
        >
          <Option value="en">English</Option>
          <Option value="ar">العربية</Option>
        </Select>
      </div>
    </div>
  );
};

export default Header;
