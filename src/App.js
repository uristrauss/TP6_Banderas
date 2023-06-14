import './App.css';
import {useState,useEffect} from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState (true);
  const [flagImage ,  setFlagImage] = useState('');
  const [objeto ,  setObjeto] = useState([]); 
  var numRandom = Math.random()


  useEffect(() =>{
    fetch('https://countriesnow.space/api/v0.1/countries/flag/images') // vamos a la API
    .then ((response)=> response.json()) //que la respuesta sea en json
    .then ((all)=> {//all --> todo lo que hay en la api
      setObjeto (all.data) //te trae todo el objeto de la api
      console.log(all.data)
      setIsLoading(false) 
    });
  },[]);
// fucino donde haga unnum random, rango de todas las posiciones
  useEffect(()=>{

  })

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


