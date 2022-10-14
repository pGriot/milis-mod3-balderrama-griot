///import { useMemo } from "react"
///import { useFectchClima } from "../../hooks/useFectchClima"
import { ClimaCard } from "./ClimaCard";



export const ClimaList = ({ climas }) => {

    //const info = useFectchClima(lat, long);
    //const info = useMemo( () => data, [lat, long]);
    //let climasActi:[];

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            
            {
            //let activos = climas.filter( act => act.activo === "true");
            //climas.map((clim) => (
            //        <ClimaCard
            //          key={ clim.id }
            //          {...clim}
            //         />
            //))
            climas
             .filter( cli => cli.activo === true)
             .map((clim) => (
                <ClimaCard 
                  key={ clim.id }
                  {...clim } 
                />
            ))
            
            }
        </div>
    );
}