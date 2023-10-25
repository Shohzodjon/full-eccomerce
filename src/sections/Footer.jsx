import { LiaTelegramPlane } from "react-icons/lia";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__flex">
          <ul>
            <li>
              <a href="#">
                <b>Exclusive</b>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Subscribe</span>
              </a>
            </li>
            <li>
              <a href="#">Get 10% off your first order</a>
            </li>
            <li>
              <label htmlFor="user__email">
                <input type="email" placeholder="Enter your email" />
                <LiaTelegramPlane />
              </label>
            </li>
          </ul>
          {/* first list */}
          <ul>
            <li>
              <a href="#">
                <b>Support</b>
              </a>
            </li>
            <li>
              <a href="#">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
            </li>
            <li>
              <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            </li>
            <li>
              <a href="++88015-88888-9999">+88015-88888-9999</a>
            </li>
          </ul>
          {/* second list */}
          <ul>
            <li>
              <a href="#">
                <b>Account</b>
              </a>
            </li>
            <li>
              <a href="#">My account</a>
            </li>
            <li>
              <a href="#">Login / Register</a>
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
          {/* thirtd list */}
          <ul>
            <li>
              <a href="#">
                <b>Quick Link</b>
              </a>
            </li>
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
        </div>
      </div>
    </footer>
  );
};
export default Footer;
