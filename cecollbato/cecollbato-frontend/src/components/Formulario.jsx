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
      <form className="grid grid-cols-3 bg-slate-300 w-full"
        onSubmit={onSubmit}>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Nom del Jugador
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg w-30"
              type= "text"
              name= "Nom"
              placeholder="Nom"
              {...register("Nom", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Primer Cognom del Jugador
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                  type= "text"
                  name= "Primer_Cognom"
                  placeholder="Primer Cognom"
                  {...register("Primer_Cognom", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Segon Cognom del Jugador
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                name= "Segon_Cognom"
                placeholder="Segon Cognom"
                {...register("Segon_Cognom", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              DNI del Jugador
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                name= "DNI"
                placeholder="DNI"
                {...register("DNI", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Any de Naixement
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                name= "Any_de_naixement"
                placeholder="Any de naixement"
                {...register("Any_de_naixement", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Adreça
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                name= "Adreça"
                placeholder="Adreça"
                {...register("Adreça", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Número
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                name= "Número"
                placeholder="Número"
                {...register("Número", {require:true})}/>
          </div>
          <div className="flex flex-col p-4">
            <label className="text-cyan-800 justify-start">
              Pis
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                name= "Pis"
                placeholder="Pis"
                {...register("Pis", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Porta
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                name= "Porta"
                placeholder="Porta"
                {...register("Porta", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Població
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                name= "Població"
                placeholder="Població"
                {...register("Població", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Codi Postal
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                name= "Codi_Postal"
                placeholder="Codi Postal"
                {...register("Codi_Postal", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Nom del Pare
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                name= "Nom_del_Pare"
                placeholder="Nom del Pare"
                {...register("Nom_del_Pare", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Nom de la Mare
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                name= "Nom_de_la_Mare"
                placeholder="Nom de la mare"
                {...register("Nom_de_la_Mare", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
            Telèfon del Pare
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "number"
                name= "Telèfon_del_Pare"
                placeholder="Telèfon"
                {...register("Telèfon_del_Pare", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Telèfon de la Mare
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                name= "Telèfon_de_la_Mare"
                placeholder="Telèfon"
                {...register("Telèfon_de_la_Mare", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Data reconeixement mèdic
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "date"
                name= "Data_reconeixement_mèdic"
                placeholder="Data del reconeixement mèdic"
                {...register("Data_reconeixement_mèdic", {require:true})}/>
          </div>
          <div className="p-4">
            <label className="text-cyan-800 justify-start">
              Correu electrònic
            </label>
            <input className="text-slate-700 m-3 px-3 py-2 border-solid border-2 border-cyan-400 rounded-lg"
                type= "text"
                id="Correu_electrònic"
                name= "Correu_electrònic"
                placeholder="Correu electrònic"
                {...register("Correu_electrònic", {require:true})}/>
          </div>
          <button className="text-cyan-700 m-3 p-3 bg-cyan-400 border-2 border-solid rounded-lg" 
            type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Formulari
