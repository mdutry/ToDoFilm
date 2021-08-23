import React, { useState, useEffect } from 'react'
import './styles.css'
import { informationText } from '../../datas/informationText'
import { nameRegExp, emailRegExp, passwordRegExp } from '../../datas/textRegExp'
import Logo from '../../components/Logo'
import '../../styles/general.css'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'

function Inscription() {

    const [prenom, setPrenom] = useState({ data: '', condition: false, smallValue: '', classSmallStyle: '' })
    const [nom, setNom] = useState({ data: '', condition: false, smallValue: '', classSmallStyle: '' })
    const [email, setEmail] = useState({ data: '', condition: false, smallValue: '', classSmallStyle: '' })
    const [password, setPassword] = useState({ data: '', condition: false, smallValue: '', classSmallStyle: '' })
    const [passwordVerif, setPasswordVerif] = useState({ data: '', condition: false, smallValue: '', classSmallStyle: '' })
    const [verifDisabled, setVerifDisabled] = useState(true)    
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        (prenom.condition && nom.condition && email.condition && password.condition && passwordVerif.condition)
        && setVerifDisabled(false)
    }, [prenom, nom, email, password, passwordVerif])

    const handleChangePrenom = (e) => {
        setPrenom({...prenom, data: e.target.value})
        let testText = nameRegExp.test(e.target.value);
        if (testText) {
            setPrenom( prevPrenom => {
                return { ...prevPrenom, condition: true, smallValue: informationText.OK, classSmallStyle: 'greenText' }
            })
        } else {
            setPrenom( prevPrenom => {
                return { ...prevPrenom, condition: false, smallValue: informationText.ERROR_InputText, classSmallStyle: 'redText' }
            })
        }
    }

    const handleChangeNom = (e) => {
        setNom({...nom, data: e.target.value})
        let testText = nameRegExp.test(e.target.value);
        if (testText) {
            setNom( prevNom => {
                return { ...prevNom, condition: true, smallValue: informationText.OK, classSmallStyle: 'greenText' }
            })
        } else {
            setNom( prevNom => {
                return { ...prevNom, condition: false, smallValue: informationText.ERROR_InputText, classSmallStyle: 'redText' }
            })
        }
    }

    const handleChangeEmail = (e) => {
        setEmail({...email, data: e.target.value})
        let testText = emailRegExp.test(e.target.value);
        if (testText) {
            setEmail( prevMail => {
                return { ...prevMail, condition: true, smallValue: informationText.OK_Mail, classSmallStyle: 'greenText' }
            })
        } else {
            setEmail( prevMail => {
                return { ...prevMail, condition: false, smallValue: informationText.ERROR_Mail, classSmallStyle: 'redText' }
            })
        }
    }

    const handleChangePassword = (e) => {
        setPassword({...password, data: e.target.value})
        let testText = passwordRegExp.test(e.target.value);
        if (testText) {
            setPassword( prevPassword => {
                return { ...prevPassword, condition: true, smallValue: informationText.OK_Password, classSmallStyle: 'greenText' }
            })
        } else {
            setPassword( prevPassword => {
                return { ...prevPassword, condition: false, smallValue: informationText.ERROR_PasswordInit, classSmallStyle: 'redText' }
            })
        }
    }

    const handleChangePasswordVerif = (e) => {
        setPasswordVerif({...passwordVerif, data: e.target.value})
        if (e.target.value === password.data) {
            setPasswordVerif( prevPasswordVerif => {
                return { ...prevPasswordVerif, condition: true, smallValue: informationText.OK_Password, classSmallStyle: 'greenText' }
            })
        } else {
            setPasswordVerif( prevPasswordVerif => {
                return { ...prevPasswordVerif, condition: false, smallValue: informationText.ERROR_PasswordVerif, classSmallStyle: 'redText' }
            })
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        axios.post(
            '/api/inscription',
            {
                prenom: prenom.data,
                nom: nom.data,
                email: email.data,
                password: password.data
            }
        )
            .then(function (reponse) {
                console.log(reponse);
                setRedirect(true)
            })
            .catch(function (erreur) {
                console.log(erreur);
            })
    }

    return (
        <div className='bloc-identify background-yellow'>

            <div className='full-logo'>
                <Logo />
            </div>

            <div className='bloc-identify-input'>
                <h1>Inscription</h1>
                
                <form onSubmit={handleClick}>
                    <div className='input-style'>
                        <input type='text' placeholder='Prénom' value={prenom.data} onChange={handleChangePrenom} />
                        <small className={prenom.classSmallStyle}>{prenom.smallValue}</small>
                    </div>
                    
                    <div className='input-style'>
                        <input  type='text' placeholder='Nom' value={nom.data} onChange={handleChangeNom} />
                        <small className={nom.classSmallStyle}>{nom.smallValue}</small>
                    </div>
                    
                    <div className='input-style'>
                        <input  type='email' placeholder='Adresse mail' value={email.data} onChange={handleChangeEmail} />
                        <small className={email.classSmallStyle}>{email.smallValue}</small>
                    </div>
                    
                    <div className='input-style'>
                        <input  type='password' placeholder='Mot de passe' value={password.data} onChange={handleChangePassword} />
                        <small className={password.classSmallStyle}>{password.smallValue}</small>
                    </div>

                    <div className='input-style'>
                        <input type='password' placeholder='Vérification mot de passe' value={passwordVerif.data} onChange={handleChangePasswordVerif} />
                        <small className={passwordVerif.classSmallStyle}>{passwordVerif.smallValue}</small>
                    </div>

                    {
                        (redirect) ?
                        <Redirect to='/connexion' />
                        :
                        <div className='bloc-identify-connexion-button'>
                            <button type='submit' disabled={verifDisabled}>Valider</button>
                        </div>
                    }
                </form>

                <div className="bloc-identify-text-lien">
                    <Link to="/connexion">
                        Vous êtes déjà inscrit ? Venez vous connecter 😉
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Inscription;