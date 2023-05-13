import { useEffect, useState } from "react";
import { getProducts } from "../request/fetching.js";
import Header from "../components/Header";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import "../style/home.css";

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


      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: "atuny0",
          password: "9uQFF1Lh",
          // expiresInMins: 60, // optional
        })
      })
      .then(res => res.json())
      .then(console.log);
      
      fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: 'Ana',
    lastName: 'Toribio',
    age: 24,
    /* other user data */
  })
})
.then(res => res.json())
.then(console.log);
            

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <>
      <Header />

      <main>
        <section></section>

        <section className="productos">
          <input
            type="search"
            value={search}
            placeholder="Search"
            onChange={searcher}
          />
          <img alt="Lupa" />
          <p>home</p>
          {products == null
            ? "Loading..."
            : results.map((product) => {
                //console.log(product);
                return <CardProduct key={product.id} producto={product} />;
              })}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
