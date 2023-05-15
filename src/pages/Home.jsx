import { useEffect, useState } from "react";
import { getProducts } from "../request/fetching.js";
import Header from "../components/Header";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import "../style/home.css";
import Searching from "../components/Searching.jsx";
import Categories from "../components/Categories.jsx";

function Home() {
  const [products, setProducts] = useState(null);

  const [search, setSearch] = useState("");

  const searcher = (value) => {
    setSearch(value);
    console.log(value);
  };

  const results = !search
    ? products
    : products.filter((product) =>
        product.title.toLowerCase().includes(search.toLocaleLowerCase())
      );


  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="containerPromos">PROMOS</section>

        <Categories></Categories>

        <section className="padreProductos">
          <Searching onSearch={searcher}></Searching>
          <div className="containerProducts">
            {products == null
              ? "Loading..."
              : results.map((product) => {
                  //console.log(product);
                  return <CardProduct key={product.id} producto={product} />;
                })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
