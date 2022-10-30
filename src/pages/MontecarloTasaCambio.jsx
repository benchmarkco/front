import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'

function TaxConvertion() {
  return (
    <>
    <Navbar company_name = { "Benchmark ®" }/>
    <Jumbotron company_name={"Benchmark: Simulación Montecarlo, tasa cambio"} 
               large_text = {" Este es utilizado para resolver problemas matemáticos complejos a través de la generación de variables aleatorias."}/>
    <hr></hr>
    <h1>Simulación motecarlo</h1>
    <Footer/>
    </>
  )
}

export default TaxConvertion
