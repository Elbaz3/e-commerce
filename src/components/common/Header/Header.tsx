import React, { lazy, Suspense, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";

import "./Header.scss";
import { useAppSelector } from "@store/hook";

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

  const likedCount = useAppSelector((state) => state.wishSlice.itemsId.length);
  const cartCount = useAppSelector(
    (state) => Object.keys(state.cartReducer.items).length
  );

  return (
    <div className="header">
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

      <div className="container header-container">
        <div className="header__bottom">
          <Link to="/" className="header__bottom__logo">
            Exclusive
          </Link>

          <div className="collaps-icon" onClick={handleShowIcon}>
            <img src="/images/collaps-icon.svg" alt="burger icon" width={40} />
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
                  <img src="/images/search.svg" alt="search icon" />
                </button>
              </form>

              <Link
                to="/wishlist"
                className={`wish ${currentPage === "wishlist" ? "active" : ""}`}
              >
                <img src="/images/Wishlist.svg" alt="heart" width={24} />
                {likedCount > 0 && (
                  <div className="productQuantity">{likedCount}</div>
                )}
              </Link>

              <Link
                to="/cart"
                className={`cart ${currentPage === "cart" ? "active" : ""}`}
              >
                <img src="/images/Cart.svg" alt="cart" width={24} />
                {cartCount > 0 && (
                  <div className="productQuantity">{cartCount}</div>
                )}
              </Link>
              <div
                className={`account ${
                  currentPage === "profile" ? "active" : ""
                }`}
              >
                <img src="/images/user.svg" alt="cart" width={24} />
                <ul className="menu-profile">
                  <li>
                    <img src="/images/userAcc.svg" alt="icon" />{" "}
                    <a href="/profile">Manage My Account</a>
                  </li>
                  <li>
                    <img src="/images/profile-order.svg" alt="icon" />{" "}
                    <a href="">My Order</a>
                  </li>
                  <li>
                    <img src="/images/cancelations.svg" alt="icon" />{" "}
                    <a href="">My Cancellations</a>
                  </li>
                  <li>
                    <img src="/images/profile-reviews.svg" alt="icon" />{" "}
                    <a href="">My Reviews</a>
                  </li>
                  <li>
                    <img src="/images/profile-logout.svg" alt="icon" />{" "}
                    <a href="">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
