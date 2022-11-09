//Create reack app - usa webpack para poder cargar estilos dentro de javascript
//Importando estilos
import "./task.css";

//Manejando estilos de manera condicional
export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1>Mi primer tarea</h1>
      <span
        style={ready ? { background: "green" } : { background: "red" }} //Estilos de con codigo
      >
        {ready ? "Tarea realizada " : "Tarea pendiente"}
      </span>
        <hr/>
      <span
      className={ready ? 'bg-green':'bg-red'}
      >
        {ready ? "Tarea realizada " : "Tarea pendiente"}
      </span>
    </div>
  );
}
