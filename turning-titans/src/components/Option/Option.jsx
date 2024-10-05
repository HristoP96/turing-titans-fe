import React from 'react'
import './Option.css'

const Option = ( { option, onClick, style }) => {
    return (
        <div className={'option'}  onClick={onClick} style={style}>
            <span>{option}</span>
        </div>
    )
}

export default Option