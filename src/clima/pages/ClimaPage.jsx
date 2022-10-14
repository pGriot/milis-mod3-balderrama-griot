import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { ClimaList } from '../components/ClimaList';
import { ClimaContext } from '../context';





export const ClimaPage = () => {

  const navigate = useNavigate();

  const { climaList } = useContext( ClimaContext );

  //getClima( lat, long );
  const onNavigate = () => {
    navigate('/clim');
  }

  console.log("mostrando lista ", {climaList});

  return (
    <>
        <h1>Ubicaciones disponibles</h1>
        <hr />
        
        <button
          className="btn btn-outline-primary"
          onClick={ onNavigate }
        >
          Nueva Ubicacion
        </button>

        <ClimaList climas={climaList} />
       {/* {
          Array.isArray(climaList)
          ? climaList.map( cli => (
            <div key={cli.id}>
              <h1>
                name: {cli.nombre}
              </h1>
            </div>
          ))
          : console.log("q mierda pasa")
        } */}
        
    </>
  )
}
