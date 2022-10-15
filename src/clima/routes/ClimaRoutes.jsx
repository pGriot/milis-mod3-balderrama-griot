import { Navbar } from "../../ui";
import { Navigate, Route, Routes } from 'react-router-dom';
import { ClimaPage, ClimPage, SearchPage } from "../pages";
import { ClimaContext } from "../context";
import { useContext, useEffect } from "react";
import { useFectchClima } from "../../hooks/useFectchClima";
import { getClima } from "../../helpers";


export const ClimaRoutes = () => {


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
