

export const getClima = async ( lat, long ) => {

    try {
        
    const url = `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${ parseFloat(lat) }&longitude=${parseFloat(long) }&timezone=America/Argentina/Jujuy`
    //const url = "https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=-24.185930418908384&longitude=-65.29932514190581&timezone=America/Argentina/Jujuy";
    const resp = await fetch( url );
    //const { data } = resp.json();
    //console.log("json data ", {data});
    return resp.json();

    //console.log("recibiendo datos... ",{data}, resp );
    //return resp.json();

    //const infClima = data.map( cli => ({
    //    temperatura: cli.current_weather.temperature,
    //    vViento : cli.current_weather.winspeed,
    //    zona: cli.timezone,
    //})); 
    //return infClima;

    //console.log('mostrando data clima ', infClima);
    //return infClima;

    } catch (err) {
        throw new Error('could not fetch data clima... ',err);
    }
    
    
};