import { useEffect, useState } from "react";
import { categorySmartPhone } from "../request/fetching";
import { useParams } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Searching from "../components/Searching";
import "../style/category.css"

function Category() {
  const [products, setProducts] = useState(null);

  const params = useParams();
  console.log(params.category);

  useEffect(() => {
    categorySmartPhone(params.category, setProducts);
  }, []);
  return (
    <>
      <Header />
      <section className="container-products-categories">
        <Searching/>
        <div className="productsDifCategory">
        {products == null
          ? "Loading..."
          : products.map((product) => {
              //console.log(product);
              return <CardProduct key={product.id} producto={product} />;
            })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Category;
