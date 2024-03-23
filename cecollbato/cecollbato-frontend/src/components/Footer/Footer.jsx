import styles from "./Footer.module.css";
import Youtube from "./Youtube";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenedorArriba}>
        <div className={styles.logosRrss}>
          <p>Síguenos en Redes Sociales</p>
          <div className={styles.icons}>
            <Youtube />
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>

      <div className={styles.contenedorAbajo}>
        <p>
          Centre dEsports Collbató 2024
          <Copyright />
        </p>

        <div className={styles.links}>
          <Link to="#">Contacta con nosotros</Link>
          <Link to="#">Términos y Condiciones</Link>
          <Link to="#">Política de Privacidad</Link>
          <Link to="#">Política de Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
