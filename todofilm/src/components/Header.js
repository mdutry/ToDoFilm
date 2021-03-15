import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {datasUser} from '../datas/datasUser'
import logo_ToDoFilm_blanc from '../images/logo_ToDoFilm_blanc.png';
import avatar from '../images/avatar.png.png'
import './Header.css';


function Header ()  {
    return (
       <div className='bloc-header'>

         <div className='bloc-header-logo'>
            < img src={logo_ToDoFilm_blanc} value='ToDoFilm' />
         </div>   

         <Link to='/recherche' className='bloc-header-recherche'>
            <inputComponent type='button' value='Recherche' />
         </Link>   

         <Link to='/profil' className='bloc-header-profil'>
            <img src={Avatar.png} />
            <p>{datasUser.prenom}</p>
         </Link>

       </div>  
        
    )

}
export default Header; 