import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'


const Portoflio = () => {
  const { register, handleSubmit } = useForm({});
  const [stock, setStock] = useState({});
  const [listStock, setListStock] = useState([]);
  

  const onSubmit = async data => {
    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${data.ticket}&apikey=SJDPIN79U565HQYM`
    const response = await fetch(url);
    const fetch_data = await response.json();
    console.log([fetch_data])
  }

  return (

      <>
      <div className="row mx-3">
        <div className="col-md-12">
            <div className="card bg-light align-items-center">
              <div className="card-body text-center">

              <form onSubmit={handleSubmit(onSubmit)}>

                  <div className="row gx-5">
                    <div className="col-md-6">
                      <label htmlFor="inputticket" className="fw-bold"> Ingresa Ticket</label>
                      <input {...register("ticket")}
                             type="text" id="inputticket" className="form-control my-1" 
                             aria-describedby="passwordHelpInline" 
                             placeholder="Ingresar el ticket a buscar o validar"/>
                    </div>

                    {/*
                    <div className="col-md-2">
                      <label htmlFor="inputtickedateinit" className="fw-bold">Fecha Inicial</label>
                      <input {...register("fecha_ini")}
                             type="date" id="inputtickedateinit" className="form-control my-1" 
                             aria-describedby="passwordHelpInline" 
                             /> 
                    </div>

                    <div className="col-md-2">
                      <label htmlFor="inputtickedateinit" className="fw-bold">Fecha Final</label>

                      <input {...register("fecha_fin")}
                            type="date" id="inputticketdatefin" className="form-control my-1" 
                             aria-describedby="passwordHelpInline" 
                             />
                    </div>

  */}

                    
                    <div className="col-md-3">
                      <label htmlFor="inputtickedateinit" className="text-light">Añadir</label>

                      <button type="submit"className="btn btn-success form-control my-1 fw-bold"> AñadirTicket</button>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputtickedateinit" className="text-light">Validar</label>

                      <button className="btn btn-outline-success form-control my-1 fw-bold"> ValidarTicket</button>
                    </div>
                  </div>
              </form>


              </div>
            </div>
        </div>
     </div>

      <div className="row mx-3 my-3">

        <div className="col-md-3 my-3">
          <div className="card">
            <div className="card-body">
            <h6 className="card-title fw-bold text-center">AAPL</h6>
              
              Media: 24%
              <br />  
              Desviacion: 10%
              <br />
              Retorno/Riesgo: 2,4 
            </div>
          </div>
        </div>


      </div>


      </>

  )
}

export default Portoflio