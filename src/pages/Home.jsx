import Header from "../components/Header"
import CardProduct from "../components/CardProduct"
import Footer from "../components/Footer"

function Home(){
    return(
        <>
        <Header/>

        <main>
            <section>
                Carrusel de promociones ASIDE??
            </section>
            
            <section>
            <input type='search' placeholder="Search"/>
            <img alt="Lupa"/>

            <CardProduct/>
            </section>

        </main>

        <Footer/>

        </>
    )
}



export default Home