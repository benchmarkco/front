const Jumbotron = ({company_name, large_text}) => {
  return (
    <section className="py-5 text-center container">
        <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold">{ company_name }</h1>
            <p className="lead text-muted">{ large_text }</p>
            <p>
            <a href="https://linktr.ee/benchmark_co" className="btn btn-success my-2 m-1">Siguenos</a>
            <a href="https://github.com/benchmarkco" className="btn btn-outline-success my-2">Contribuir</a>
            </p>
        </div>
        </div>
    </section>
  )
}

export default Jumbotron