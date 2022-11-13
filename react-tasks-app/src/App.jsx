import React from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {tasks as data} from './data/tasks'
import { useState, useEffect } from 'react'



function App() {

  const [tasks, setTasks] = useState([])
	//Con el useEffect le decimos una vez que traiga las tareas se carguen al arreglo de tareas
	//ya que al momento de ejecutar nuestra app primero se cargan los componentes y luego se trae la información

	//as es darle un alías de nuestra importación
	useEffect(() =>{
		setTasks(data)
	},[])

  const createTask = (task) =>{
    //Copia todo el arreglo de tareas y añade un nuevo elemento
    setTasks([...tasks,{
      title: task.title,
      id: tasks.length,
      description:task.description
    }]) //Aqui añadimos algo nuevo al arreglo o un nuevo elemento al arreglo sin alterar el arreglo
  }

  return (
    <div>
      {/** le pasamos la función al prop*/}
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App