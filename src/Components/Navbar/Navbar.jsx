import styles from "./Navbar.module.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className={styles["navbar"]}>
      <Link
        to="/"
        className={styles["nav__logo"]}
        style={{ textDecoration: "none" }}
      >
        <img src={logo} alt="logo" />
        <p>SHOP NOW</p>
      </Link>

      <ul className={styles["nav__menu"]}>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/mens">Men</Link>
        </li>
        <li>
          <Link to="/womens">Women</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      <div className={styles["nav__login--cart"]}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart icon" />
        </Link>

        <div className={styles["nav__cart--count"]}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
