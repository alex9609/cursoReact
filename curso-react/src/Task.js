export function TaskCard(){

    //Podemos añadir estilos como variables
    const cardStyles = {
        background: "#00112c",
        color:"#ffff",
        padding: "15px"
    }

    const titleStyle = {
        fontWeight:"ligther"
    }
    return <div style={cardStyles}>
        <h1 style={titleStyle}>Mi primer tarea</h1>
        <p>Tarea realizada</p>
    </div>
}