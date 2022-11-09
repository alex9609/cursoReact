export function Greeting() {
    const user = {
      firstname: 'raul',
      lastname: 'jimenez',
      trabaja:true
    }
    return <>
      <h1>Componente de React</h1>
      <h1>{user.firstname}</h1>
      <h3>{user.lastname}</h3>
      <h3>{user.trabaja.toString()}</h3>
    </>;  
  }

  //Creando otro componente
export function Usercard(){
    const user = {
        card :'10991221'
    }
    return <>
      <h1>Componente cedula: {user.card}</h1>
    </>; 
}

  