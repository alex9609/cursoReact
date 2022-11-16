import React from 'react'
import { useState, useContext } from 'react'
import {TaskContext} from '../context/TaskContext'

export default function TaskForm() {

	//ESTADO PARA LAS TAREAS
	const [title, setTitle] = useState("")

	const [description, setDescription] = useState("")
	const {createTask} = useContext(TaskContext) //De los valores solo quiero el create task

	const handleSubmit = (e) =>{
		e.preventDefault()
		createTask({title,description}) //Le pasamos newTask a la función create task

		//Limpiar los valores deL HOOK del estado
		setTitle("")
		setDescription("")
	}

  return (
	<>
	<div className='max-w-md mx-auto'>
	<form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
		<h1 className='text-2xl font-bold mb-3 text-white'>Crea tu tarea</h1>
		<input placeholder='Escribe tu tarea'
		onChange={(e) => {setTitle(e.target.value)}}
		value={title}
		autoFocus
		className='bg-slate-300 p-3 w-full mb-2'/>
		<textarea placeholder='Escribe la descripciósn'
		onChange={(e) => {setDescription(e.target.value)}}
		value={description} 
		className='bg-slate-300 p-3 w-full mb-2'/>
		<button
		className='bg-indigo-500 px-3 py-1 text-white rounded-md'
		> Guardar</button>
	</form>
	</div>
	</>
  )
}
