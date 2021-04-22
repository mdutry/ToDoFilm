import React, { useContext } from 'react';
import InputComponent from '../../components/InputComponent';
import Logo from '../../components/Logo';
import '../../styles/general.css';
import { DatasUserContext } from '../../context/DatasUserContext';
import { DatasInputContext } from '../../context/DatasInputContext';
import { Link } from 'react-router-dom';
import { informationText } from '../../datas/informationText';
import './connexion.css';

const Connexion = () => {
    
    const datasUserContext = useContext(DatasUserContext)
    const datasInputContext = useContext(DatasInputContext)

    const handleClick = () => {
        datasUserContext.isAuthenticated = true
        datasInputContext.functionRemoteValue()
    }
    
    return (
        <div className='bloc-identify background-yellow'>
            <div className='full-logo'>
                <Logo />
            </div>

            <div className='bloc-identify-input'>
                <h1>Connexion</h1>

                <InputComponent id='email-input' placeholder='Adresse mail' type='email'  />
                <InputComponent id='passwordInit-input' placeholder='Mot de passe' type='password'  />

                <div className="bloc-identify-Mdpo">
                    <Link to="/mot-de-passe-oublie">
                        {informationText.MdP_Oublie}
                    </Link>
                </div>

                {
                    (datasInputContext.email === datasUserContext.email &&
                    datasInputContext.password === datasUserContext.password &&
                    datasUserContext.email !== '' &&
                    datasUserContext.password !== '') ?
                    <div className='bloc-identify-button'>
                        <Link to='/recherche'>
                            <button onClick={handleClick} >Valider</button>
                        </Link>
                    </div>
                    :
                    <div className='bloc-identify-button-disabled'>
                        <button className='bouton-disabled' disabled >Valider</button>
                    </div>
                }    
            </div>
        </div>    
    )
}

export default Connexion;