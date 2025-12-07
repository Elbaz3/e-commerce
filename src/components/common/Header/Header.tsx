import { Select } from "antd";
import "./Header.scss";
import wishlist from "../../../assets/Wishlist.svg";
import cart from "../../../assets/Cart.svg";
import search from "../../../assets/search.svg";
import burger from "../../../assets/collaps-icon.svg";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const { Option } = Select;

type Language = "en" | "ar";

const Header = () => {
  const menu = useRef<HTMLDivElement | null>(null);

  const navItems = useRef<HTMLUListElement | null>(null);
  const { pathname } = useLocation();
  const currentPage = pathname.split("/").pop();

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
          <a href="/" className="header__bottom__logo">
            Exclusive
          </a>
          <div className="collaps-icon" onClick={handleShowIcon}>
            <img src={burger} alt="burger icon" width={40} />
          </div>
          <div ref={menu} className="header__collaps">
            <div className="header__bottom__nav">
              <ul ref={navItems}>
                <li>
                  <a href="/" className={!currentPage?.length ? "active" : ""}>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className={currentPage === "contact" ? "active" : ""}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className={currentPage === "about-us" ? "active" : ""}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/signup"
                    className={currentPage === "signup" ? "active" : ""}
                  >
                    Sign Up
                  </a>
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

              <a
                href="/wishlist"
                className={`wish ${currentPage === "wishlist" ? "active" : ""}`}
              >
                <img src={wishlist} alt="heart" width={24} />
              </a>
              <a
                href="/cart"
                className={`cart ${currentPage === "cart" ? "active" : ""}`}
              >
                <img src={cart} alt="cart" width={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
