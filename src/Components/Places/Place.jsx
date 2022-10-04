import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = ({place}) => {
    const {id, name, latitude, longitude, temperature, windspeed, userId} = place

    return(
        <div className='place-container'>
            <div className='place'>
                <h3>{id} - {name}</h3>
                <h4 className='type'>Temperatura: </h4><h4 className='type-value'>{temperature}°C</h4>
                <h4 className='type'>Velocidad del viento: </h4><h4 className='type-value'>{windspeed} Km/h</h4>
                <h4 className='type'>Latitud: </h4><h4 className='type-value'>{latitude}</h4>
                <h4 className='type'>Longitud: </h4><h4 className='type-value'>{longitude}</h4>
            </div>
        </div>
    )
}

export default Place