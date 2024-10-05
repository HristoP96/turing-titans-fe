import * as React from 'react';
import { Link } from 'react-router-dom';
import './PlayButton.css';


export default function CustomizedButtons() {
    return (
        <Link to={'/game'}><button className={'brilliant-button'}>START</button></Link>
    );
}