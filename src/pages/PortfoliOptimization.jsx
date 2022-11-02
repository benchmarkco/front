import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import Portfolio from '../components/PortfolioOptimization/Portfolio'

function TaxConvertion() {
  return (
    <>
    <Navbar company_name = { "Benchmark ®" }/>
    <Jumbotron company_name={"Benchmark: Optimización de portafolios de inversión"} 
               large_text = {"Un inversionista racional trata de maximizar su rentabilidad y minimizar el riesgo asociado."}/>
    <hr></hr>
    <Portfolio/>
    <Footer/>
    </>
  )
}

export default TaxConvertion
