

export const getClima = async ( lat, long ) => {

    try {
        
    const url = `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${ parseFloat(lat) }&longitude=${parseFloat(long) }&timezone=America/Argentina/Jujuy`
    const resp = await fetch( url );
    return resp.json();

    } catch (err) {
        throw new Error('could not fetch data clima... ',err);
    }
    
    
};