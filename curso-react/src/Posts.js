// https://mui.com/ existen componentes ya creados y estilizados
//JsonPlaceHolder permite obtener datos de ejemplo
import { VscBug, VscGlobe } from "react-icons/vsc";

export const Post = () =>{
    return <button onClick={() =>{
        //Fecth oermite traer datos
        fetch("https://jsonplaceholder.typicodade.com/posts")
            .then(response => response.json()) //Vas a recibir una respuesta que es la respuesta del backend a formato json
            .then(data => console.log(data))
            .catch(error => console.log(error)) //Si ocurre un error consumiendo la info nos muestra el error por consola
    }}>
        <VscBug/>
        Traer datos
        <VscGlobe/>
    </button>
}