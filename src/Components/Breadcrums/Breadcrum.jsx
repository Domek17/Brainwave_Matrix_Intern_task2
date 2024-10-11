import styles from "./Breadcrum.module.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

function Breadcrum({ product }) {
  return (
    <div className={styles["breadcrum"]}>
      Home <img src={arrow_icon} alt="arrow icon" /> SHOP{" "}
      <img src={arrow_icon} alt="arrow icon" />
      {product.category} <img src={arrow_icon} alt="arrow icon" />
      {product.name}
    </div>
  );
}

export default Breadcrum;
