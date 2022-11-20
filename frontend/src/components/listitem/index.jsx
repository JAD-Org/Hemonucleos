import React from 'react';
import './style.css'

export function ListItem(props) {
    return (
        <li className="list-item">
            <a href="/add">{props.text}</a>
        </li>
    )
}