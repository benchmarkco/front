import ModalButton from './Modal'

import BodySiguenos from "./ModalBody/BodySiguenos";
import BodyContribuir from "./ModalBody/BodyContribuir";


const Jumbotron = ({company_name, large_text}) => {

  const handleClickSiguenos = () => {

  } 
  
  return (
    <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bold">{ company_name }</h1>
              <p className="lead text-muted">{ large_text }</p>
              <p> 
              <ModalButton buttonColor={"success"}
                       textButton="Siguenos" 
                       title="Nuestras Plataformas"
                       body = { <BodySiguenos/> }
                    
              />
              <span className='mx-1'></span>
              <ModalButton buttonColor={"outline-success"}
                       textButton="Contribuir" 
                       title="¿Cómo contribuir?"
                       body = { <BodyContribuir/> }

              />
              </p>
          </div>
        </div>
    </section>
  )
}

export default Jumbotron