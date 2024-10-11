import styles from "./NewCollections.module.css";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";

function NewCollections() {
  return (
    <div className={styles["new__collections"]}>
      <h1>NEW COLLECTIONS</h1>

      <hr />

      <div className={styles["collections"]}>
        {new_collection.map((item, i) => (
          <Item
            item={item}
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollections;
