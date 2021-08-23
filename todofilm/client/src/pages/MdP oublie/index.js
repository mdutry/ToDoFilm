import React, { useState } from 'react';
import Logo from '../../components/Logo';
import '../../styles/general.css';
import { Link } from 'react-router-dom';
import { informationText } from '../../datas/informationText';
import axios from 'axios'
import '../../components/InputComponent.css'

const MdPOublie = (props) => {

    const [value, setValue] = useState('')
    const [smallValue, setSmallValue] = useState('')
    const [classSmallStyle, setClassSmallStyle] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        axios.post(
            '/api/reset',
                {
                    email: value,
                    hostClient: window.location.host
                }
            )
                .then(function (reponse) {
                    setValue('')
                    setSmallValue('Un mail vous a été envoyé 📤 Rendez-dans votre boîte mail pour la suite des opérations !')
                    setClassSmallStyle("greenText")
                    console.log(reponse.data)
                })
                .catch(function (erreur) {
                    console.log(erreur)
                    setSmallValue(informationText.ERROR_MdPReset)
                    setClassSmallStyle("redText")
                }
        )
    }
    
    return (
        <div className='bloc-identify background-yellow'>
            <div className='full-logo'>
                <Logo />
            </div>

            <div className='bloc-identify-input'>
                <h1>Mot de passe oublié</h1>
                
                <form onSubmit={handleClick}>
                    <div className='input-style'>
                        <input type='text' placeholder='Adresse mail' onChange={(e) => setValue(e.target.value)} />
                    </div>
                                        
                    <small className={classSmallStyle}>{smallValue}</small>

                    <div className="bloc-identify-text-lien">
                        <Link to="/inscription">
                            Vous n'êtes pas inscrit ? Venez vous inscrire 😉
                        </Link>
                    </div>
                    
                    <div className='bloc-identify-connexion-button'>
                        <button type='submit'>Valider</button>
                    </div>
                </form>
            </div>
        </div>    
    )
}

export default MdPOublie;