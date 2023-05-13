import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../request/fetching.js";
import Header from "../components/Header";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import "../style/home.css";
import { promociones } from "../request/funciones.js";

function Home() {
  const [products, setProducts] = useState(null);
  const [promos, setPromos] = useState([]);
  // const [prodCategory, setProdCategory] = useState(null);
  const [selectedCategory, setSelectCategory] = useState('');

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


  

  // useEffect(() => {
  //   getProductsByCategory(setProdCategory, categoria);
  // }, [products]);


  console.log("PRODUCTOS EXITENTES", products)
  //  let promosio=promociones(products,4);
  //  console.log("PROMOSIONES",promosio)

  const filterBtn = async (category) => {
    await getProductsByCategory(category);
  }





  return (
    <>
      <Header />

      <main>
        <section>Carrusel de promociones ASIDE??</section>
        <div>
          <select value={selectedCategory} onChange={(e) => setSelectCategory(e.target.value)}>
            <option value="">Todas</option>
            <option value="smartphones">smartphones</option>
            <option value="laptops">laptops</option>
            <option value="fragances">fragances</option>
            <option value="skincare">skincare</option>
            <option value="groceries">groceries</option>
            <option value="home-decoration">home-decoration</option>
          </select>
          <p>Opción seleccionada: {selectedCategory}</p>
        </div>

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
              // console.log(product);
              return <CardProduct key={product.id} producto={product} />;
            })
          }
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;

