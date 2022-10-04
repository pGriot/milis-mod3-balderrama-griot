import './App.css';
import {useContext, useEffect} from 'react';
import {getWeatherdata} from './service';
import {PlacesContext} from './Context/PlacesContext'
import Place from './Components/Places/Place';

function App() {

  const {setPlaces} = useContext(PlacesContext)

  const latitude = -24.193402158136706
  const longitude = -65.3150226944321
  useEffect(() =>{
    getWeatherdata(latitude, longitude)
    .then((data)=>{
      setPlaces(data);
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
