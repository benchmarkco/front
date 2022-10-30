import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import Footer from '../components/Footer'
import TableContributors from '../components/TopContributors/TableContributors'

function TopContributors() {
  return (
    <>
    <Navbar company_name = { "Benchmark ®" }/>
    <Jumbotron company_name={"Benchmark: TopContributors"} 
               large_text = {"Become contributor or contact one of us"} 
    />
    <hr></hr>
    <TableContributors/>
    <Footer/>
    </>
  )
}

export default TopContributors
