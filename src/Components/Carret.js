import React from 'react'

export default function Carret(props) {
    return (
        <i onClick={props.click} className={`arrow ${props.direction ? 'up' : 'down'}`}></i>
    )
}
