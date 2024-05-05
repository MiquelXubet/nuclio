import axios from "axios";

const baseUrl = "htttp://localhost:8000/api/login";

const login = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};

export default { login };
