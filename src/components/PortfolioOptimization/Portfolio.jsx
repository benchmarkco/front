import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'


const Portoflio = () => {
  const { register, handleSubmit } = useForm({});
  const [tax, setTax] = useState(0);
  
  const onSubmit = data => {

      const result_data = helperConversor(parseInt(data.tipo), 
                                          parseFloat(data.interes.replace(",", ".")),  
                                          parseFloat(data.periodo))
      setTax(result_data)
  }



  return (

      <>

      
      <div className="row mx-3">
        <div className="col-md-12">
            <div className="card bg-light align-items-center">
              <div className="card-body text-center">

              <form onSubmit={handleSubmit(onSubmit)}>

                  <div className="row gx-5">
                    <div className="col-md-3">
                      <label htmlFor="inputticket" className="fw-bold"> Ingresa Ticket</label>
                      <input {...register("ticket")}
                             type="text" id="inputticket" className="form-control my-1" 
                             aria-describedby="passwordHelpInline" 
                             placeholder="(AAPL;MSFT; etc...) "/>
                    </div>

                    <div className="col-md-2">
                      <label htmlFor="inputtickedateinit" className="fw-bold">Fecha Inicial</label>
                      <input {...register("fecha_ini")}
                             type="date" id="inputtickedateinit" className="form-control my-1" 
                             aria-describedby="passwordHelpInline" 
                             /> 
                    </div>

                    <div className="col-md-2">
                      <label htmlFor="inputtickedateinit" className="fw-bold">Fecha Final</label>

                      <input 
                            type="date" id="inputticketdatefin" className="form-control my-1" 
                             aria-describedby="passwordHelpInline" 
                             />
                    </div>

                    
                    <div className="col-md-2">
                      <label htmlFor="inputtickedateinit" className="text-light">Añadir</label>

                      <button className="btn btn-success form-control my-1 fw-bold"> AñadirTicket</button>
                    </div>
                    <div className="col-md-2">
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
          <div class="card">
            <div class="card-body">
            <h6 class="card-title fw-bold text-center">AAPL</h6>
              Last Price: 139.9
              <br />
              Media: 24%
              <br />  
              Desviacion: 10%
              <br />
              Retorno/Riesgo: 2,4 
            </div>
          </div>
        </div>

        <div className="col-md-3 my-3">
          <div class="card">
            <div class="card-body">
            <h6 class="card-title fw-bold text-center">TSLA</h6>
              Last Price: 139.9
              <br />
              Media: 24%
              <br />  
              Desviacion: 10%
              <br />
              Retorno/Riesgo: 2,4 
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div class="card">
            <div class="card-body">
            <h6 class="card-title fw-bold text-center">FB</h6>
              Last Price: 139.9
              <br />
              Media: 24%
              <br />  
              Desviacion: 10%
              <br />
              Retorno/Riesgo: 2,4 
            </div>
          </div>
        </div>

        
        <div className="col-md-3">
          <div class="card">
            <div class="card-body">
            <h6 class="card-title fw-bold text-center">CISCO</h6>
              Last Price: 139.9
              <br />
              Media: 24%
              <br />  
              Desviacion: 10%
              <br />
              Retorno/Riesgo: 2,4 
            </div>
          </div>
        </div>

        
        <div className="col-md-3">
          <div class="card">
            <div class="card-body">
            <h6 class="card-title fw-bold text-center">NVDA</h6>
              Last Price: 139.9
              <br />
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