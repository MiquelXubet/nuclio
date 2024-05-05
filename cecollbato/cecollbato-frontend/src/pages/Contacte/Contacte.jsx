import styles from "./Contacte.module.css";

function Contacte() {
  return (
    <>
      <div className={styles.contenidor}>
        <h3>CONTACTA AMB NOSALTRES</h3>
        <div className={styles.contenidorPrincipal}>
          <div className={styles.contenidorDreta}>
            <h4>OMPLE EL FORMULARI DE CONTACTE</h4>
            <p className={styles.paragraf}>
              Els camps marcats amb* son obligatoris.
            </p>
            <div className={styles.caixaNomCognom}>
              <div className={styles.caixaNom}>
                <label className={styles.etiqueta}>Nom*</label>
                <input
                  className={styles.inputInfo}
                  type="text"
                  required={true}
                  placeholder=""
                />
              </div>
              <div className={styles.caixaCognom}>
                <label className={styles.etiqueta}>Cognom*</label>
                <input
                  className={styles.inputInfo}
                  type="text"
                  required={true}
                  placeholder=""
                />
              </div>
            </div>
            <div className={styles.caixaEmailTelefon}>
              <div className={styles.caixaEmail}>
                <label className={styles.etiqueta}>Correu Electrònic*</label>
                <input
                  className={styles.inputInfo}
                  type="email"
                  required={true}
                  placeholder=""
                />
              </div>
              <div className={styles.caixaTelefon}>
                <label className={styles.etiqueta}>Telèfon*</label>
                <input
                  className={styles.inputInfo}
                  type="tel"
                  required={true}
                  placeholder=""
                />
              </div>
            </div>
            <div className={styles.assumpte}>
              <label className={styles.etiqueta}>Assumpte:</label>
              <input
                className={styles.fullWidthAssumpte}
                type="text"
                placeholder=""
              />
            </div>
            <div className={styles.missatge}>
              <label className={styles.etiqueta}>Missatge*</label>
              <input
                className={styles.fullWidthMissatge}
                type="text"
                required={true}
                placeholder=""
              />
            </div>
            <button className={styles.boto}>Enviar</button>
          </div>
          <div className={styles.contenidorEsquerra}>
            <h4>POTS CONTACTAR AMB NOSALTRES PER AQUESTS MITJANS</h4>
            <hr />
            <p>+ 34 663 317 626</p>
            <hr />
            <p>infocecollbato@gmail.com</p>
            <hr />
            <p>Pavelló Municipal Martí Gil - Avinguda del Centenari s/n</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacte;
