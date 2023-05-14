import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../request/fetching.js";
import Header from "../components/Header";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import "../style/home.css";
import PromoCarousel from "../components/PromoCarousel.jsx";


function Home() {
  const [products, setProducts] = useState([]);
  const [promos, setPromos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const [search, setSearch] = useState("");
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  
  let results;
  if (selectedCategory == '' && searcher == "") 
  { results = products }

  if (selectedCategory == '' && searcher != "") {
    results = products.filter((product) => product.title.toLowerCase().includes(search.toLocaleLowerCase()))
  }
  if (selectedCategory != '' && searcher == "") {
    results = products.filter((product) => product.category.includes(selectedCategory))
  }
  if (selectedCategory != '' && searcher != "") {
    let resultCategory = products.filter((product) => product.category.includes(selectedCategory))
    results = resultCategory.filter((product) => product.title.toLowerCase().includes(search.toLocaleLowerCase()))
  }
  




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
       <PromoCarousel/>

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

