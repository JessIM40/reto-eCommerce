import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductQuantity from "../components/ProductQuantity"
import BuyButton from "../components/BuyButton"
import ShareProduct from "../components/ShareProduct"

function Product(){
    return(
        <>
        <Header/>
        <section>
            <img src="#" alt="Imagen grande del producto" />
            <h3>Nombre del Producto</h3>
            <h2>$ Precio</h2>
            <p>Descripcion del producto</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veritatis voluptates, cum non tempore illum. Ipsam, explicabo maxime odio laudantium dicta sunt porro blanditiis earum tenetur totam voluptatum, omnis eligendi.</p>
        </section>
        <ProductQuantity/>
        <BuyButton/>
        <ShareProduct/>
        <Footer/>
        </>
    )
}

export default Product