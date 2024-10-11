import styles from "./ProductDisplay.module.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay({ product }) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className={styles["product__display"]}>
      <div className={styles["product__display--left"]}>
        <div className={styles["product__display--img-list"]}>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className={styles["product__display--main-img"]}>
          <img src={product.image} alt="" />
        </div>
      </div>

      <div className={styles["product__display--right"]}>
        <h1>{product.name}</h1>

        <div className={styles["product__display--right-stars"]}>
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>122</p>
        </div>

        <div className={styles["product__display--right-prices"]}>
          <p className={styles["product__display--right-price-old"]}>
            ${product.old_price}
          </p>

          <p className={styles["product__display--right-price-new"]}>
            ${product.new_price}
          </p>

          <p className={styles["product__display--right-description"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quasi
            expedita distinctio quod voluptas hic voluptates enim, cum repellat
            illum?
          </p>

          <div className={styles["product__display--right-size"]}>
            <h1>Select size</h1>

            <div className={styles["product__display--right-sizes"]}>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>

          <button onClick={() => addToCart(product.id)}>ADD TO CART</button>

          <p className={styles["product__display--right-category"]}>
            <span>Category: </span>Women, T-shirt, Crop Top
          </p>
          <p className={styles["product__display--right-category"]}>
            <span>Tags: </span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
