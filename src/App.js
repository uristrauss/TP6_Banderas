import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState (true);
  const [flagImage ,  setFlagImage] = useState('');

  useEffect(() =>{
    fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
    .then ((response)=> response.json()) //que la respuesta sea en json
    .then ((all)=> {
      setFlagImage (all.data)
      setIsLoading(false)
    });
  },[]);


  if(isLoading){
    return (
      <div className = "App">
        <h1>Cargando ...</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <img src = {flagImage} alt = "Una bandera" />
    </div>
  );
}

