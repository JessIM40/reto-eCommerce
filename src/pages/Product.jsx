import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductQuantity from "../components/ProductQuantity";
import BuyButton from "../components/BuyButton";
import ShareProduct from "../components/ShareProduct";
import { uniqueProduct } from "../request/fetching.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/product.css";

function Product() {
  const [productito, setProductito] = useState(null);
  const params = useParams();

  useEffect(() => {
    uniqueProduct(params.id, setProductito);
  }, []);

  return (
    <>
      <Header />
      <section className="container-page-product">
        {productito != null ? (
          <div className="productito">
            <img src={productito.images[0]} className="imgPrincipal" />
            <h3>{productito.title}</h3>
            <p><strong className="cost">${productito.price}</strong></p>
            <p>{productito.description}</p>

            {productito.images.length >= 4 ? (
              <div className="imagesProduct">
                <img src={productito.images[1]} alt={productito.title} />
                <img src={productito.images[2]} alt={productito.title} />
                <img src={productito.images[3]} alt={productito.title} />
              </div>
            ) : null}
          </div>
        ) : (
          "Loading"
        )}
      </section>
      <ProductQuantity />
      <BuyButton />
      <ShareProduct />
      <Footer />
    </>
  );
}

export default Product;
