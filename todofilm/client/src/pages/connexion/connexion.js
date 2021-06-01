import React, { useState } from 'react';
import Logo from '../../components/Logo';
import '../../styles/general.css';
import { Link, Redirect } from 'react-router-dom';
import { informationText } from '../../datas/informationText';
import './connexion.css';
import axios from 'axios'
import '../../components/InputComponent.css'

const Connexion = () => {
    
    const [values, setValues] = useState({ email: '', password:'' })
    const [redirect, setRedirect] = useState(false)
    const [smallValue, setSmallValue] = useState('')
    const [classSmallStyle, setClassSmallStyle] = useState('')
  
    const handleChange = (e) => {
        const { value, name } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleClick = (e) => {
        e.preventDefault()
        axios.post(
            '/api/connexion',
            {
                email: values.email,
                password: values.password
            }
        )
            .then(function (reponse) {
                setValues({ email: '', password:'' })
                localStorage.isAuthenticated = true
                localStorage.userId = reponse.data.userId
                console.log(reponse);
                setRedirect(true)
            })
            .catch(function (erreur) {
                console.log(erreur);
                setSmallValue(informationText.ERROR_Connexion)
                setClassSmallStyle("redText")
            })
    }
    
    return (
        <div className='bloc-identify background-yellow'>
            <div className='full-logo'>
                <Logo />
            </div>

            <div className='bloc-identify-input'>
                <h1>Connexion</h1>
                
                <form onSubmit={handleClick}>
                    <div className='input-style'>
                        <input type='text' placeholder='Adresse mail' name='email' onChange={handleChange} />
                    </div>
                    <div className='input-style'>
                        <input type='password' placeholder='Mot de passe' name='password' onChange={handleChange} />
                    </div>
                                        
                    <small className={classSmallStyle}>{smallValue}</small>

                    <div className="bloc-identify-text-lien">
                        <Link to="/inscription">
                            Vous n'êtes pas inscrit ? Venez vous inscrire 😉
                        </Link>
                        <Link to="/mot-de-passe-oublie">
                            {informationText.MdP_Oublie}
                        </Link>
                    </div>

                    {
                        (redirect) ?
                        <Redirect to='/recherche' />
                        :
                        <div className='bloc-identify-connexion-button'>
                            <button type='submit'>Valider</button>
                        </div>
                    }
                </form>
            </div>
        </div>    
    )
}

export default Connexion;