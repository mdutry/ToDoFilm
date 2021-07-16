import React from 'react';
import { Link} from 'react-router-dom';
import Logo from '../../components/Logo'
import '../../styles/general.css'
import './HomeVisitor.css'
import { informationText } from '../../datas/informationText'

function Accueil() {
    return (
        
        <div className='bloc-identify background-yellow'>
            <div className='full-logo'>
                <Logo />
            </div>

            <div className='bloc-identify-input'>
                
                <div className='bloc-identify-link'>
                    <Link to='/connexion'>Connexion</Link>
                </div>
                
                <div className='bloc-identify-link'>
                    <Link to='/inscription'>Inscription</Link>
                </div>

                <div className="bloc-identify-Mdpo">
                    <Link to="/mot-de-passe-oublie">
                        {informationText.MdP_Oublie}
                    </Link>
                </div>
            </div>
        </div>
    )
    
}
export default Accueil