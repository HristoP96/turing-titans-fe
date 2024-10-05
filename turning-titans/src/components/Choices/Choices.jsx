import React from 'react'
import Option from '../Option/Option'
import './Choices.css'

const Choices = ( { options, onClick }) => {
  return (
    <div className='options'>
      {options.map((o, index) => (
      <Option 
        key={index}
        option={o} 
        onClick={() => onClick(index)} 
        style={{ animationDelay: `${index * 0.1}s` }}
      />
    ))}
    </div>
  )
}

export default Choices