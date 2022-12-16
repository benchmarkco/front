import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import TableContributors from '../components/TopContributors/TableContributors'

function TopContributors() {
  return (
    <>
    <Navbar company_name = { "Benchmark ®" }/>
    <Jumbotron company_name={"Benchmark: Nuestro Equipo"} 
               large_text = {"Animate a contruibuir, en el peor escenario, creceras mucho como persona "} 
    />
    <hr></hr>
    <TableContributors/>
    <Footer/>
    </>
  )
}

export default TopContributors
