import React, { useState } from 'react';
import Logo from '../../../components/Logo';
import '../../../styles/general.css';
import '../../../components/InputComponent.css'
import { Redirect } from 'react-router-dom';
import { informationText } from '../../../datas/informationText';
import { passwordRegExp } from '../../../datas/textRegExp'
import axios from 'axios'

const MdPOublieConfirm = (props) => {

    const [values, setValues] = useState({ password: '', passwordVerif:'' })
    const [redirect, setRedirect] = useState(false)
    const [smallValue, setSmallValue] = useState('')
    const [classSmallStyle, setClassSmallStyle] = useState('')
    
    const { token } = props.match.params

    const handleChange = (e) => {
        const { value, name } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleClick = (e) => {
        e.preventDefault()
        const testPassword = passwordRegExp.test(values.password)

        if (values.password === values.passwordVerif && testPassword === true) {
            axios.post(
                `/api/reset-confirm/${token}`,
                    {
                        password: values.password
                    }
                )
                    .then(function (reponse) {
                        setValues({ password: '', passwordVerif:'' })
                        console.log(reponse.data)
                        setRedirect(true)
                    })
                    .catch(function (erreur) {
                        console.log(erreur)
                    }
            )
        } else if (values.password === values.passwordVerif && testPassword === false) {
            setSmallValue(informationText.ERROR_PasswordInit)
            setClassSmallStyle("redText")
        } else if (values.password !== values.passwordVerif && testPassword === true) {
            setSmallValue(informationText.ERROR_MdPConfirm)
            setClassSmallStyle("redText")
        } else if (values.password !== values.passwordVerif && testPassword === false) {
            setSmallValue(informationText.ERROR_PasswordInit + ' ' + informationText.ERROR_MdPConfirm)
            setClassSmallStyle("redText")
        }
        
    }
    
    return (
        <div className='bloc-identify background-yellow'>
            <div className='full-logo'>
                <Logo />
            </div>

            <div className='bloc-identify-input'>
                <h1>Réinitialisation mot de passe</h1>
                
                <form onSubmit={handleClick}>
                    <div className='input-style'>
                        <input name='password' type='password' placeholder='Mot de passe' value={values.password} onChange={handleChange} />
                    </div>
                    <div className='input-style'>
                        <input name='passwordVerif' type='password' placeholder='Vérification mot de passe' value={values.passwordVerif} onChange={handleChange} />
                    </div>
                                        
                    <small className={classSmallStyle}>{smallValue}</small>

                    {
                        (redirect) ?
                        <Redirect to='/connexion' />
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

export default MdPOublieConfirm;