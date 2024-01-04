import axios from "./axios";

export const createNouJugador = (data) => axios.post("/jugadors/create", data)