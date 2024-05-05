import styles from "./Footer.module.css";
import Youtube from "./Youtube";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenidorAdalt}>
        <div className={styles.logosRrss}>
          <p>Segueix-nos a Xarxes Socials</p>
          <div className={styles.icons}>
            <Youtube />
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>

      <div className={styles.contenidorAbaix}>
        <p>
          Centre dEsports Collbató 2024
          <Copyright />
        </p>

        <div className={styles.links}>
          <Link to="#">Termes i Condicions</Link>
          <Link to="#">Política de Privacitat</Link>
          <Link to="#">Política de Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
