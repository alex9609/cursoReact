import {Component} from 'react'

//es una forma más larga de usar componentes -> sin embargo utilizando funciones se pueden 
//usar componentes de una manera más sencilla

//Clases es una de las primeras implementaciones - mas antiguo de react
//Funciones es la forma actual de implementaciones - mas nuevo
export class Saludar extends Component{
    render(){
        return <h1>Hola mundo</h1>
    }

}