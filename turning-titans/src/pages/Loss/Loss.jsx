import React from 'react'
import './Loss.css';
import { BsEmojiFrown } from "react-icons/bs";

const Loss = () => {
  return (
    <div className='loss'>
        <h1>You lost! </h1>
        <BsEmojiFrown className='emoji'/>
    </div>
  )
}

export default Loss
