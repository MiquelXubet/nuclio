import { useForm } from "react-hook-form";
import { createNouJugador } from "../Api/jugadors";
import styles from "./Formulario.module.css";

const Formulari = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    const {
      Nom,
      Primer_Cognom,
      Segon_Cognom,
      DNI,
      Any_de_naixement,
      Adreça,
      Número,
      Pis,
      Porta,
      Població,
      Codi_Postal,
      Nom_del_Pare,
      Nom_de_la_Mare,
      Telèfon_del_Pare,
      Telèfon_de_la_Mare,
      Correu_electrònic,
    } = data;
    const nouJugador = {
      Nom,
      Primer_Cognom,
      Segon_Cognom,
      DNI,
      Any_de_naixement,
      Adreça,
      Número,
      Pis,
      Porta,
      Població,
      Codi_Postal,
      Nom_del_Pare,
      Nom_de_la_Mare,
      Telèfon_del_Pare,
      Telèfon_de_la_Mare,
      Data_reconeixement_mèdic: new Date(Date.now),
      Correu_electrònic,
    };
    const result = await createNouJugador(nouJugador);
    console.log(result.data);
  });

  return (
    <div>
      <form onSubmit={onSubmit} className={styles.formulario}>
        <div>
          <label>Nom del Jugador</label>
          <input
            type="text"
            name="Nom"
            placeholder="Nom"
            {...register("Nom", { require: true })}
          />
        </div>
        <div>
          <label>Primer Cognom del Jugador</label>
          <input
            type="text"
            name="Primer_Cognom"
            placeholder="Primer Cognom"
            {...register("Primer_Cognom", { require: true })}
          />
        </div>
        <div>
          <label>Segon Cognom del Jugador</label>
          <input
            type="text"
            name="Segon_Cognom"
            placeholder="Segon Cognom"
            {...register("Segon_Cognom", { require: true })}
          />
        </div>
        <div>
          <label>DNI del Jugador</label>
          <input
            type="text"
            name="DNI"
            placeholder="DNI"
            {...register("DNI", { require: true })}
          />
        </div>
        <div>
          <label>Any de Naixement</label>
          <input
            type="text"
            name="Any_de_naixement"
            placeholder="Any de naixement"
            {...register("Any_de_naixement", { require: true })}
          />
        </div>
        <div className="p-4">
          <label>Adreça</label>
          <input
            type="text"
            name="Adreça"
            placeholder="Adreça"
            {...register("Adreça", { require: true })}
          />
        </div>
        <div>
          <label>Número</label>
          <input
            type="text"
            name="Número"
            placeholder="Número"
            {...register("Número", { require: true })}
          />
        </div>
        <div>
          <label>Pis</label>
          <input
            type="text"
            name="Pis"
            placeholder="Pis"
            {...register("Pis", { require: true })}
          />
        </div>
        <div>
          <label>Porta</label>
          <input
            type="text"
            name="Porta"
            placeholder="Porta"
            {...register("Porta", { require: true })}
          />
        </div>
        <div>
          <label>Població</label>
          <input
            type="text"
            name="Població"
            placeholder="Població"
            {...register("Població", { require: true })}
          />
        </div>
        <div>
          <label>Codi Postal</label>
          <input
            type="text"
            name="Codi_Postal"
            placeholder="Codi Postal"
            {...register("Codi_Postal", { require: true })}
          />
        </div>
        <div>
          <label>Nom del Pare</label>
          <input
            type="text"
            name="Nom_del_Pare"
            placeholder="Nom del Pare"
            {...register("Nom_del_Pare", { require: true })}
          />
        </div>
        <div>
          <label>Nom de la Mare</label>
          <input
            type="text"
            name="Nom_de_la_Mare"
            placeholder="Nom de la mare"
            {...register("Nom_de_la_Mare", { require: true })}
          />
        </div>
        <div>
          <label>Telèfon del Pare</label>
          <input
            type="number"
            name="Telèfon_del_Pare"
            placeholder="Telèfon"
            {...register("Telèfon_del_Pare", { require: true })}
          />
        </div>
        <div>
          <label>Telèfon de la Mare</label>
          <input
            type="text"
            name="Telèfon_de_la_Mare"
            placeholder="Telèfon"
            {...register("Telèfon_de_la_Mare", { require: true })}
          />
        </div>
        <div>
          <label>Data reconeixement mèdic</label>
          <input
            type="date"
            name="Data_reconeixement_mèdic"
            placeholder="Data del reconeixement mèdic"
            {...register("Data_reconeixement_mèdic", { require: true })}
          />
        </div>
        <div>
          <label>Correu electrònic</label>
          <input
            type="text"
            id="Correu_electrònic"
            name="Correu_electrònic"
            placeholder="Correu electrònic"
            {...register("Correu_electrònic", { require: true })}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulari;
