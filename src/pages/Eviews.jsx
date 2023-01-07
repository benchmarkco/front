import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NavbarEviews from '../components/Eviews/NavbarEviews'

function TaxConvertion() {
  return (
    <>
    <Navbar company_name = { "Benchmark ®" }/>

    <div className='container my-3'> 
        <NavbarEviews company_name = { "Benchmark ®" }/>

    </div>
    <Footer/>
    </>
  )
}

export default TaxConvertion
