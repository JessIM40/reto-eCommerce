import React, { useEffect, useState } from "react";
import { getProducts } from "../request/fetching.js";
import Header from "../components/Header";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import "../style/home.css";
import PromoCarousel from "../components/PromoCarousel.jsx";
import { BiSearchAlt } from "react-icons/bi";




function Home() {
  const [products, setProducts] = useState(null);

  const [search, setSearch] = useState("");
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
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
        <PromoCarousel />

        <section className="productos">
          <div className="buscador">
          <input
            type="search"
            value={search}
            placeholder="Search"
            onChange={searcher}
            className="input-buscador"
          />
          <BiSearchAlt className="icon-share" size={"2rem"} />
          </div>
          {products == null
            ? "Loading..."
            : results.map((product) => {
              console.log(product);
              return <CardProduct key={product.id} producto={product} />;
            })}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
