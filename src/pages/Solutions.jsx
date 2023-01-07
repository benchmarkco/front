import Navbar from '../components/Navbar'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'

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
                created_by= "Basico"
                goto_link = "/front/tax"
            />
            <Card img_link= { ImageTax } 
                title="Statics"
                description = "Eviews copy ®"
                created_by= "Avanzado"
                goto_link = "/front/eviews"
            />
        </CardContainer>

        </>
      )
}

export default Solutions