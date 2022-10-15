import { ClimaCard } from "./ClimaCard";



export const ClimaList = ({ climas }) => {

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            
            {
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