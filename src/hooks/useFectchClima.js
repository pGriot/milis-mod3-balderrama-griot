import { useEffect, useState } from "react"
import { getClima } from "../helpers";




export const useFectchClima = ( lat=-24.185930418908384, long=-65.29932514190581 ) => {

    const [ info, setInfo ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    console.log("lat y long recibidos ", lat , " " ,long);

    const getInfo = async () => {
        const newInfo = await getClima( lat, long );
        //setInfo( newInfo );
        //setIsLoading( false );
    }

    useEffect( () => {
        getClima(lat, long)
        .then(( data ) => {
            setInfo( data.current_weather );
            setIsLoading( false );
            console.log("mostrando esto... ", data );
        })
        .catch(( error ) => console.log("uuups paso algo ", error ));
    },[])

    return {
        info,
        isLoading
    }
}