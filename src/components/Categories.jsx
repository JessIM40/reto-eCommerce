import "../style/homeCategories.css";
import { useNavigate } from "react-router-dom";

function Categories() {
     const navigate = useNavigate()
     const category = ["smartphones","laptops","fragrances", "skincare", "groceries", "home-decoration" ]

  return (

    <section className="containerCategories">
      <div>
        <i className="fi fi-ts-mobile-notch"></i>
        <a href="" onClick={()=> navigate(`/category/${category[0]}`)}>CELULARES</a>
      </div>
      <div>
        <i className="fi fi-ts-laptop-code"></i>
        <a href="" onClick={()=> navigate(`/category/${category[1]}`)}>LAPTOPS</a>
      </div>
      <div>
        <i className="fi fi-tr-air-freshener"></i>
        <a href="" onClick={()=> navigate(`/category/${category[2]}`)}>FRAGANCIAS</a>
      </div>
      <div>
        <i className="fi fi-rs-cream"></i>
        <a href="" onClick={()=> navigate(`/category/${category[3]}`)}>CUIDADO DE LA PIEL</a>
      </div>
      <div>
        <i className="fi fi-ts-mug-hot-alt"></i>
        <a href="" onClick={()=> navigate(`/category/${category[4]}`)}>COMESTIBLES</a>
      </div>
      <div>
        <i className="fi fi-tr-home-heart"></i>
        <a href="" onClick={()=> navigate(`/category/${category[5]}`)}>DECORACIÓN PARA EL HOGAR</a>
      </div>
    </section>
  );
}

export default Categories;
