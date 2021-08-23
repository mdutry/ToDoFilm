import React, { useState } from 'react'
import { informationText } from '../../../../datas/informationText'
import { passwordRegExp } from '../../../../datas/textRegExp'
import '../styles.css'

import axios from 'axios';

function ModalModifPassword({showModal, hideModal}) {

    const [values, setValues] = useState({ oldPassword: '', newPassword: '', verifPassword: '' })

    const userId = localStorage.userId

    const handleChange = (e) => {
        const { value, name } = e.target
        setValues({ ...values, [name]: value })
    }

    const validerModif = (e) => {

        let testPassword = passwordRegExp.test(values.newPassword)
        if (!testPassword) {
            return (
                document.getElementById('modif-newPassword').innerHTML = informationText.ERROR_PasswordInit,
                document.getElementById('modif-newPassword').className = 'redText'
            )
        }

        if (values.newPassword === values.oldPassword) {
            return (
                document.getElementById('modif-newPassword').innerHTML = informationText.ERROR_PasswordIdentique,
                document.getElementById('modif-newPassword').className = 'redText',
                document.getElementById('modif-oldPassword').innerHTML = informationText.ERROR_PasswordIdentique,
                document.getElementById('modif-oldPassword').className = 'redText'
            )
        }
        
        if (values.verifPassword === values.newPassword) {
            axios.patch( `/api/user/${userId}/password`, { oldPassword: values.oldPassword, newPassword: values.newPassword })
                .then(function (reponse) {
                    console.log(reponse);
                    document.getElementById('modif-oldPassword').innerHTML = ''
                    document.getElementById('modif-oldPassword').className = ''
                    document.getElementById('modif-newPassword').innerHTML = ''
                    document.getElementById('modif-newPassword').className = ''
                    document.getElementById('modif-verifPassword').innerHTML = ''
                    document.getElementById('modif-verifPassword').className = ''
                    setValues({ oldPassword: '', newPassword: '', verifPassword: '' })
                    hideModal(e)
                })
                .catch(function (erreur) {
                    console.log(erreur);
                    document.getElementById('modif-oldPassword').innerHTML = informationText.ERROR_PasswordFalse
                    document.getElementById('modif-oldPassword').className = 'redText'
                })
        } else {
            return (
            document.getElementById('modif-newPassword').innerHTML = informationText.ERROR_MdPConfirm,
            document.getElementById('modif-newPassword').className = 'redText',
            document.getElementById('modif-verifPassword').innerHTML = informationText.ERROR_MdPConfirm,
            document.getElementById('modif-verifPassword').className = 'redText'
            )
        }
        
        if (values.oldPassword === '') {
            document.getElementById('modif-oldPassword').innerHTML = informationText.ERROR_InputText
            document.getElementById('modif-oldPassword').className = "redText"
        }
        
        if (values.newPassword === '') {
            document.getElementById('modif-newPassword').innerHTML = informationText.ERROR_InputText
            document.getElementById('modif-newPassword').className = "redText"
        }
        
        if (values.verifPassword === '') {
            document.getElementById('modif-verifPassword').innerHTML = informationText.ERROR_InputText
            document.getElementById('modif-verifPassword').className = "redText"
        }

        if (values.oldPassword === '' &&
        values.newPassword === '' &&
        values.verifPassword === ''
        ) {
            hideModal(e)
            setValues({ oldPassword: '', newPassword: '', verifPassword: '' })
        }
    }

    const annulerModif = (e) => {
        hideModal(e)
        setValues({ oldPassword: '', newPassword: '', verifPassword: '' })
    }

    return (
        showModal &&
            <div className='profil-fond-modal'>
                <div className='profil-modal'>
                    <div className='profil-modal-bloc-input'>
                        <div className='profil-modal-input-div'>
                            <label>Mot de passe actuel :</label>
                            <input name='oldPassword' type='password' value={values.oldPassword} onChange={(e) => handleChange(e)} />
                            <small id='modif-oldPassword'></small>
                        </div>
                        <div className='profil-modal-input-div'>
                            <label>Nouveau mot de passe :</label>
                            <input name='newPassword' type='password' value={values.newPassword} onChange={(e) => handleChange(e)} />
                            <small id='modif-newPassword'></small>
                        </div>
                        <div className='profil-modal-input-div'>
                            <label>Vérification nouveau mot de passe :</label>
                            <input name='verifPassword' type='password' value={values.verifPassword} onChange={(e) => handleChange(e)} />
                            <small id='modif-verifPassword'></small>
                        </div>
                    </div>
                    
                    <div className='profil-modal-button'>
                        <button name='modalPassword' onClick={(e) => validerModif(e)}>Valider</button>
                        <button name='modalPassword' onClick={(e) => annulerModif(e)}>Annuler</button>
                    </div>
                    
                </div>
            </div>
    );
}

export default ModalModifPassword