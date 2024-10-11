import styles from "./Hero.module.css";
import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.png";

function Hero() {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero__left"]}>
        <h2>NEW ARRIVALS ONLY</h2>

        <div className={styles["hero__hand--box"]}>
          <div className={styles["hero__hand--icon"]}>
            <p>new</p>
            <img src={hand_icon} alt="hand icon" />
          </div>
          <p>collection</p>
          <p>for everybody</p>
        </div>

        <div className={styles["hero__latest--btn"]}>
          <p>&rarr;</p>
        </div>
      </div>

      <div className={styles["hero__right"]}>
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
