import styles from "./RelatedProducts.module.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

function RelatedProducts() {
  return (
    <div className={styles["related__products"]}>
      <h1>Related products</h1>
      <hr />

      <div className={styles["related__products--item"]}>
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;
