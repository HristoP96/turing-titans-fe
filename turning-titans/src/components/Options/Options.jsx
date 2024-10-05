import React from 'react'
import Option from '../Option/Option'
import './Options.css'

const Options = ( { options, onClick }) => {
  return (
    <div className='options'>
      {options.map((o, index) => (
      <Option 
        key={index}
        option={o} 
        onClick={onClick} 
        style={{ animationDelay: `${index * 0.1}s` }}
      />
    ))}
    </div>
  )
}

export default Options