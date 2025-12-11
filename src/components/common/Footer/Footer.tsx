import "./footer.scss";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__content">
          {/* Column 1 - Exclusive */}
          <ul className="footer-col">
            <li className="footer-title">Exclusive</li>
            <li>
              <a href="#" className="footer-subs">
                Subscribe
              </a>
            </li>
            <li>
              <a href="#">Get 10% off your first order</a>
            </li>
            <li className="footer-email">
              <input type="email" placeholder="Enter your email" />
              <img
                className="footer-submit"
                src="/images/submit-email.svg"
                alt="submit"
                width="24"
                height="24"
              />
            </li>
          </ul>
          {/* Column 2 - Support */}
          <ul className="footer-col">
            <li className="footer-title">Support</li>
            <li>
              <a href="#">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</a>
            </li>
            <li>
              <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            </li>
            <li>
              <a href="tel:+88015888889999">+88015-88888-9999</a>
            </li>
          </ul>
          {/* Column 3 - Account */}
          <ul className="footer-col">
            <li className="footer-title">Account</li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Login </a>/<a href="#"> Register</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
          {/* Column 4 - Quick Links */}
          <ul className="footer-col">
            <li className="footer-title">Quick Link</li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          {/* Column 5 - App + Social */}
          <ul className="footer-col">
            <li className="footer-title">Download App</li>
            <li className="offer-text">
              <a href="#">Save $3 with App New User Only</a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/images/googleplay.png"
                  alt="google play icon"
                  width={105}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/images/appstore.png"
                  alt="app store icon"
                  width={105}
                />
              </a>
            </li>

            <li className="socials ">
              <a href="#">
                <img
                  src="/images/facebook.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <img
                  src="/images/twitter.svg"
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <img
                  src="/images/instagram.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <img
                  src="/images/in.svg"
                  alt="linkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        © Copyright Rimel {date.getFullYear()}. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
