import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import styles from "./CartItems.module.css";
import CartItem from "../CartItem/CartItem";
import CartItemsDown from "../CartItemsDown/CartItemsDown";

function CartItems() {
  const { all_products, cartItems } = useContext(ShopContext);

  return (
    <div className={styles["cart__items"]}>
      <div className={styles["cart__items--format-main"]}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {all_products.map((item) => {
        if (cartItems[item.id] > 0) {
          return <CartItem item={item} key={item.id} />;
        }
        return null;
      })}

      <CartItemsDown />
    </div>
  );
}

export default CartItems;
