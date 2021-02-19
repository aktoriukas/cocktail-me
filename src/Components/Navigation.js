import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation(props) {
    return (
        <nav className={`navigation ${props.open ? 'open' : ''}`}>
            <ul>
                <li onClick={props.toggleMenu}><Link to='/drink-me/'>Home</Link></li>
                <li onClick={props.toggleMenu}> <Link to='/drink-me/submit'>Submit</Link></li>
                <li onClick={props.toggleMenu}> <Link to='/drink-me/cocktails'>Cocktails</Link></li>
                <li onClick={props.toggleMenu}> <Link to='/drink-me/contacts'>Contacts</Link></li>
            </ul>
        </nav>
    )
}
