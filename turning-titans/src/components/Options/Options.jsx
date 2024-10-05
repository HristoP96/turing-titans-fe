import React from 'react'
import Option from '../Option/Option'
import './Options.css'

const Options = () => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad modi ratione nesciunt sequi expedita voluptatum officiis voluptates. Exercitationem quas aperiam eligendi, voluptates natus quam delectus pariatur vero labore odit."
  return (
    <div className='options'>
        <Option option={text} />
        <Option option={text} />
        <Option option={text} />
        <Option option={text} />
    </div>
  )
}

export default Options