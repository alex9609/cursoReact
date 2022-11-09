import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
const root = ReactDOM.createRoot(document.getElementById("root")); //Creamos un root

const HandleChange = (e) =>{
  console.log(e.target.value)
}

root.render(
  <>
    <Button text={"saludar"} />
    {/**Evento onchange -> Se ejecuta cuando voy tipeando*/}
    <h2>Con funciones</h2>
    <input
      id="id-input"
      onChange={function (e) {
        console.log(e.target.value + "...");
        console.log(e.target.id);
      }}
    />

    {/**Usando ES5 -> Me he ahorrado la palabra function*/}
    <h2>Con ES5</h2>
    <input
      id="id-input"
      onChange={(e) => {
        console.log(e.target.value + "...");
        console.log(e.target.id);
      }}
    />

    {/**Usando ES5 -> tener la funcion afuera*/}
    <h2>Llamando la función desde afuera</h2>
    <input
      id="id-input"
      onChange={HandleChange}
    />
    <h2>Seleccionar el input</h2>
    <input
      onClick={function () {
        alert("input seleccionado");
      }
    }
    />

    {/**Se recarga la pagina cuando le damos enviar, para poder manejarlo sin que se reinicie 
     * la pagina podemos darle un preventDefault
    */}
    <form onSubmit={(e) => e.preventDefault(
      console.log("Enviado")
    )}>
      <h3>Form</h3>
      <button>Enviar</button>
    </form>

  </>
);

/** Consultar los diferentes on ej: onBlur, onDoubleClick, on */
