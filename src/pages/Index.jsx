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
    <Jumbotron company_name = { "Prueba Domain ®" } 
               large_text = { 'Somos un grupo de personas "talentosas", democratizando el conocimiento en Finanzas, Actuaria y  Ciencia de Datos con el uso de tecnologia Cloud'}
                />
    <CardContainer background = "bg-dark">
        <Card img_link= { ImageTax } 
              title="BenchSolutions"
              description = "Tenemos el hobby de crear aplicaciones que solucionan problemas cotidianos"
              created_by= "Benchmark"
              goto_link = "/front/solutions"
        />
        <Card img_link= { ImagePortfolio }
              title="BenchLearning"
              description = "¿Te interesa? Aqui te dejamos algunos recursos recomendados para que te capacites"
              created_by= "Benchmark"
              goto_link = "/front/portfolio"
        />
        <Card img_link= {ImageMonteCarlo}
              title="BenchEmpresarios"
              description = "Conoce un poco más sobre el corazón de las empresas y esas historias que hay detras de ellas"
              created_by= "Benchmark"
              goto_link = "/front/montecarlo"
        />
    </CardContainer>
    <Footer/>
    </>
  )
}

export default Index
