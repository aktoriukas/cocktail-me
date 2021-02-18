import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation(props) {
    return (
        <nav className={`navigation ${props.open ? 'open' : ''}`}>
            <ul>
                <li onClick={props.toggleMenu}><Link to='/'>Home</Link></li>
                <li onClick={props.toggleMenu}> <Link to='/submit'>Submit</Link></li>
                <li onClick={props.toggleMenu}> <Link to='/cocktails'>Cocktails</Link></li>
                <li onClick={props.toggleMenu}> <Link to='/contacts'>Contacts</Link></li>
            </ul>
        </nav>
    )
}
