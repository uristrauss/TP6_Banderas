import { useState, useEffect } from 'react';
import axios from 'axios';

function darBandera(banderas) {
  return banderas[Math.floor(Math.random() * banderas.length)];
}

function Banderas() {
  const [banderas, setBanderas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [pais, setPais] = useState({});
  const [puntos, setPuntos] = useState(0);

  useEffect(() => {
    axios
      .get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => {
        setBanderas(response.data.data);
        setCargando(false);
        setPais(darBandera(response.data.data)); 
      })
      .catch((error) => {
        console.error(error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <h1>cargandooooooo</h1>;
  } else {
    {console.log(pais.name)}
    return ( 
      <div>
        
      <img src={pais.flag} alt="Una bandera" />
      <input className="form-control" type="text" placeholder="Default input" aria-label="default input example" onChange={(e) => Adivinar(e.target.value)}/>
      <button type="submit" className="btn btn-primary">Submit</button>
      
    </div>
    

    );
    
  }

  function Adivinar(){

  }
}

export default Banderas;
