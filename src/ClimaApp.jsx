
import { AuthProvider } from './auth'
import { ClimaProvider } from './clima/context'



import { AppRouter } from './router/AppRouter'

export const ClimaApp = () => {
  return (
    <AuthProvider>
      <ClimaProvider>
          <AppRouter />
      </ClimaProvider>
    </AuthProvider>
        
    
    
  )
}
