import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.css";
import Escut from "./escut-cec-removebg.png";
import Instagram from "../Footer/Instagram";
import Facebook from "../Footer/Facebook";
import Youtube from "../Footer/Youtube";
import BurgerButton from "../BurgerButton/BurgerButton";

export default function Navbar() {
  const [isClubSubMenuOpen, setIsClubSubMenuOpen] = useState(false);
  const [isEquipsSubMenuOpen, setIsEquipsSubMenuOpen] = useState(false);
  const [isActivitatsSubMenuOpen, setIsActivitatsSubMenuOpen] = useState(false);

  // const [clicked, setClicked] = useState(false);
  // console.log(clicked);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };

  const toggleClubSubMenu = () => {
    setIsClubSubMenuOpen(!isClubSubMenuOpen);
    setIsEquipsSubMenuOpen(false);
    setIsActivitatsSubMenuOpen(false);
  };

  const toggleEquipsSubMenu = () => {
    setIsEquipsSubMenuOpen(!isEquipsSubMenuOpen);
    setIsClubSubMenuOpen(false);
    setIsActivitatsSubMenuOpen(false);
  };

  const toggleActivitatsSubMenu = () => {
    setIsActivitatsSubMenuOpen(!isActivitatsSubMenuOpen);
    setIsEquipsSubMenuOpen(false);
    setIsClubSubMenuOpen(false);
  };

  return (
    <nav>
      <div className={styles.navBar}>
        <div className={styles.navAdalt}>
          <div className={styles.info}>
            <h3>+34 663 317 626</h3>
            <h3>inscecollbato@gmail.com</h3>
            <h4>Poliesportiu Municipal Martí Gil</h4>
          </div>
          <div className={styles.logosRrss}>
            <Instagram />
            <Facebook />
            <Youtube />
          </div>
          <div className={styles.navLinks}>
            <h3>
              <Link to="/login">Login</Link>
            </h3>
            <h3>
              <Link to="/registre">Registre</Link>
            </h3>
          </div>
        </div>
        <div className={styles.navAbaix}>
          <div className={styles.escut}>
            <Link to="/">
              <img src={Escut} />
            </Link>
          </div>
          <div className={styles.navegador}>
            <div className={styles.menu} onClick={toggleClubSubMenu}>
              <h2>El Club</h2>
              {isClubSubMenuOpen && (
                <div className={styles.subMenu}>
                  <ul>
                    <li>Història</li>
                    <li>Filosofia Esportiva</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.menu} onClick={toggleEquipsSubMenu}>
              <h2>Equips</h2>
              {isEquipsSubMenuOpen && (
                <div className={styles.subMenu}>
                  <ul>
                    <li>Prebenjamins</li>
                    <li>Benjamins</li>
                    <li>Alevins</li>
                    <li>Infantils</li>
                    <li>Cadets</li>
                    <li>Juvenils</li>
                    <li>Sèniors</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.menu} onClick={toggleActivitatsSubMenu}>
              <h2>Activitats</h2>
              {isActivitatsSubMenuOpen && (
                <div className={styles.subMenu}>
                  <ul>
                    <li>Campus de Nadal</li>
                    <li>Campus dEstiu</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.menu}>
              <h2>
                <Link to="/Contacte">Contacte</Link>
              </h2>
            </div>
            <div className={styles.burger}>
              <BurgerButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
