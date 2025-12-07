import { Select, Input } from "antd";
import "./Header.scss";
import wishlist from "../../../assets/Wishlist.svg";
import cart from "../../../assets/Cart.svg";
import search from "../../../assets/search.svg";
import burger from "../../../assets/collaps-icon.svg";
import { useRef } from "react";

const { Option } = Select;

type Language = "en" | "ar" | "fr";

const Header = () => {
  const menu = useRef<HTMLDivElement | null>(null);

  const handleShowIcon = () => {
    if (!menu.current) return;

    menu.current.classList.toggle("menu-hidden");
  };

  const handleChange = (value: Language) => {
    console.log("Selected language:", value);
  };

  return (
    <div className="header">
      <div className="header__top-wrapper">
        <div className=" header__top container">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span>
              <a className="shop-now" href="" target="_blank">
                ShopNow
              </a>
            </span>
          </p>
          <Select<Language>
            defaultValue="en"
            style={{ width: 92 }}
            onChange={handleChange}
            className="header__top__select lang-select"
          >
            <Option value="en">English</Option>
            <Option value="ar">العربية</Option>
          </Select>
        </div>
      </div>
      <div className="container header-container">
        <div className="header__bottom">
          <div className="header__bottom__logo">Exclusive</div>
          <div className="collaps-icon" onClick={handleShowIcon}>
            <img src={burger} alt="burger icon" width={40} />
          </div>
          <div ref={menu} className="header__collaps">
            <div className="header__bottom__nav">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/about-us">About</a>
                </li>
                <li>
                  <a href="/signup">Sign Up</a>
                </li>
              </ul>
            </div>
            <div className="header__bottom__actions">
              <form action="search" className="header__search">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="What are you looking for?"
                  className="search-box"
                />
                <button className="search-icon" type="submit">
                  <img className="search-icon" src={search} alt="search icon" />
                </button>
              </form>

              <div className="wish">
                <img src={wishlist} alt="heart" />
              </div>
              <div className="cart">
                {" "}
                <img src={cart} alt="cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
