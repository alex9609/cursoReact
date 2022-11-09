import React from "react";
import ReactDOM from "react-dom/client";

//Dom - Document object model - Es el documento que manipulamos en el navegador

const root = ReactDOM.createRoot(document.getElementById("root")); //Creamos un root

function Greeting() {
  const texto = true;

  //const name = "Raul"
  /*
    if(texto){
        return <p>{name} : Esto es un texto</p>
    }else{
        return <p>No es un texto</p>
    }
    */
  //Con un operador ternatio
  return <h1>{texto ? "Esto es un texto 😁" : "No es un texto 😪"}</h1>;
  /*
    //JSX - Combinación de JS y HTML - 
    return <h1>{name} {10 +10} {true}</h1> //Interpreta la variable name gracias a jsx 
    //true no lo muestra
    */
}

root.render(
  //Self closing tags para los componentes
  <Greeting />
);
