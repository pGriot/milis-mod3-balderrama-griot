import { createContext, useState } from "react"
//import { ClimaContext } from "./ClimaContext";


const cli01 = [

  {
    id: 1,
    nombre: "Cangrejillos",
    latitud: -22.424135389768523,
    longitud: -65.58056287171037,
    activo: true,
    temperatura:3,
    velViento:3,
  },
  
  {
    id: 2,
    nombre: "Purmamarca",
    latitud: -23.74651655590978,
    longitud: -65.50419873551118,
    activo: true,
    temperatura:3,
    velViento:3,
  },

  
  {
    id: 3,
    nombre: "Tilcara",
    latitud: -23.586132932615712,
    longitud: -65.40262742430272,
    activo: true,
    temperatura:3,
    velViento:3,
  },

]

export const ClimaContext = createContext({
  ClimaList: [],
  setClima: () => {}
});


export const ClimaProvider = ({ children }) => {
    const [ climaList, setClima ] = useState(cli01);
    //const value = { climaList, setClima };   

  return (
           <ClimaContext.Provider value=
            {{ climaList, setClima }}
          >
            { children }
           </ClimaContext.Provider>
            )
  
}
