import { useState } from 'react';
import './App.css';
import HolaMundo from './HolaMundo';
import Componente2 from './Componente2';

function App() {
  const [name, setName]=useState(''),
    [lastname, setLastname]=useState('');

  function changeName(e){
    setName(e.target.value);
  }
  function changeLastname(e){
    setLastname(e.target.value);
  }

  return (
    <div className="App">
      <h2>Hola Bienvenido!!! </h2> <br />
      <label htmlFor='name'>Nombre:</label>
      <input type="text" name="name" onChange={changeName} /> <br /> <br />
      <label htmlFor='lastname'>Apellido:</label>
      <input type="text" name="lastname" onChange={changeLastname} /> <br /> <br />
      <h3>Buen día  {name} {lastname}</h3> <br />
      <HolaMundo />
      <Componente2 />
    </div>
  );
}

export default App;
