import React from 'react'

const Input = ({type, id, name, onchange, value, ...props}) => {
   

    return (
        <input type={type} id={id} name={name} onchange={onchange} value={value} {...props}/>
    )
}

export default Input
