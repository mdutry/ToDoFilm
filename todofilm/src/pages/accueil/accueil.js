import React from 'react';
import { Link} from 'react-router-dom';
import InputComponent from '../../components/InputComponent'
import Logo from '../../components/Logo'
import '../../styles/general.css'
import './Accueil.css'
import {informationText} from '../../datas/informationText'

function Accueil() {
    return (
        
        <div className='bloc-identify background-yellow'>
            <div className='full-logo'>
                <Logo />
            </div>

            <div className='bloc-identify-input'>
                <Link to="/connexion" className="bloc-identify-link-input">
                    <InputComponent type="button" value="Connexion"  />
                </Link>
                <Link to ="/inscription" className="bloc-identify-link-input">
                    <InputComponent type="button" value="Inscription"  />
                </Link>
                <Link to="/mot-de-passe-oublie" className="bloc-identify-Mdpo">
                    {informationText.MdP_Oublie}
                </Link>
            </div>
        </div>
    )
    
}
export default Accueil