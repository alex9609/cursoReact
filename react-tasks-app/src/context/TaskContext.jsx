import {createContext} from 'react'
import { useState, useEffect } from 'react'
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props){

	const [tasks, setTasks] = useState([])
	
	const createTask = (task) =>{
		setTasks([...tasks,{
		  title: task.title,
		  id: tasks.length,
		  description:task.description
		}]) //Aqui añadimos algo nuevo al arreglo o un nuevo elemento al arreglo sin alterar el arreglo
	  }

	  const deleteTask = (id) =>{
		setTasks(tasks.filter(task => task.id !== id))
	  }

	  useEffect(() =>{
		setTasks(data)
	},[])
	  
  return (
	<>
		<TaskContext.Provider value={{
			tasks,
			deleteTask,
			createTask}}>
			{props.children}
		</TaskContext.Provider>
	</>
  )
}
