import {TaskContext} from '../context/TaskContext'
import { useContext } from 'react'

function TaskCard({ task}) {

  const {deleteTask} = useContext(TaskContext)

  return (
    <div key={task.id}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      {/**Creamos una función anonima, para que cada vez que se de click se elimine la tarea */}
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
