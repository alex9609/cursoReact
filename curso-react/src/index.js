import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting,Usercard} from "./Greeting"; //Importanto nuestra funcion
import Product,{Navegacion} from "./Product";


//Dom - Document object model - Es el documento que manipulamos en el navegador
//Los componentes siempre van con la primera en mayuscula

const root = ReactDOM.createRoot(document.getElementById("root")); //Creamos un root

//Frangment <>  </> es una  etiqueta padre que encierra todas las etiquetas, sin necesidad de poner varios DIV
root.render(
  //Podemos pasar propiedades al componente gracias a los props
  <>
    <Greeting title="Hola" name="nombre"/> 
    <Usercard/>
    <Greeting title="Segundo"/>
    <Usercard/>
    <Product/>
    <Navegacion/>
    <Greeting title={[1,2,3]}/>
  </>
);
