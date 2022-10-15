import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { ClimaList } from '../components/ClimaList';
import { ClimaContext } from '../context';




export const ClimaPage = () => {

  const { climaList } = useContext( ClimaContext );

  return (
    <>

        <h1>Ubicaciones disponibles</h1>
        <hr />
        
        <ClimaList climas={climaList} />

    </>
  )
}
