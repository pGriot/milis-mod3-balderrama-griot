import { Navbar } from "../../ui";
import { Navigate, Route, Routes } from 'react-router-dom';
import { ClimaPage, ClimPage, SearchPage } from "../pages";
import { ClimaContext } from "../context";
import { useContext, useEffect } from "react";
import { useFectchClima } from "../../hooks/useFectchClima";
import { getClima } from "../../helpers";


export const ClimaRoutes = () => {

  //const { setClima } = useContext( ClimaContext );

 //const {info, isLoading} = useFectchClima();
  //console.log("service fetchClima ", {info, isLoading});
  //console.log("temp ", info.current_weather.temperature);
  //console.log("probando help clima ", getClima());


  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
             <Route path="clima" element={<ClimaPage />} />

              {/* Search */}
              <Route path="search" element={ <SearchPage /> } />
              <Route path="clim" element={ <ClimPage />} />

             <Route path="/" element={<Navigate to="/clima" />} />
        </Routes>
      </div>

      
    </>
  );
};
