import PropTypes from 'prop-types'
export function Button({text,name}){

    if(!text){
        console.error("El texto es requerido")
    }
    return <button onClick={function(){
        console.log("Hola mundo")
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}
Button.defaultProps={
    name: "Usuario"
}