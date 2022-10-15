import { FaRegTrashAlt } from "react-icons/fa";
import { useContext } from 'react';
import { ClimaContext } from '../context';
import { useFectchClima } from '../../hooks/useFectchClima';
import './ClimaCard.css';




export const ClimaCard = ({ id, nombre, latitud, longitud }) => {

  const { climaList, setClima } = useContext( ClimaContext );
  const { info } = useFectchClima(latitud, longitud);
    

  const deleteClima = () => {
    console.log("eliminando tarj ",id);
    setClima(
      climaList.map( cli => {
        if( cli.id === id){
          return {...cli, activo: false }
        } else {
          return cli
        }
      })
     );
  }
  
  
  console.log(info.temperature)

  return (
    <div className="col animate__animated animate__fadeIn">
       <div className="card">

        <div className="row no-gutters">
            <div className="col-4">
                <img 
                   src="https://media-cdn.tripadvisor.com/media/photo-s/1b/a4/d1/d2/provincia-de-jujuy.jpg"
                   className="card-img"
                   alt="img"
                />
            </div>
                
                <div className="col-8">
                
                    <h5 className="card-title">Ubicacion #{ id }</h5>
                    <p className="card-text">Nombre: { nombre }</p>
                    <p className="card-text">Latitud: { latitud }</p>
                    <p className="card-text">Longitud: { longitud }</p>
                    
                    <p className="card-text">Temperatura: { info.temperature } °C</p>
                    <p className="card-text">Vel. viento: { info.windspeed } Km/h</p>

                    <div className="clima-actions">
                      <div className="del" onClick={deleteClima}>
                        <FaRegTrashAlt className="delete"></FaRegTrashAlt>
                      </div>
                    </div>

                    
                </div>
            
        </div>
       </div>
    </div>
  )
}