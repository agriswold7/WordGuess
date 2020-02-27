import React from 'react';
import './style.css';

export default function(props) {
    return (
        <div className='themecard'>
            <div className='img-container'>
                <img alt='?' src={props.image} />
            </div>
            <div className='theme-content'>
                <ul>
                    <li>
                        <strong>Word:</strong> {props.word}
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}

// FILL OUT COMPONENT FOR PROPS FROM WORDS.JSON