import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root")); //Creamos un root

const user = [
    { 
      id:1,
      name: 'raul ray',
      image: 'https://robohash.org/user'
    },
    { 
      id:2,
      name: 'migue ray',
      image: 'https://robohash.org/user2'
    },
    { 
      id:3,
      name: 'catan ray',
      image: 'https://robohash.org/user4'
    }
]

//Iteracion de arreglos
//Se hace mediante metodos de arreglos
//funcion map,filter,reduce,foreach
root.render(
  <>
    {user.map((user,index) =>{
      return <div key={user.id}>
                <h1>{user.name} {index}</h1>
                <img src={user.image} alt=""/>
             </div>
    })}
  </>
);

/** Consultar los diferentes on ej: onBlur, onDoubleClick, on */
