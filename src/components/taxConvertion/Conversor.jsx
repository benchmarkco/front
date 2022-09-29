import React from 'react'

const Conversor = () => {
  return (
    <div className='container'>
        <div className="row g-5">
            <div className="col-md col-lg">
                <form className="needs-validation" noValidate>
                    <div className="row g-3">
                        <div className="col-sm-12">
                            <label htmlFor="firstName" className="form-label fw-bolder">Tipo de interes</label>
                            <select id="tipo" className="form-select" aria-label="Default select example">
                            <option selected>Selecciona una opcion</option>
                            <option value={1} className="CONVERSION DE INTERES NOMINAL VENCIDO A EFECTIVO ANUAL">CONVERSION DE INTERES NOMINAL VENCIDO A EFECTIVO ANUAL</option>
                            <option value={2} className="CONVERSION DE INTERES NOMINAL VENCIDO A EFECTIVO ANUAL">CONVERSION DE INTERES NOMINAL ANTICIPADO A EFECTIVO ANUAL</option>
                            <option value={3} className="CONVERSION DE INTERES NOMINAL VENCIDO A EFECTIVO ANUAL">CONVERSION DE INTERES EFECTIVO ANUAL A NOMINAL VENCIDO</option>
                            <option value={4} className="CONVERSION DE INTERES NOMINAL VENCIDO A EFECTIVO ANUAL">CONVERSION DE INTERES EFECTIVO ANUAL A NOMINAL ANTICIPADO</option>
                            </select>
                        </div>

                        <div className="col-sm-12">
                            <label htmlFor="firstName" className="form-label fw-bolder">Periodo de Capitalizacion</label>
                            <input type="text" className="form-control" id="periodo" placeholder="Ejemplo: Semestral (2) - Trimestral (4)" required />
                        </div>

                        <div className="col-sm-12">
                            <label htmlFor="firstName" className="form-label fw-bolder">Tasa de Interes</label>
                            <input type="text" className="form-control" id="interes" placeholder="Ejemplo: 15% -> 0.15" required />
                        </div>
                        <hr className="my-4" />
                        <button className="w-100 btn btn-success btn-lg fw-bolder" type="button" id="optimice">Calcular</button>
                    </div>
                </form>
            </div>
        </div>

        <div className='row mt-3'>
            <input type="number" className="form-control text-center" id="interes" placeholder="Esperando resultado " disabled />
        </div>
    </div>
  )
}

export default Conversor