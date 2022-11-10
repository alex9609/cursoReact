import React,{useState}from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root")); //Creamos un root

const Counter = () => {

  //Este state es un elemento que tiene un array y al lado una funcion
  //counter es la variable , setCounter es la funcion que me permite modificar esa variable
  //el 0 en useState(0) es para inicializar nuestro counter a 0
  const [counter, setCounter] = useState(10)



  return <>
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => {setCounter(counter + 1)}}>sumar</button>
      <hr></hr>
      <button onClick={() => {setCounter(counter - 1)}}>restar</button>
      <hr></hr>
      <button onClick={() => {setCounter(10)}}>restart</button>
    </div>
  </>
}

root.render(
  <>
    <Counter/>
  </>
);
