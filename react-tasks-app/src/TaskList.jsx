//En vite si es importante poner jsx
import React,{useState,useEffect} from 'react'
import {tasks as data} from './tasks'


function TaskList() {

	const [tasks, setTasks] = useState([])
	//Con el useEffect le decimos una vez que traiga las tareas se carguen al arreglo de tareas
	//ya que al momento de ejecutar nuestra app primero se cargan los componentes y luego se trae la información

	//as es darle un alías de nuestra importación
	useEffect(() =>{
		setTasks(data)
	},[])
	if(tasks.length === 0){
		return <h1>No hay tareas aún</h1>
	}

  return (
	<div>
		{
			tasks.map((task) =>(
				<div key={task.id}>
					<h1>{task.title}</h1>
					<p>{task.description}</p>	
				</div>
			))	
		}
	</div>
  )
}

export default TaskList