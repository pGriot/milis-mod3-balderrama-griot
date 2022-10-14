import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BsShop } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsLock } from "react-icons/bs";
import { BsBoxArrowInRight } from "react-icons/bs";



export const LoginPage = () => {


  //const { setCurrentUser } = useContext(UserContext)
  const navigate = useNavigate();

  const { login } = useContext( AuthContext );

  

  const { register, handleSubmit, formState:{ errors } } = useForm();

  const onSubmit = (data) => {
    console.log("data ",data);
    localStorage.setItem('currentUser', JSON.stringify(data))
    //setCurrentUser(data)
    login(data.usuario);
    console.log("usuario ingresado ", data.usuario);
    navigate('/',{
      replace: true
    })
  }

 
   return (
    <>
       <div className="sign-in-container">
      <span>Bienvenido <BsShop></BsShop></span>
      <form className="sign-in-form" onSubmit={ handleSubmit(onSubmit)}>
        <input 
          className="input-form"
          type="text"
          placeholder="Usuario" 
          icon={<BsPerson/>}
          {
            ...register('usuario',{ required: '* Usuario es requerido'})
          }
        />
        <p className="error">{ errors.usuario?.message }</p>
        <input 
          className="input-form"
          type="password"
          placeholder="Password"
          icon={<BsLock></BsLock>}
          {
            ...register('password',{ required: '* Password es requerido'})
          }
        />
        <p className="error">{ errors.password?.message }</p>

        <button 
        className="btn btn-primary"
        type="submit"
        >
        Login <BsBoxArrowInRight></BsBoxArrowInRight>
      </button>

      </form>
     </div>
    </>
   )
     

}
