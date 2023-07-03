import { useState, useEffect } from 'react';
import axios from 'axios';


function Banderas() {
const [banderas, setBanderas] = useState([]);
const [cargando, setCargando] = useState(true);

    useEffect(() =>{

        axios.get('https://countriesnow.space/api/v0.1/countries/flag/images') // vamos a la API
        .then ((response)=> {
        //let numerito = numeroRandom();
        //    console.log(response)
        setBanderas(response.data.data);
        setCargando(false);
        })
        .catch((error) => {
            console.error(error);
            setCargando(false);
          });
        }, []);

        
        function numeroRandom(max) {
        return Math.floor(Math.random()*banderas.length);
        }

      if (cargando) {
        return (
            <h1>cargandooooooo</h1>
        )
      }else {
        return (
        <img src={banderas[numeroRandom()].flag} alt="Una bandera" />
        )
      }
      

      /*
       return (
    <div className="App">
      {cargando ? (
        <span>Cargando...</span>
      ) : (
        <img src={banderas[numeroRandom()].flag} alt="Una bandera" />
      )}
    </div>
  );
  */

}

export default Banderas;

