import React,{useState,useEffect}from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root")); //Creamos un root

const Counter = () => {

 /**
  * useEfect sirve cuando quiero hacer algún cambio en la interfaz
  * 
  * el useEffect siempre funciona cuando se hace un cambio en el componente
  * 
  */
  const [mensaje, setMensaje] = useState("") //useState devuelve un arreglo
  const [counter, setCounter] = useState(0) //Quiero que el useEffect cambie cuando solo el counter cambie

  useEffect(() =>{
    console.log("render")
  },[counter])

  useEffect(() =>{
    console.log("render")
  },[]) //No le estoy especificando  que variable debe cambiars

  useEffect(() =>{
    console.log("render")
  }) //Cuando el documento cambia



  return <>
    <div>
      <input onChange={e => {setMensaje(e.target.value)}}/>
      <button onClick={() => {
        alert("El mensaje es: " + mensaje)
      }}>Save</button>

      <hr/>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter +1)}> Incrementar</button>
    </div>
  </>
}

root.render(
  <>
    <Counter/>
  </>
);
