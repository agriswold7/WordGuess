import React from 'react';
import './style.css';

export default function Wrapper(props){
    return(
        <div className="container">{props.children}</div>
    );
}