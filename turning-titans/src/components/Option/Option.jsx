import React from 'react'
import './Option.css'

const Option = ( { option }) => {
    return (
        <div className={'option'} >
            <span>{option}</span>
        </div>
    )
}

export default Option