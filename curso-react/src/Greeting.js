export function Greeting({title,name='user'}) {
  //Datos que puede recibir un componente
    return <>
      <h1>Componente {title} dice {name}</h1>
    </>;  
  }

  //Creando otro componente
export function Usercard({name,amount,married,points,address,greet}){
  console.log(greet)
    return <>
      <div>
        <h1>{name}</h1>
        <p>💵{amount}</p>
        <p>{married ? "Married" : "Single"}</p>
        <p>{points}</p>
        <p>{address.street} - {address.city}</p>
      </div>
    </>; 
}

  