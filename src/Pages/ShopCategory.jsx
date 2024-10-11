import { useContext } from "react";
import styles from "./CSS/ShopCategory.module.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

function ShopCategory({ banner, category }) {
  const { all_products } = useContext(ShopContext);

  return (
    <div className={styles["shop__category"]}>
      <img
        className={styles["shop__category--banner"]}
        src={banner}
        alt="banner"
      />

      <div className={styles["shop__category--indexsort"]}>
        <p>
          <span>Showing 1 - 12</span> out of 36 products
        </p>

        <button className={styles["btn__sort"]}>Sort by &darr;</button>
      </div>

      <div className={styles["shop__category--products"]}>
        {all_products.map((item, i) => {
          if (category === item.category) {
            return (
              <Item
                item={item}
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <button className={styles["btn__loadmore"]}>Explore more</button>
    </div>
  );
}

export default ShopCategory;
