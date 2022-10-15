import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { ClimaRoutes } from '../clima';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';






export const AppRouter = () => {
  return (
    <>
       

       <Routes>
            
            <Route path="/login" element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
            />
            

            <Route path="/*" element={
              <PrivateRoute>
                <ClimaRoutes />
              </PrivateRoute>
            } />

            
       </Routes>
    </>
  )
}
