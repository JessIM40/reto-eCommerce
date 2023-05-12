import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductQuantity from "../components/ProductQuantity";
import BuyButton from "../components/BuyButton";
import ShareProduct from "../components/ShareProduct";
import {uniqueProduct} from "../request/fetching.js";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../style/product.css"


function Product() {
    const [productito, setProductito] = useState(null)
    const params = useParams()
    useEffect(() => {
        uniqueProduct(params.id, setProductito)
    }, [])

    return (
        <>
            <Header />
            <section>
            {productito!=null ? 
            (<div className='productito'>
            <img src={productito.images[0]}/>
            <strong>{productito.title}</strong>
            <strong>${productito.price}</strong>
            <p>{productito.description}</p></div>)

            :("no hay producto")
        }
            </section>
            <ProductQuantity />
            <BuyButton />
            <ShareProduct />
            <Footer />
        </>
    )
}

export default Product