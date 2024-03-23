import styles from "./Home.module.css";
import IconForm from "./IconFormSelect";
import IconShirt from "./IconShirtSelect";
import IconInfo from "./IconInformationSelect";

function Home() {
  return (
    <div>
      <section id={styles.hero}>
        <div>
          <h1>FUTSAL COLLBATÓ</h1>
        </div>
        <div>
          <button>
            INSCRIPCIONS<br></br> OBERTES
          </button>
        </div>
      </section>
      <section id={styles.contenedorCajas}>
        <div className={styles.cajaInscripcion}>
          <div className={styles.cabecera}>
            <IconForm />
            <h3>INSCRIPCIONS</h3>
          </div>
          <div className={styles.parrafo}>
            <p>Inscripcions jugadors</p>
            <p>Informació alta federativa</p>
          </div>
          <button>Més informació</button>
        </div>
        <div className={styles.cajaInformacion}>
          <div className={styles.cabecera}>
            <IconInfo />
            <h3>INFORMACIÓ EQUIPS</h3>
          </div>
          <div className={styles.parrafo}>
            <p>Horaris dentrenament temporada</p>
            <p>Horaris de partits</p>
          </div>
          <button>Més informació</button>
        </div>
        <div className={styles.cajaEquipacion}>
          <div className={styles.cabecera}>
            <IconShirt />
            <h3>EQUIPACIÓ JUGADORS</h3>
          </div>
          <div className={styles.parrafo}>
            <p>Equipació Partit</p>
            <p>Equipació de carrer</p>
          </div>
          <button>Més informació</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
