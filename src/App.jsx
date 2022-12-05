import "./stylesheets/App.css";
import Boton from "./components/Boton.jsx";
import Pantalla from './components/Pantalla.jsx'
import BotonClear from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from 'mathjs';

const App = () => {

  const [input, setInput] = useState('');
  const agregarInput = val => setInput(input + val);
  const calcularResultado = () => input ? setInput(evaluate(input)) : alert('Por favor ingrese un valor')

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <div className="contenedor-pantalla">
          <Pantalla input={ input } />
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput} >1</Boton>
          <Boton manejarClic={agregarInput} >2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
};

export default App;
