import Header from "../components/Header"
import CardProduct from "../components/CardProduct"
import Footer from "../components/Footer"
import "../style/home.css"


import { useEffect, useState } from "react"
import {getProducts} from "../request/fetching.js";

function Home() {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        getProducts(setProducts);
    }, []);


    return (
        <>
            <Header />

            <main>
                <section>
                    Carrusel de promociones ASIDE??
                </section>

                <section className="productos">
                    <input type='search' placeholder="Search" />
                    <img alt="Lupa" />
                    <p>home</p>
                    {
                        products == null
                            ? "Loading..."
                            : (products.map((product) => {
                                console.log(product)
                                return (
                                    <CardProduct key={product.id}
                                    producto={product}
                                    />
                                        
                                    
                                )
                            }))
                    }

                </section>

            </main>

            <Footer />

        </>
    )
}



export default Home