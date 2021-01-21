import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div>
          <h3>Amtica</h3>
          <p>Subscribe our newsletter today.</p>
          <Link to="/" className="footer__links">
            <button className="btn__join">Join Now</button>
          </Link>
          <ul className="social-icons">
            <li className="social-links">
              <Link to="/">
                <i class="fab fa-facebook-square"></i>
              </Link>
            </li>
            <li className="social-links">
              <Link to="/">
                <i class="fab fa-instagram-square"></i>
              </Link>
            </li>
            <li className="social-links">
              <Link to="/">
                <i class="fab fa-github-square"></i>
              </Link>
            </li>
            <li className="social-links">
              <Link to="/">
                <i class="fab fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
        <ul>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              Sitemap
            </Link>
          </li>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              Home
            </Link>
          </li>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              Seller
            </Link>
          </li>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              Buyer
            </Link>
          </li>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              Search
            </Link>
          </li>
        </ul>
        <ul>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              Services
            </Link>
          </li>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              Help
            </Link>
          </li>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              Request a feature
            </Link>
          </li>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              Terms & Policy
            </Link>
          </li>
        </ul>
        <ul>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              For Users
            </Link>
          </li>
          <li className="footer__items">
            <Link to="/login" className="footer__links">
              Login
            </Link>
          </li>
          <li className="footer__items">
            <Link to="/signup" className="footer__links">
              Register
            </Link>
          </li>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              My Orders
            </Link>
          </li>
        </ul>
        <ul>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              Our App
            </Link>
          </li>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              <button>
                <i class="fab fa-apple"></i> Apple Store
              </button>
            </Link>
          </li>
          <li className="footer__items">
            <Link to="/" className="footer__links">
              <button>
                <i class="fab fa-google-play"></i> Google Play
              </button>
            </Link>
          </li>
        </ul>
        <div className="footer__copyright">
          <p>&copy; 2020. All rights reserved.</p>
          <p>
            Made with <span>❤ Vipul Jain</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
