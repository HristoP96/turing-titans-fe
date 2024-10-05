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
      />
    ))}
    </div>
  )
}

export default Options