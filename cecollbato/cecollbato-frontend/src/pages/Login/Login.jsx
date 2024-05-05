import { useState } from "react";
import styles from "../Login/Login.module.css";
import loginService from "../../login";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  const handleLogin = async (event) => {
    // Lógica para enviar credenciales al servidor y autenticar
    // Si la autenticación es exitosa, redirige al usuario a la página de perfil
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (error) {
      setError("Usuari i/o Password incorrectes. Torna-ho a provar!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className={styles.contenidor}>
        <h2>LOGIN</h2>
        <div className={styles.grupInput}>
          <label>Usuari:</label>
          <input
            type="email"
            value={username}
            onChange={(target) => setUsername(target.value)}
            placeholder="Email"
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(target) => setPassword(target.value)}
            placeholder="Password"
          />
        </div>
        <button>INICIAR SESSIÓ</button>
        {error && <p>{error}</p>}
      </div>
    </form>
  );
}

export default Login;
