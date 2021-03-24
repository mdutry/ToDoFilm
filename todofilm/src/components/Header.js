import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo_ToDoFilm_blanc from '../images/logo_ToDoFilm_blanc.png';
import avatar from '../images/avatar.png';
import loupe from '../images/loupe.png';
import './Header.css';
import {DatasUserContext} from '../context/DatasUserContext'


class Header extends Component {

   static contextType = DatasUserContext;

   render () {
      const {prenom} = this.context;
      return (
      <div className='bloc-header'>

         <div className='bloc-header-logo'>
            <img src={logo_ToDoFilm_blanc} alt='logo ToDoFilm' />
            <p>ToDoFilm</p>
         </div>   

         <div className='bloc-header-recherche'>
            <Link to='/recherche'>
               <img src={loupe} alt="loupe" />
            </Link>
         </div>   

         <div className='bloc-header-profil'>
            <div>
               <Link to='/profil'>
                  <img src={avatar} alt="avatar" />
                  {prenom}
               </Link>
            </div>
         </div>

      </div>
   )}
}

export default Header; 