import React from 'react'
import ReactDOM from 'react-dom/client'

//Dom - Document object model - Es el documento que manipulamos en el navegador


const root = ReactDOM.createRoot(document.getElementById('root')) //Creamos un root

function Greeting(){
    //Retorno una función de interfaz - Nuestra función-  componente nos retorna un html
    //Siembre debe haber un elemento que contenga al resto
    return <div>
        <h1>Componente de saludo</h1>
        <p>Parrafo del documento</p>
        <p>lorem 123</p>
    </div>
}

root.render(
    //Self closing tags para los componentes
    <div>
        <Greeting/> 
        <Greeting/>
        <Greeting/>
        <Greeting/>
    </div>
)