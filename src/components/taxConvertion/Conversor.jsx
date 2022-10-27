import { useState } from 'react';
import { useForm } from 'react-hook-form'

import { helperConversor } from './helper';

const Conversor = () => {
    const { register, handleSubmit } = useForm({});
    const [tax, setTax] = useState(0);
    
    const onSubmit = data => {

        const result_data = helperConversor(parseInt(data.tipo), 
                                            parseFloat(data.interes),  
                                            parseFloat(data.periodo))
        setTax(result_data)
    }
   

    return (
    <div className='container'>
        <div className="row g-5">
            <div className="col-md col-lg">
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="col-sm-12 mt-3">

                <select {...register("tipo")} className="form-select" aria-label="Default select example">
                    <option> Selecciona una opcion</option>
                    <option value="1">CONVERSION DE INTERES NOMINAL VENCIDO A EFECTIVO ANUAL</option>
                    <option value="2">CONVERSION DE INTERES NOMINAL ANTICIPADO A EFECTIVO ANUAL</option>
                    <option value="3">CONVERSION DE INTERES EFECTIVO ANUAL A NOMINAL VENCIDO</option>
                    <option value="4">CONVERSION DE INTERES EFECTIVO ANUAL A NOMINAL ANTICIPADO</option>
                </select>

                </div>

                <div className="col-sm-12 mt-3">
                    <input {...register("periodo")} type="text" className="form-control" id="periodo" placeholder="Periodos Capitalización (1, 3, 6, 12, ... , n )" required />
                </div>

                <div className="col-sm-12 mt-3">
                    <input {...register("interes")} type="number" className="form-control" id="interes" placeholder="Tasa de interés" required />
                </div>

                <button className="w-100 mt-3 btn btn-success btn-lg" type="submit" >Calcular</button>
            </form>

            <input className="form-control mt-3 text-center" placeholder= { `${tax.resultado === undefined ? 0 : (tax.resultado * 100).toFixed(2)  }% ${tax.incial} ` } disabled />
                
            </div>
        </div>
    </div>
  )
}

export default Conversor