import React from 'react'
import './Option.css'

const Option = ( { option, onClick }) => {
    return (
        <div className={'option'}  onClick={onClick}>
            <span>{option}</span>
        </div>
    )
}

export default Option