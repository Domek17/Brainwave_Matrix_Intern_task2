import styles from "./CSS/LoginSignUp.module.css";

function LoginSignUp() {
  return (
    <div className={styles["login__signup"]}>
      <div className={styles["login__signup--container"]}>
        <h1>Sign Up</h1>

        <div className={styles["login__signup--fields"]}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>

        <button>Continue</button>

        <p className={styles["login__signup--login"]}>
          Already have an account? <span>Login here</span>
        </p>

        <div className={styles["login__signup--agree"]}>
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
