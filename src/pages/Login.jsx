import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/login.css";
import { loginUser } from "../request/fetching";

function Login() {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [errorCredential, setErrorCredential] = useState("")

  const handleInput = (e) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
    console.log(auth);
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (auth.username == "") {
      validationErrors.username = "Debe ingresar su nombre de usuario";
    } else if (auth.password == "") {
      validationErrors.password = "Debe ingresar su contraseña";
    } else if (auth.password.length < 7) {
      validationErrors.password = "Contraseña inválida";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length == 0) {

        const credentials =  await loginUser(auth);

        if(credentials.message == "Invalid credentials"){
          setErrorCredential("Usuario o contraseña inválida")
        } else if (credentials.token != ""){
         console.log("ingreso con exito")
          console.log(credentials.token)
          console.log(credentials.username)
          navigate("/");
          Swal.fire({
          icon: "success",
          title: "Paulette",
          text: `Hola ${auth.username}, ¡Bienvenido(a) de nuevo!`,
          confirmButtonText: "Continuar",
          customClass: {
            title: "titleWelcome",
            popup: "popupWelcome",
            confirmButton: "btnWelcome",
          },
        });
        }

      
    }
  };

  return (
    <>
      <Header />
      <div className="containerLogin">
        <h2 className="login">Inicia Sesión</h2>
        <form action="" onSubmit={handleSubmit} className="formLogin">
          <label htmlFor="username">Usuario </label>
          <input
            type="text"
            onChange={handleInput}
            value={auth.username}
            placeholder="anacetoribio"
            name="username"
          />
          <span className="errorLogin">{errors.username}</span>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            onChange={handleInput}
            value={auth.password}
            name="password"
            autoComplete="off"
          />
          <span className="errorLogin">{errors.password}</span>
          <span className="errorCredential">{errorCredential}</span>
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
