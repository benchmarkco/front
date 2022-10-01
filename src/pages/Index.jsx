import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import Footer from '../components/Footer'

function Index() {
  return (
    <>
    <Navbar company_name = { "Benchmark ®" }/>
    <Jumbotron company_name = { "Benchmark ®" } 
               large_text = { "Somos un grupo de DataNerds, democratizando el conocimiento en Finanzas, Actuaria y temas relacionados a Ciencia de Datos con el uso de tecnologia Cloud"}
                />
    <CardContainer>
        <Card img_link="https://cdn.pixabay.com/photo/2020/12/11/21/14/naruto-5823848_960_720.png" 
              title="Conversor de tasas de interes"
              description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quam "
              created_by= "Santiago Tamayo - AndresFerro"
              goto_link = "/front/tax"
        />
        <Card img_link="https://cdn.pixabay.com/photo/2020/12/11/21/14/naruto-5823848_960_720.png" 
              title="Optimizador de portafolios de inversion"
              description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quam "
              created_by= "AndresFerro"
              goto_link = "/tax"
        />
        <Card img_link="https://cdn.pixabay.com/photo/2020/12/11/21/14/naruto-5823848_960_720.png" 
              title="Simulacion Montecarlo Tasas Cambio"
              description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quam "
              created_by= "Sebas Paristian - AndresFerro"
              goto_link = "/tax"
        />
    </CardContainer>
    <Footer/>
    </>
  )
}

export default Index
