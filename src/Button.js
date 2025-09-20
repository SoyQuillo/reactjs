import PropTypes from 'prop-types'

export function Button({text, name = "Some User"}){
    console.log(text, name)
    return <button onClick={function(){console.log('Hola mundo')}}>
        {text} -  { name }
    </button> 
}

Button.protoTypes = {
    text: PropTypes.string.isRequired
}