import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting,Usercard} from "./Greeting"; //Importanto nuestra funcion
import Product,{Navegacion} from "./Product";


//Dom - Document object model - Es el documento que manipulamos en el navegador
//Los componentes siempre van con la primera en mayuscula

const root = ReactDOM.createRoot(document.getElementById("root")); //Creamos un root

//Frangment <>  </> es una  etiqueta padre que encierra todas las etiquetas, sin necesidad de poner varios DIV
root.render(
  <>
    <Greeting/>
    <Usercard/>
    <Greeting/>
    <Usercard/>
    <Product/>
    <Navegacion/>
  </>
);
