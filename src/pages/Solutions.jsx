import Navbar from '../components/Navbar'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import Footer from '../components/Footer'

import ImageTax from '../assets/img/taxes.jpeg'
import ImagePortfolio from '../assets/img/portfolio.png'
import ImageMonteCarlo from '../assets/img/montecarlo.png'

const Solutions = () => {
    return (
        <>
        <Navbar company_name = { "Benchmark ®" }/>
        <CardContainer>
            <Card img_link= { ImageTax } 
                title="Conversor de Tasas"
                description = "Que tasa de interes deberia aplicarte"
                created_by= "Benchmark"
                goto_link = "/front/tax"
            />
        </CardContainer>

        </>
      )
}

export default Solutions