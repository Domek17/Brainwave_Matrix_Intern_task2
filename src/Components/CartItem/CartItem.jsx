import styles from "./CartItem.module.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

function CartItem({ item }) {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div>
      <div className={styles["cart__item--format"]}>
        <img
          src={item.image}
          alt=""
          className={styles["cart__item--product-icon"]}
        />
        <p>{item.name}</p>
        <p>${item.new_price}</p>
        <button className={styles["cart__item--quantity"]}>
          {cartItems[item.id]}
        </button>
        <p>${item.new_price * cartItems[item.id]}</p>
        <img
          src={remove_icon}
          alt="remove"
          className={styles["cart__item--remove-icon"]}
          onClick={() => removeFromCart(item.id)}
        />
      </div>

      <hr />
    </div>
  );
}

export default CartItem;
