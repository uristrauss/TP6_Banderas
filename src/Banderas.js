import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function darBandera(banderas) {
  return banderas[Math.floor(Math.random() * banderas.length)];
}

function Banderas() {
  const [banderas, setBanderas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [pais, setPais] = useState({});
  const [puntos, setPuntos] = useState(0);
  const [adivinar, setAdivinar] = useState('');

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

  function Adivinar(value) {
    if (pais.name.toLowerCase() === value.toLowerCase()) {
      setPuntos(puntos + 10);
    } else {
      setPuntos(puntos - 1);
    }
    setPais(darBandera(banderas));
    setAdivinar('');
  }

  if (cargando) {
    return <h1>cargandooooooo</h1>;
  } else {
    return (
      <div className="container">
        <div className="score-container">
          <div className="score">Puntos: {puntos}</div>
          <div className="flag-container">
            <img src={pais.flag} alt="Una bandera" className="flag-image" />
          </div>
        </div>
        <div className="guess-container">
          <input
            className="guess-input"
            type="text"
            placeholder="Adivina el pais..."
            value={adivinar}
            onChange={(e) => setAdivinar(e.target.value)}
          />
          <button className="submit-button" onClick={() => Adivinar(adivinar)}>
            Enviar
          </button>
        </div>
      </div>
    );
  }
}

export default Banderas;
