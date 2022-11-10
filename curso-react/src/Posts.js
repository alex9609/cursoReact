//JsonPlaceHolder permite obtener datos de ejemplo
export const Post = () =>{
    return <button onClick={() =>{
        //Fecth oermite traer datos
        fetch("https://jsonplaceholder.typicodade.com/posts")
            .then(response => response.json()) //Vas a recibir una respuesta que es la respuesta del backend a formato json
            .then(data => console.log(data))
            .catch(error => console.log(error)) //Si ocurre un error consumiendo la info nos muestra el error por consola
    }}>
        Traer datos
    </button>
}