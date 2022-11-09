import React from "react";
import ReactDOM from "react-dom/client";
//import { Usercard } from "./Greeting"; //Importanto nuestra funcion
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root")); //Creamos un root

root.render(
  <>
  {/*De esta manera realizamos comentario*/}
  <Button text="Click me"/>
  <Button text="Pay"/>
  <Button text="Log out"/>
  <Button/>
    {/* <Usercard
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
    /> */}
  </>
);
