import React from 'react'
import logo from '../images/logo_ToDoFilm.png'
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to='/'>
            <img src={logo} alt='logo_ToDoFilm' />
        </Link>
        
    )
}

export default Logo