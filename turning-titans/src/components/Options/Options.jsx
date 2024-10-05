import React from 'react'
import Option from '../Option/Option'
import './Options.css'

const Options = ( { options, onClick }) => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad modi ratione nesciunt sequi expedita voluptatum officiis voluptates. Exercitationem quas aperiam eligendi, voluptates natus quam delectus pariatur vero labore odit."
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