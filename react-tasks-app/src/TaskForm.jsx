import React from 'react'
import { useState } from 'react'

export default function TaskForm({createTask}) {
	//createTask es la función que creamos en App 

	//ESTADO PARA LAS TAREAS
	const [title, setTitle] = useState("")

	const [description, setDescription] = useState("")

	const handleSubmit = (e) =>{
		e.preventDefault()
		createTask(title,description) //Le pasamos newTask a la función create task
	}

  return (
	<>
	<form onSubmit={handleSubmit}>
		<input placeholder='Escribe tu tarea'
		onChange={(e) => {setTitle(e.target.value)}}/>
		<input placeholder='Escribe la descripciósn'
		onChange={(e) => {setDescription(e.target.value)}}/>
		<button> Guardar</button>
	</form>
	</>
  )
}
