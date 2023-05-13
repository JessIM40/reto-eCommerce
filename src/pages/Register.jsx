import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/register.css";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="containerRegister">
        <h2 className="register">Regístrate</h2>
        <form action="" className="formRegister">
          <label htmlFor="name">Nombres y Apellidos</label>
          <input type="text" placeholder="Ana Toribio" name="name" />
          <label htmlFor="username">Usuario </label>
          <input type="text" placeholder="anacetoribio" name="username" />
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" placeholder="ana@gmail.com" name="email" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" />
          <div>
            Debes usar al menos: Mínimo 8 caracteres - 1 mayúscula - 1 minúscula - 1
            número - Ningún espacio
          </div>
          <button>REGISTRARME</button>
        </form>
        <p>¿Ya tienes cuenta? <a href="" onClick={()=>navigate("/login")} className="a-login">Inicia Sesión</a></p>
      </div>
      <Footer />
    </>
  );
}

export default Register;
