import { BiSearch } from "react-icons/bi";
import { PiHeart } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar__flex__box">
          <h1>Exclusive</h1>
          <ul className="navbar__link__list">
            <li>
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Sing up
              </a>
            </li>
          </ul>
          <ul className="navbar__">
            <li>
              <label htmlFor="navbar__search__input">
                <input id="navabr__search__input" type="text" />
                <BiSearch />
              </label>
            </li>
            <li>
              <PiHeart />
            </li>
            <li>
              <MdOutlineLocalGroceryStore />
            </li>
            <li>
              <LuUser />
            </li>
            <li>sasasasas</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
