import React, {Component} from 'react';
import InputComponent from '../../components/InputComponent';
import Logo from '../../components/Logo';
import '../../styles/general.css';
import {datasUser} from '../../datas/datasUser'
import {datasInputComponent} from '../../datas/datasInputComponent';

import {informationText} from '../../datas/informationText'
import { Link } from 'react-router-dom';

class connexion extends Component {
    render() {

    
        
        return(
            <div className='bloc-identify background-yellow'>

                <div className='full-logo'>
                    <Logo />
                 </div>

                  <div className='bloc-identify-input'>
                     <h1>Inscription</h1>

                       <datasInputComponent id='email-input' placeholder='Adresse mail' type='email' recupData={this.recupData} />

                       <datasInputComponent id='passwordInit-input' placeholder='Mot de passe' type='password' recupData={this.recupData} />

                     <Link to="/mot-de-passe-oublie" className="bloc-identify-Mdpo">
                       {informationText.MdP_Oublie}
                     </Link>

                     <Link to='/connexion' className='bloc-identify-button'>
                       <button onClick={this.showData} disabled={verifDisabled}>Valider</button>
                     </Link>
                </div>
            </div>    
        )
    }
}
export default connexion;