import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/login.css"

function Login() {

    const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="containerLogin">
        <h2 className="login">Inicia Sesión</h2>
        <form action="" className="formLogin">
          <label htmlFor="username">Usuario </label>
          <input type="text" placeholder="anacetoribio" name="username" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" />
        
          <button>INGRESAR</button>
        </form>
        <p>
          ¿No tienes cuenta?{" "}
          <a href="" onClick={() => navigate("/register")} className="a-login">
            Regístrate
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Login;
