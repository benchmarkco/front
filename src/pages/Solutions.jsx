import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import Footer from '../components/Footer'

import ImageTax from '../assets/img/tax.png'
import ImagePortfolio from '../assets/img/portfolio.png'
import ImageMonteCarlo from '../assets/img/montecarlo.png'

const Solutions = () => {
    return (
        <>
        <Navbar company_name = { "Benchmark ®" }/>
        <Jumbotron company_name = { "Benchmark ®" } 
                   large_text = { 'Somos un grupo de personas "talentosas", democratizando el conocimiento en Finanzas, Actuaria y  Ciencia de Datos con el uso de tecnologia Cloud'}
                    />

        <div className="py-5 row bg-success d-flex align-items-center">

            <div className="col-md-3">
            <Card img_link= { ImageTax } 
                        title="Conversor de tasas de interes"
                        description = "Una descripcion cualquiera"
                        created_by= "Benchmark"
                        goto_link = "/front/tax"
                    />

            </div>
            

        </div>
        
        <Footer/>
        </>
      )
}

export default Solutions