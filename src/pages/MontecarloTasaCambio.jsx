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
    <Jumbotron company_name={"Benchmark: Simulación Montecarlo, tasa cambio"} 
               large_text = {" Este es utilizado para resolver problemas matemáticos complejos a través de la generación de variables aleatorias."}/>
    <hr></hr>
    <Conversor/>
    <Footer/>
    </>
  )
}

export default TaxConvertion
