import React,{useState}from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root")); //Creamos un root

const Counter = () => {

  //Este state es un elemento que tiene un array y al lado una funcion
  //counter es la variable , setCounter es la funcion que me permite modificar esa variable
  //el 0 en useState(0) es para inicializar nuestro counter a 0
  const [mensaje, setMensaje] = useState("")



  return <>
    <div>
      <input onChange={e => {setMensaje(e.target.value)}}/>
      <button onClick={() => {
        alert("El mensaje es: " + mensaje)
      }}>Save</button>
    </div>
  </>
}

root.render(
  <>
    <Counter/>
  </>
);
