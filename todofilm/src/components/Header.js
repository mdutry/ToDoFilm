import React from 'react';
import { Link } from 'react-router-dom';
import InputComponent from './InputComponent';
import {datasUser} from '../datas/datasUser';
import logo_ToDoFilm_blanc from '../images/logo_ToDoFilm_blanc.png';
import avatar from '../images/avatar.png';
import './Header.css';


function Header () {
   return (
      <div className='bloc-header'>

         <div className='bloc-header-logo'>
            <img src={logo_ToDoFilm_blanc} value='ToDoFilm' />
            <p>ToDoFilm</p>
         </div>   

         <Link to='/recherche' className='bloc-header-recherche'>
            <InputComponent type='button' />
         </Link>   

         <Link to='/profil' className='bloc-header-profil'>
            <img src={avatar} alt="photo de profil" />
            <p>prénom : {datasUser.prenom}</p>
         </Link>

      </div>
   )
}

export default Header;