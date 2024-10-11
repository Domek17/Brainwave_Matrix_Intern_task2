import { Link } from "react-router-dom";
import styles from "./Item.module.css";

function Item({ image, name, new_price, old_price, id }) {
  return (
    <div className={styles["item"]}>
      <Link to={`/product/${id}`} style={{ margin: 0 }}>
        <img
          src={image}
          alt="woman in a dress"
          onClick={window.scrollTo(0, 0)}
        />
      </Link>

      <div className={styles["item__prices"]}>
        <p>{name}</p>
        <div className={styles["item__price--new"]}>${new_price}</div>
        <div className={styles["item__price--old"]}>${old_price}</div>
      </div>
    </div>
  );
}

export default Item;
