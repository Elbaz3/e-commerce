import { lazy, Suspense, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import wishlist from "../../../assets/Wishlist.svg";
import cart from "../../../assets/Cart.svg";
import search from "../../../assets/search.svg";
import burger from "../../../assets/collaps-icon.svg";
import "./Header.scss";

const Select = lazy(() =>
  import("antd/lib/select").then((m) => ({ default: m.default }))
);

type Language = "en" | "ar";

const Header = () => {
  const menu = useRef<HTMLDivElement | null>(null);
  const navItems = useRef<HTMLUListElement | null>(null);

  const { pathname } = useLocation();
  const currentPage = pathname.split("/").pop();

  useEffect(() => {
    if (!menu.current) return;
    menu.current.classList.remove("show-menu");
  }, [pathname]);

  const handleShowIcon = () => {
    if (!menu.current) return;
    menu.current.classList.toggle("show-menu");
  };

  const handleChange = (value: string) => {
    const lang = value as Language;
    console.log("Selected language:", lang);
  };

  return (
    <div className="header">
      {/* ===== TOP BAR ===== */}
      <div className="header__top-wrapper">
        <div className="header__top container">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span>
              <a className="shop-now" href="/" target="_blank">
                ShopNow
              </a>
            </span>
          </p>

          {/* ✅ REQUIRED for lazy-loaded component */}
          <Suspense fallback={<div style={{ width: 92 }} />}>
            <Select
              defaultValue="en"
              style={{ width: 92 }}
              onChange={handleChange}
              className="header__top__select lang-select"
              options={[
                { value: "en", label: "English" },
                { value: "ar", label: "العربية" },
              ]}
            />
          </Suspense>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <div className="container header-container">
        <div className="header__bottom">
          <Link to="/" className="header__bottom__logo">
            Exclusive
          </Link>

          <div className="collaps-icon" onClick={handleShowIcon}>
            <img src={burger} alt="burger icon" width={40} />
          </div>

          <div ref={menu} className="header__collaps">
            <div className="header__bottom__nav">
              <ul ref={navItems}>
                <li>
                  <Link to="/" className={!currentPage ? "active" : ""}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className={currentPage === "contact" ? "active" : ""}
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about-us"
                    className={currentPage === "about-us" ? "active" : ""}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/signup"
                    className={currentPage === "signup" ? "active" : ""}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>

            <div className="header__bottom__actions">
              <form action="search" className="header__search">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="search-box"
                />

                <button className="search-icon" type="submit">
                  <img src={search} alt="search icon" />
                </button>
              </form>

              <Link
                to="/wishlist"
                className={`wish ${currentPage === "wishlist" ? "active" : ""}`}
              >
                <img src={wishlist} alt="heart" width={24} />
              </Link>

              <Link
                to="/cart"
                className={`cart ${currentPage === "cart" ? "active" : ""}`}
              >
                <img src={cart} alt="cart" width={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
