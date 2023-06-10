import Header from "../componentes/header/Header.jsx";
import Footer from "../componentes/footer/Footer.jsx";

const activar = ()=>{
    console.log("click")
} 

function Home({titulo}){
    
    return(
        <div>
        <Header/>
        <h1>{titulo}</h1>
        <Footer/>
        <button onClick={activar} >Click Aqui</button>
        </div>
    )
}

export default Home