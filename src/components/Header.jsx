import { useNavigate } from "react-router-dom";
import "../style/header.css";
// import back from "../assets/atras.png";
// import shoppingCart from "../assets/carrito-de-compras.png"

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <section className="logo">
        <button className="backBtn">
          {/* <img className="imgBack" src={back} alt="" /> */}
          <i className="fi fi-sr-angle-left"></i>
        </button>
        <h1 onClick={() => navigate("/")}>Paulette</h1>
      </section>
      <nav>
        <button
          className="buttonLoginRegister"
          onClick={() => navigate("/register")}
        >
          INGRESA/REGÍSTRATE
        </button>
        {/* <p>
        Bienvenido User!!
    </p> */}
        <button className="shoppingCartBtn">
          {/* <img className="imgShoppingCart" src={shoppingCart} alt="" /> */}
          <i className="fi fi-rr-shopping-cart"></i>
        </button>
      </nav>
    </header>
  );
}

export default Header;
