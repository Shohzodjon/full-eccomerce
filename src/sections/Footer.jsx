import { LiaTelegramPlane, LiaFacebookF } from "react-icons/lia";
import {BiLogoFacebook} from 'react-icons/bi'
import {FiTwitter, FiInstagram} from 'react-icons/fi';
import {RiLinkedinLine} from 'react-icons/ri'
import QrCode from '../assets/images/qrcode.svg'
import playmarket from '../assets/images/playmarket.png';
import appstore from '../assets/images/appstore.png';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__flex">
          <ul>
            <li>
              <a href="#" className="footer__exclusive__link">
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
          {/* fourth list */}
          <ul>
            <li><a href="#"><b>Download App</b></a></li>
            <li><a href="#">Save $3 with App New User Only</a></li>
            <li>
              <div>
                <img src={QrCode} alt="qr-code" />
                <div className="footer__playmarket">
                  <a href="#"><img src={playmarket} alt="playmarket" /></a>
                  <a href="#"><img src={appstore} alt="appstore" /></a>
                </div>
              </div>
            </li>
            <li>
              <ol>
                <li><a href="#"><LiaFacebookF fontSize="2rem"/></a></li>
                <li><a href="#"><FiTwitter fontSize="2rem"/></a></li>
                <li><a href="#"><FiInstagram fontSize="2rem"/></a></li>
                <li><a href="#"><RiLinkedinLine fontSize="2rem"/></a></li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
