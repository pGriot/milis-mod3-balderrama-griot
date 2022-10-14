import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
//import { useFectchClima } from '../../hooks/useFectchClima';

import { useNavigate } from 'react-router-dom';
import { getClima } from '../../helpers';
import { useFectchClima } from '../../hooks/useFectchClima';
import { ClimaContext } from '../context';




export const ClimPage = () => {

  const { register, handleSubmit, formState:{ errors }, getValues } = useForm();

  const { climaList, setClima } = useContext( ClimaContext );

  const navigate = useNavigate();

  const [inf, setInf] = useState([]);

  //const {info, isLoading} = useFectchClima(-24.24164961442272, -64.88511214788474);
  const { info, isLoading } = useFectchClima(inf.lati, inf.longi);
  //console.log("lati env ", inf.lati);
  //const {time, temperature } = {{info.current_weather}};
  console.log("service fetchClima en climpage ", {info, isLoading});
  console.log("la temp es ", info.temperature );

  //const { data } = useFectchClima(data.Latitud, data.Longitud);
  console.log("mostrando array ",climaList);

  //const handleInput = (event) => {
  //  console.log("Lati ? ",event.target.latitud);
  //}

  console.log("mostrando getValue ", getValues("latitud"));

  
  

  const onSubmit = (data) => {

    //const {info, isLoading} = useFectchClima(data.latitud, data.longitud);
    //setInf([data.latitud, data.longitud]);
    //console.log("data enviada ", {inf});
    const pru = () => {
      setInf(data);
    }

    
    const climaNew = {
      id:  climaList.length +1,
      nombre: data.nombre,
      latitud: data.latitud,
      longitud: data.longitud,
      activo: true,      
      temperatura: info.temperature,
      velViento: info.windspeed,
    }
    setClima([...climaList, climaNew]);
    console.log("data ",data);
    navigate('/');
  }

  return (
    <>
       <h1>Agregar nueva ubicacion</h1>
       <hr />

       <div className="row">
        <div className="col-5">
          <form onSubmit={ handleSubmit( onSubmit ) }>
            <input
              className="input-form"
              type="text"
              placeholder="Nombre"              
              {
                ...register('nombre', { required: '* Nombre es requerido'})
              }
             />
             <p className="error">{ errors.nombre?.message }</p>
              
             
             <input
              className="input-form"
              type="text"
              placeholder="Latitud"
              {
                ...register('latitud', { required:'* Latitud es requerido'})
              }          
              />
              <p className="error">{ errors.latitud?.message }</p>

              <input
               className="input-form"
               type="text"
               placeholder="Longitud"
               {
                ...register('longitud', { required: '* Longitud es requerido'})
               }
               />
               <p className="error">{ errors.longitud?.message }</p>

             <button className="btn btn-outline-primary mt-1" type="submit">
               Crear
             </button>

          </form>
        </div>
       </div>
    </>
  )
}
