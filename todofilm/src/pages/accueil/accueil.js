import React from 'react';
import { Link} from 'react-router-dom';
import InputComponent from '../../components/InputComponent'
import Logo from '../../components/Logo'
import '../../styles/general.css'

   function Accueil() {

        return (
            
            <div className='bloc-identify background-yellow'>

            <div className='full-logo'>
                <Logo />
            </div>

            <div className='bloc-identify-input'>
               
                
               <Link to="/connexion">
                    <InputComponent type="button" value="Connexion"  />
                </Link>

               <Link to ="/inscription">
                    <InputComponent type="button" value="Inscription"  />
               </Link>

               <Link to="/mot-de-passe-oublie">
                   Mot de passe oublié
               </Link>


                
            </div>
        </div>

        )
        
    }

    export default Accueil ;
