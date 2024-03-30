import { useState } from "react";
import styles from "../Login/Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Lógica para enviar credenciales al servidor y autenticar
      // Si la autenticación es exitosa, redirige al usuario a la página de perfil
      history.push("/profile");
    } catch (error) {
      setError("Usuari i/o Password incorrectes. Torna-ho a provar!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className={styles.contenidor}>
      <h2>LOGIN</h2>
      <div className={styles.grupInput}>
        <label>Usuari:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button onClick={handleLogin}>INICIAR SESSIÓ</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
