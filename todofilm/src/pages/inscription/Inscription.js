import React, { useState, useContext, useEffect } from 'react'
import InputComponent from '../../components/InputComponent'
import Logo from '../../components/Logo'
import '../../styles/general.css'
import { Link } from 'react-router-dom';
import {DatasUserContext} from '../../context/DatasUserContext'
import {DatasInputContext} from '../../context/DatasInputContext'

function Inscription() {

    const [verifDisabled, setVerifDisabled] = useState(true)

    const datasInputContext = useContext(DatasInputContext)
    const datasUserContext = useContext(DatasUserContext)

    useEffect(() => {
        (datasInputContext.conditionPrenom && datasInputContext.conditionNom && datasInputContext.conditionEmail && datasInputContext.conditionPasswordInit && datasInputContext.conditionPasswordVerif)
        && setVerifDisabled(false)
    })

    const showData = () => {
        datasUserContext.prenom = datasInputContext.prenom
        datasUserContext.nom = datasInputContext.nom
        datasUserContext.email = datasInputContext.email
        datasUserContext.password = datasInputContext.password
        datasInputContext.functionRemoteValue()
    }


    return (
        <div className='bloc-identify background-yellow'>

            <div className='full-logo'>
                <Logo />
            </div>

            <div className='bloc-identify-input'>
                <h1>Inscription</h1>
                
                <InputComponent id='prenom-input' placeholder='Prénom' type='text' />
                <InputComponent id='nom-input' placeholder='Nom' type='text' />
                <InputComponent id='email-input' placeholder='Adresse mail' type='email' />
                <InputComponent id='passwordInit-input' placeholder='Mot de passe' type='password' />
                <InputComponent id='passwordVerif-input' placeholder='Vérification mot de passe' type='password' />

                <div className="bloc-identify-Mdpo">
                    <Link to="/connexion">
                        Vous êtes déjà inscrit ? Venez vous connecter 😉
                    </Link>
                </div>

                <div className='bloc-identify-button'>
                    <Link to='/connexion'>
                        <button onClick={showData} disabled={verifDisabled} >Valider</button>
                    </Link>
                </div>
                
            </div>
        </div>
    );
}

export default Inscription;