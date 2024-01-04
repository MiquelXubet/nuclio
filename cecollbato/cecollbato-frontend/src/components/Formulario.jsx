import { useForm } from "react-hook-form"
import { createNouJugador } from "../Api/jugadors"

const Formulari = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = handleSubmit(async(data) => {
        const {Nom, Primer_Cognom, Segon_Cognom, DNI, Any_de_naixement, Adreça, Número, Pis, Porta, Població, Codi_Postal, Nom_del_Pare, Nom_de_la_Mare, Telèfon_del_Pare, Telèfon_de_la_Mare, Correu_electrònic} = data
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
        }
    const result = await createNouJugador(nouJugador)
        console.log(result.data)
    })

  return (
    <div>
        <form onSubmit={onSubmit}>
          <label>
              Nom del Jugador
            <input 
              type= "text"
              name= "Nom"
              placeholder="Nom"
              {...register("Nom", {require:true})}/>
          </label>
          <label>
              Primer Cognom del Jugador
            <input 
                type= "text"
                name= "Primer_Cognom"
                placeholder="Primer Cognom"
                {...register("Primer_Cognom", {require:true})}/>
          </label>
          <label>
            Segon Cognom del Jugador
            <input 
                type= "text"
                name= "Segon_Cognom"
                placeholder="Segon Cognom"
                {...register("Segon_Cognom", {require:true})}/>
          </label>
          <label>
              DNI del Jugador
            <input 
                type= "text"
                name= "DNI"
                placeholder="DNI"
                {...register("DNI", {require:true})}/>
          </label>
          <label>
              Any de Naixement
            <input 
                type= "text"
                name= "Any_de_naixement"
                placeholder="Any de naixement"
                {...register("Any_de_naixement", {require:true})}/>
          </label>
          <label>
              Adreça
            <input 
                type= "text"
                name= "Adreça"
                placeholder="Adreça"
                {...register("Adreça", {require:true})}/>
          </label>
          <label>
              Número
            <input 
                type= "text"
                name= "Número"
                placeholder="Número"
                {...register("Número", {require:true})}/>
          </label>
          <label>
              Pis
            <input 
                type= "text"
                name= "Pis"
                placeholder="Pis"
                {...register("Pis", {require:true})}/>
          </label>
          <label>
              Porta
            <input 
                type= "text"
                name= "Porta"
                placeholder="Porta"
                {...register("Porta", {require:true})}/>
          </label>
          <label>
            Població
            <input 
                type= "text"
                name= "Població"
                placeholder="Població"
                {...register("Població", {require:true})}/>
          </label>
          <label>
              Codi Postal
            <input 
                type= "text"
                name= "Codi_Postal"
                placeholder="Codi Postal"
                {...register("Codi_Postal", {require:true})}/>
          </label>
          <label>
              Nom del Pare
            <input 
                type= "text"
                name= "Nom_del_Pare"
                placeholder="Nom del Pare"
                {...register("Nom_del_Pare", {require:true})}/>
          </label>
          <label>
              Nom de la Mare
            <input 
                type= "text"
                name= "Nom_de_la_Mare"
                placeholder="Nom de la mare"
                {...register("Nom_de_la_Mare", {require:true})}/>
          </label>
          <label>
            Telèfon del Pare
            <input 
                type= "number"
                name= "Telèfon_del_Pare"
                placeholder="Telèfon"
                {...register("Telèfon_del_Pare", {require:true})}/>
          </label>
          <label>
              Telèfon de la Mare
            <input 
                type= "text"
                name= "Telèfon_de_la_Mare"
                placeholder="Telèfon"
                {...register("Telèfon_de_la_Mare", {require:true})}/>
          </label>
          <label>
              Data reconeixement mèdic
            <input 
                type= "text"
                name= "Data_reconeixement_mèdic"
                placeholder="Data del reconeixement mèdic"
                {...register("Data_reconeixement_mèdic", {require:true})}/>
          </label>
            <label>
              Correu electrònic
            <input 
                type= "text"
                id="Correu_electrònic"
                name= "Correu_electrònic"
                placeholder="Correu electrònic"
                {...register("Correu_electrònic", {require:true})}/>
          </label>
        <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Formulari
