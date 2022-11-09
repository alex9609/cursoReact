import PropTypes from 'prop-types'
export function Button({text,name}){
    //Un componente que realize un evento 

    //Siempre enviar un String
    //npm install prop-types -> Instala en el proyecto el modulo de prop-types
    
    //Un prop type es un objeto donde puedo definir que tipos de props puede recibir mi componente

    if(!text){
        console.error("El texto es requerido")
    }
    return <button>
        {text} - {name}
    </button>
}

//Genera una advertendia en el console
Button.propTypes = {
    text: PropTypes.string.isRequired
}
//Valores por defecto de un prop
Button.defaultProps={
    name: "Usuario"
}