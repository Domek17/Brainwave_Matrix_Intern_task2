import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <div className={styles["newsletter"]}>
      <h1>Get Exclusive offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>

      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
