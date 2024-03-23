import styles from "./BurgerButton.module.css";

function BurgerButton() {
  return (
    <div className={styles.row}>
      <div className={styles.threeCol}>
        <div className={styles.hamburger} id={styles.hamburger5}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>
    </div>
  );
}

export default BurgerButton;
