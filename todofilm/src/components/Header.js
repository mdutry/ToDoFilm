import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo_ToDoFilm_blanc from '../images/logo_ToDoFilm_blanc.png';
import avatar from '../images/avatar.png';
import loupe from '../images/loupe.png';
import menuBlanc from '../images/menu_blanc.png';
import croixBlanche from '../images/croix_blanche.png';
import './Header.css';
import { DatasUserContext } from '../context/DatasUserContext'
import useScreenSize from "./useScreenSize"


function Header() {

   const [showMenu, setShowMenu] = useState(false)

   const {prenom} = useContext(DatasUserContext)

   const screenWidth = useScreenSize().width

   const functionShowMenu = () => {
      if (showMenu === true) {
            setShowMenu(false)
      } else if (showMenu === false) {
            setShowMenu(true)
      }
   }

   const responsiveMenu = showMenu ?
      <div className='bloc-header-768-true'>
         <div className='bloc-header-responsive height-23' onClick={functionShowMenu}>
            <img src={croixBlanche} alt={croixBlanche} />            
         </div>

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
   :
      <div className='bloc-header-768-false'>
         <div className='bloc-header-responsive height-100' onClick={functionShowMenu}>
            <img src={menuBlanc} alt={menuBlanc} />
         </div>
      </div>

   return (
      <Fragment>
         {
            screenWidth <= 768 ?
               responsiveMenu
            :
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
         }
      </Fragment>
   )
}

export default Header; 