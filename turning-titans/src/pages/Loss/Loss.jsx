import React from 'react';
import './Loss.css';
import { BsEmojiFrown } from "react-icons/bs";

const Loss = (props) => {
  console.log(props)
  return (
    <div className='loss'>
        <p>{props.outcome}</p>
        <p>{props.feedback}</p>
        <h1>You lost! </h1>
        <BsEmojiFrown className='emoji'/>
    </div>
  )
}

export default Loss
