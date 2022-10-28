import ModalButton from './Modal'


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
                       body = {<div className="embed-responsive embed-responsive-16by9">
                       <iframe className="embed-responsive-item" src="https://linktr.ee/benchmark_co" allowfullscreen></iframe>
                     </div>}
              />
              <ModalButton buttonColor={"outline-success"}
                       textButton="Contribuir" 
                       title="¿Cómo contribuir?"
              />
              </p>
          </div>
        </div>
    </section>
  )
}

export default Jumbotron