export function Greeting({title}) {
  //Props parametros dentro de una funcion
  //Un valor directo de los props
  //Parametros que le paso a la función
  
    return <>
      <h1>Componente {title}</h1>
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

  