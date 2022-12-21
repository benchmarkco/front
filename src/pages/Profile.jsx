import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import TableContributors from '../components/TopContributors/TableContributors'
import ImageTax from '../assets/img/tax.png'

function Profile() {
  return (
    <>
    <Navbar company_name = { "Benchmark ®" }/>

    <div className="container my-3">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center flex-column bg-dark mx-2 rounded-5"> 
                    <div className='d-flex align-items-center'>

                    <img  className="img-thumbnail rounded-circle img-fluid my-3 align-items-center" 
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQHe2SopuFt7cA/profile-displayphoto-shrink_400_400/0/1526669296827?e=1672876800&v=beta&t=wN5bOvQjwkq3r_tA0acvXyggDT8v1yWjzCYNQhaCgwI"
                        alt="" 
                        style={{ width: "10rem", height: "10rem" }}
                        />
                    </div>
                    <p className="h2 text-center text-light fw-bolder"> Javier Andres</p>
                    <p className="h3 text-center text-light fw-bolder"> Ferro Perez</p>
                    <p className="h6 text-center text-light fw-bold"> Est. Maestria finanzas, Ingeniero Financiero</p>
                    
                    
                    <p className="text-light lh-sm text-wrap">Amplia experiencia en analisis de informacion/finanzas
                        en diferentes sectores (IT, Consumo, Financiero) donde
                        he sido responsable de crear, liderar y mantener
                        proyectos de gran impacto para diferentes regiones de
                        latam.
                        <br/><br/>
                        Me gusta trabajar en ambientes retadores, con alta
                        exigencia por los objetivos y el aprendizaje de nuevos
                        conceptos. Creo profundamente en el buen clima laboral
                        y las relaciones de valor con las personas.
                        <br/><br/>
                        Tengo un data-driven mindset, me considero un alumno
                        constante, además que me apasiona la docencia.
                        Actualmente trabajo/estudio/enseño en áreas
                        relacionadas con (BigData, Fintech, Quant, BI/BA) líneas
                        que me apasionan notablemente.</p>
                    
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 bg-light rounded-5"> 
                    <p className="text-center fw-bolder h4 my-2">Experiencia Laboral</p>
                    <p className="text-dark justify-content-start">
                        <img className='rounded-5' src='https://eodhistoricaldata.com/img/logos/US/MELI.png'
                                        style={{ width: "3rem", height: "3rem" }}
                                        ></img>
                        
                        <span className='fw-bolder h5 mx-3'>Senior Data Analyst </span>  <span className='fs-6 fw-lighter'>| Mercado Libre  - Actualidad</span>
                    </p>
                    <ul>
                        <li> Líder técnico de implementación en arquitecturas cloud (GCP, Bigquery, tableau, Cloud Data flow, Flask).
                             Data engineer/ Data analyst. 
                        </li>
                        <li> Líder técnico de implementación en arquitecturas cloud (GCP, Bigquery, tableau, Cloud Data flow, Flask).
                             Data engineer/ Data analyst. 
                        </li>
                        <li> Líder técnico de implementación en arquitecturas cloud (GCP, Bigquery, tableau, Cloud Data flow, Flask).
                             Data engineer/ Data analyst. 
                        </li>
                        <li> Líder técnico de implementación en arquitecturas cloud (GCP, Bigquery, tableau, Cloud Data flow, Flask).
                             Data engineer/ Data analyst. 
                        </li>
                    </ul>
                    <br></br>
                    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <br></br>
                    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>

        <div className="row my-3">
            <div className="col-lg-4 col-md-4 col-sm-12 bg-dark rounded-5 mx-2">
            <p className="h5 fw-bolder text-center text-light my-3"> CONTACTO</p>
                    <div className="bg-white form-control my-2"> </div>


                    <p className="text-light text-start ali">
                        <button className='btn btn-light btn-sm rounded-5 mx-1'> 
                        <i className="fa-brands fa-linkedin"></i>
                        </button> 
                    https://www.linkedin.com/in/andresferro6/
                    </p>

                    <p className="text-light justify-content-start">
                        <button className='btn btn-light btn-sm rounded-5 mx-1'> 
                        <i className="fa-brands fa-github"></i>
                        </button> 
                    https://github.com/andresferro6
                    </p>

                    <p className="text-light justify-content-start">
                        <button className='btn btn-light btn-sm rounded-5 mx-1'> 
                        <i className="fa fa-envelope"></i>
                        </button> 
                    andresferro6@hotmail.com
                    </p>

                    <p className="text-light justify-content-start">
                        <button className='btn btn-light btn-sm rounded-5 mx-1'> 
                        <i className="fa-brands fa-whatsapp"></i>
                        </button> 
                    +57 311 364 25 29
                    </p>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-12 bg-light rounded-5">

            </div>

        </div>

    </div>
    <Footer/>
    </>
  )
}

export default Profile
