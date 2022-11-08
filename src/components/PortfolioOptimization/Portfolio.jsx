import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 23)',
      backgroundColor: 'rgba(53, 162, 23, 0.5)',
    },
  ],
};

const Portoflio = () => {
  const { register, handleSubmit } = useForm({});
  const [stock, setStock] = useState({});
  const [returns, setReturns] = useState({});
  const [listStock, setListStock] = useState([]);
  

  const onSubmit = async data => {
    let url = `http://localhost:5000/${data.ticket}`
    const response = await fetch(url);
    const fetch_data = await response.json();
    
    const stock_prices = JSON.parse(fetch_data.describe).stock
    const stock_returns = JSON.parse(fetch_data.describe).stock_return
    const graph_data = JSON.parse(fetch_data.data)
    console.log(graph_data)

    setStock(stock_prices)
    setReturns(stock_returns)
    setListStock(current => [...current, {'ticket': data.ticket, 'data_return': stock_returns}]);
  }

  useEffect(() => {
   console.log(listStock)
  }, 
  [listStock])


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

        

        {listStock.map((stock, index) => (
        <div key={index} className="col-md-3 my-3">
          <div className="card">
            <div className="card-body">
            <h6 className="card-title fw-bold text-center">{stock.ticket.toUpperCase()}</h6>
              
              Mean: {((stock.data_return.mean * 100 ) * 252).toFixed(2)}
              <br /> 
              Median: {((stock.data_return['50%'] * 100 )* 252).toFixed(2) }
              <br />  
              Risk: {((stock.data_return.std  * 100 ) * Math.sqrt(252)).toFixed(2)}
              <br />
              Mean/Risk: 2,4 
            </div>
          </div>
        </div>
        ))}


      </div>

      <Line options={options} data={data} />


      </>

  )
}

export default Portoflio