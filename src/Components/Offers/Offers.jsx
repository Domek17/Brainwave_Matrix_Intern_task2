import styles from "./Offers.module.css";
import exclusive_image from "../Assets/exclusive_image.png";

function Offers() {
  return (
    <div className={styles["offers"]}>
      <div className={styles["offers__left"]}>
        <h1>Exclusive Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check now</button>
      </div>

      <div className={styles["offers__right"]}>
        <img src={exclusive_image} alt="exclusive" />
      </div>
    </div>
  );
}

export default Offers;
