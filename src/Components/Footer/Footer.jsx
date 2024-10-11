import styles from "./Footer.module.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import facebook_icon from "../Assets/facebook_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <hr />

      <div className={styles["footer__logo"]}>
        <img src={footer_logo} alt="logo" />
        <p>SHOP NOW</p>
      </div>

      <ul className={styles["footer__links"]}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className={styles["footer__social--icons"]}>
        <div className={styles["footer__icons--container"]}>
          <img src={instagram_icon} alt="instagram icon" />
        </div>
        <div className={styles["footer__icons--container"]}>
          <img src={facebook_icon} alt="facebook icon" />
        </div>
        <div className={styles["footer__icons--container"]}>
          <img src={whatsapp_icon} alt="whatsapp icon" />
        </div>
      </div>

      <div className={styles["footer__copyright"]}>
        <hr />
        <p>Copyright &copy; 2024 - All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
