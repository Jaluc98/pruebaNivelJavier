import React from 'react'
import PropTypes from 'prop-types'

//Componente para enseñar los errores 

const Error = ({mensaje}) =>{
    return(
        <p className="error">{mensaje}</p>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
export default Error;