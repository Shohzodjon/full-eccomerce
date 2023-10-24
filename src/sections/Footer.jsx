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
        </div>
      </div>
    </footer>
  );
};
