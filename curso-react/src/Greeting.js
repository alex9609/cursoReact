export function Greeting({title,name='user'}) {
  //Datos que puede recibir un componente
    return <>
      <h1>Componente {title} dice {name}</h1>
    </>;  
  }

  //Creando otro componente
export function Usercard(props){
    return <>
      <div>
        <h1>{props.name}</h1>
        <p>${props.amount}</p>
        <p>{props.married ? "Married" : "Single"}</p>
        <p>{props.points}</p>
        <p>{props.address.street} - {props.address.city}</p>
      </div>
    </>; 
}

  