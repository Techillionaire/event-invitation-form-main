import React from 'react'

const Button = ({type, className, ...props}) => {
    return (
        <button type={type} className={className} {...props}>Save</button>
    )
}

export default Button
