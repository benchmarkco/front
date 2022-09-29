import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import Footer from '../components/Footer'
import Conversor from '../components/taxConvertion/Conversor'

function TaxConvertion() {
  return (
    <>
    <Navbar company_name = { "Benchmark ®" }/>
    <Jumbotron company_name={"Benchmark: Conversor Tasas"} 
               large_text = {"En simples palabras, es el precio por el uso del dinero que deberá ser pagado por el deudor al prestamista."} 
    />
    <hr></hr>
    <Conversor/>
    <Footer/>
    </>
  )
}

export default TaxConvertion
