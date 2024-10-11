import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import styles from "./CartItemsDown.module.css";

function CartItemsDown() {
  const { getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className={styles["cart__items--down"]}>
      <div className={styles["cart__items--totals"]}>
        <h1>Cart Totals</h1>

        <div>
          <div className={styles["cart__items--total-item"]}>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>

          <hr />

          <div className={styles["cart__items--total-item"]}>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>

          <hr />

          <div className={styles["cart__items--total-item"]}>
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>

        <button>PROCEED TO CHECKOUT</button>
      </div>

      <div className={styles["cart__items--promo-code"]}>
        <p>If you have a promo code, Enter it here</p>

        <div className={styles["cart__items--promo-box"]}>
          <input type="text" placeholder="promo code" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CartItemsDown;
