//const SERVER_DOMAIN = 'https://api.open-meteo.com/v1/forecast?current_weather=true'
export const getWeatherdata = async (latitude, longitude) => {
    try {
        const resp = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}&timezone=America/Argentina/Jujuy`);
        const data = await resp.json();

        const infClima = ({
            temperatura: data.current_weather.temperature,
            vViento: data.current_weather.windspeed,
            zona: data.timezone
        })

        return infClima;
       } catch {
         throw new Error('No fue posible consultar los datos de clima de la ubicación solicitada');
       }
    }