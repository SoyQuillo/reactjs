import PropTypes from 'prop-types'

export function Button({text, name = "Some User"}){
    console.log(text, name)
    return <button>
        {text} -  { name }
    </button> 
}

Button.protoTypes = {
    text: PropTypes.string.isRequired
}