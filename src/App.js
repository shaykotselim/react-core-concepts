import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './component/Countries/Countries';

function App() {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
 
  return (
    <div className="App">
     {
       countries.map(countri => <Countries 
              key ={countri.name}
              country={countri}>
              </Countries>)
     }
    </div>
  );
}

export default App;
