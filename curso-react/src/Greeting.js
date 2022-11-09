export function Greeting({title,name='user'}) {
  //Props parametros dentro de una funcion
  //Un valor directo de los props
  //Parametros que le paso a la función
  //Parametros por defecto sino pasan los valores
  
    return <>
      <h1>Componente {title} dice {name}</h1>
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

  