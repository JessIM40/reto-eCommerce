import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/register.css";
import { addUser } from "../request/fetching";
import Swal from "sweetalert2";

function Register() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    firstName: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });

    //console.log(credentials);

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (credentials.firstName == "") {
      validationErrors.firstName = "No olvide colocar su nombre";
    } else if (credentials.username == "") {
      validationErrors.username = "No olvide colocar su nombre de usuario";
    } else if (credentials.email == "") {
      validationErrors.email = "No olvide colocar su correo";
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      validationErrors.email = "Correo inválido";
    } else if (credentials.password == "") {
      validationErrors.password = "No olvide colocar su contraseña";
    } else if (credentials.password.length < 7) {
      validationErrors.password =
        "Contraseña inválida,por favor lea las recomendaciones";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length == 0) {
      addUser(credentials);
      if (addUser) {
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "Paulette",
          text: `Hola ${credentials.firstName}, ¡Bienvenido(a) a nuestra tienda virtual!`,
          confirmButtonText: "Continuar",
          customClass: {
            title: "titleWelcome",
            popup: "popupWelcome",
            confirmButton: "btnWelcome",
          },
        });
        console.log("se logro");
      }
    }
  };

  return (
    <>
      <Header />
      <div className="containerRegister">
        <h2 className="register">Regístrate</h2>
        <form action="" onSubmit={handleSubmit} className="formRegister">
          <label htmlFor="firstName">Nombres y Apellidos</label>
          <input
            type="text"
            value={credentials.firstName}
            onChange={handleInput}
            placeholder="Ana Toribio"
            name="firstName"
            id=""
            autoComplete="off"
          />
          <span className="messageError">{errors.firstName}</span>
          <label htmlFor="username">Usuario </label>
          <input
            type="text"
            value={credentials.username}
            onChange={handleInput}
            placeholder="anacetoribio"
            name="username"
            autoComplete="off"
          />
          <span className="messageError">{errors.username}</span>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            value={credentials.email}
            onChange={handleInput}
            placeholder="ana@gmail.com"
            name="email"
            autoComplete="off"
          />
          <span className="messageError">{errors.email}</span>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            value={credentials.password}
            onChange={handleInput}
            name="password"
            autoComplete="off"
          />
          <span className="messageError">{errors.password}</span>
          <div>
            Debes usar al menos: Mínimo 8 caracteres - 1 mayúscula - 1 minúscula
            - 1 número - Ningún espacio
          </div>
          <button>REGISTRARME</button>
        </form>
        <p>
          ¿Ya tienes cuenta?{" "}
          <a href="" onClick={() => navigate("/login")} className="a-login">
            Inicia Sesión
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Register;
