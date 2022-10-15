import { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ClimaContext } from '../context';
import './ClimPage.css'
import logoGrande from '../../Assets/logo_grande.png'



export const ClimPage = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm();
  const { climaList, setClima } = useContext( ClimaContext );
  const navigate = useNavigate();

   
  

  const onSubmit = (data) => {

    
    const climaNew = {
      id:  climaList.length +1,
      nombre: data.nombre,
      latitud: data.latitud,
      longitud: data.longitud,
      activo: true,      
    }

    setClima([...climaList, climaNew]);
    console.log("data ",data);
    navigate('/');
  }

  return (
    <>
    <div className='container'>
       <h1>Agregar nueva ubicacion</h1>
       <hr />
       
       <div className='logo'>
        <img src={logoGrande} />
        </div>

       <div className="row">
        {/* <div className="col-5">    */}
          <form className='formulario' onSubmit={ handleSubmit( onSubmit ) }>
            <input
              className="input-form"
              type="text"
              placeholder="Nombre"              
              {
                ...register('nombre', { required: '* Nombre es requerido'})
              }
             />
             <p>{ errors.nombre?.message }</p>
              
             
             <input
              className="input-form"
              type="text"
              placeholder="Latitud"
              {
                ...register('latitud', { required:'* Latitud es requerido'})
              }          
              />
              <p>{ errors.latitud?.message }</p>

              <input
               className="input-form"
               type="text"
               placeholder="Longitud"
               {
                ...register('longitud', { required: '* Longitud es requerido'})
               }
               />
               <p>{ errors.longitud?.message }</p>

             <button className="btn btn-outline-primary mt-1" type="submit">
               Crear
             </button>

          </form>
        {/* </div> */}
       </div>
       </div>
    </>
  )
}
