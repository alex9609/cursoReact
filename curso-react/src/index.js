import React from "react";
import ReactDOM from "react-dom/client";

//Dom - Document object model - Es el documento que manipulamos en el navegador

const root = ReactDOM.createRoot(document.getElementById("root")); //Creamos un root

function Greeting() {
  
  const user = {
    firstname: 'raul',
    lastname: 'jimenez',
    trabaja:true
  }

  function add(x,y){
    return x+y
  }

  //Convertir a String un json
  //JSON.stringify
  return <>
    <h1>{add(10,30)}</h1>
    <h1>{user.firstname}</h1>
    <h3>{user.lastname}</h3>
    <h3>{user.trabaja.toString()}</h3>
  </>;

}

//Frangment <>  </> es una  etiqueta padre que encierra todas las etiquetas, sin necesidad de poner varios DIV
root.render(
  <>
    <Greeting/>
    <Greeting/>
    <Greeting/>
    <Greeting/>
  </>
);
