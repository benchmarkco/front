import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import Footer from '../components/Footer'

import ImageTax from '../assets/img/tax.png'
import ImagePortfolio from '../assets/img/portfolio.png'
import ImageMonteCarlo from '../assets/img/montecarlo.png'

function Index() {
  return (
    <>
    <Navbar company_name = { "Benchmark ®" }/>
    <Jumbotron company_name = { "Benchmark ®" } 
               large_text = { "Somos un grupo de DataNerds, democratizando el conocimiento en Finanzas, Actuaria y temas relacionados a Ciencia de Datos con el uso de tecnologia Cloud"}
                />
    <CardContainer>
        <Card img_link= { ImageTax } 
              title="Conversor de tasas de interes"
              description = "En simples palabras, es el precio por el uso del dinero.     "
              created_by= "Santiago Tamayo - AndresFerro"
              goto_link = "/front/tax"
        />
        <Card img_link= { ImagePortfolio }
              title="Optimizador de portafolios de inversion"
              description = "Todos tenemos una inversión buena, pero, cada cuanto?"
              created_by= "AndresFerro"
              goto_link = "/tax"
        />
        <Card img_link= {ImageMonteCarlo}
              title="Simulacion Montecarlo Tasas Cambio"
              description = "Y si no sabemos la direccion del dolar, podemos estimarlo"
              created_by= "Sebastian Paris - Andres Ferro"
              goto_link = "/tax"
        />
    </CardContainer>
    <Footer/>
    </>
  )
}

export default Index
