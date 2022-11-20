import React from 'react';
import './style.css'

export function List(props) {
    return (
        <ul className="list">
            {props.children}
        </ul>
    )
}