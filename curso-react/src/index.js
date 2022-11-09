import React from "react";
import ReactDOM from "react-dom/client";
import { Usercard } from "./Greeting"; //Importanto nuestra funcion

//Dom - Document object model - Es el documento que manipulamos en el navegador
//Los componentes siempre van con la primera en mayuscula

const root = ReactDOM.createRoot(document.getElementById("root")); //Creamos un root

//Frangment <>  </> es una  etiqueta padre que encierra todas las etiquetas, sin necesidad de poner varios DIV
root.render(
  //Podemos pasar propiedades al componente gracias a los props
  //Tambien puedo pasar funciones como props
  <>
    <Usercard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33, 22.2]}
      address={{street: "145 # 132", city: "Medellín" }}
      greet={function(){alert("Hello")}}
    />
    <Usercard
      name="Sauil Ray"
      amount={4000}
      married={false}
      points={[99, 33, 22.2]}
      address={{street: "125 # 132", city: "Cartagena" }}
    />
    <Usercard
      name="Miguel Ray"
      amount={2500}
      married={true}
      points={[910, 123, 122.2]}
      address={{street: "115 # 132", city: "Bucaramanga" }}
    />
  </>
);
