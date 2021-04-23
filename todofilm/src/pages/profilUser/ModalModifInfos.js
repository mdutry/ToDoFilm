import React, { useState, useContext, useEffect } from 'react'
import { DatasUserContext } from '../../context/DatasUserContext'
import {informationText} from '../../datas/informationText'

function ModalModifInfos({showModal, hideModal}) {

    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userContext = useContext(DatasUserContext)

    const validerModif = () => {
        if (prenom !== '') {
            const textRegExp = /^[a-zA-ZÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ_-\s]{2,}$/;
            let testText = textRegExp.test(prenom);
            if (testText) {
                userContext.prenom = prenom
                setPrenom('')
                document.getElementById('modif-prenom').innerHTML = ''
                document.getElementById('modif-prenom').className = ''
            } else {
                document.getElementById('modif-prenom').innerHTML = informationText.ERROR_InputText
                document.getElementById('modif-prenom').className = "redText"
            }
        }
        
        if (nom !== '') {
            const textRegExp = /^[a-zA-ZÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ_-\s]{2,}$/;
            let testText = textRegExp.test(nom);
            if (testText) {
                userContext.nom = nom
                setNom('')
                document.getElementById('modif-nom').innerHTML = ''
                document.getElementById('modif-nom').className = ''
            } else {
                document.getElementById('modif-nom').innerHTML = informationText.ERROR_Mail
                document.getElementById('modif-nom').className = "redText"
            }
        } 
        
        if (email !== '') {
            const textRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
            let testText = textRegExp.test(email);
            if (testText) {
                userContext.email = email
                setEmail('')
                document.getElementById('modif-email').innerHTML = ''
                document.getElementById('modif-email').className = ''
            } else {
                document.getElementById('modif-email').innerHTML = informationText.ERROR_Mail
                document.getElementById('modif-email').className = "redText"
            }
        } 
        
        if (password !== '') {
            const textRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{8,}$/;
            let testText = textRegExp.test(password);
            if (testText) {
                userContext.password = password
                setPassword('')
                document.getElementById('modif-password').innerHTML = ''
                document.getElementById('modif-password').className = ''
            } else {
                document.getElementById('modif-password').innerHTML = informationText.ERROR_PasswordInit
                document.getElementById('modif-password').className = "redText"
            }
        }

        if (document.getElementById('modif-prenom').className === '' &&
        document.getElementById('modif-nom').className === '' &&
        document.getElementById('modif-email').className === '' && 
        document.getElementById('modif-password').className === '') {
            hideModal()
        }
    }

    return (
        showModal &&
            <div className='profil-fond-modal'>
                <div className='profil-modal'>
                    <div className='profil-modal-bloc-input'>
                        <div className='profil-modal-input-div'>
                            <label>Prénom :</label>
                            <input type='text' value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                            <small id='modif-prenom'></small>
                        </div>
                        <div className='profil-modal-input-div'>
                            <label>Nom :</label>
                            <input type='text' value={nom} onChange={(e) => setNom(e.target.value)} />
                            <small id='modif-nom'></small>
                        </div>
                        <div className='profil-modal-input-div'>
                            <label>Adresse mail :</label>
                            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <small id='modif-email'></small>
                        </div>
                        <div className='profil-modal-input-div'>
                            <label>Password :</label>
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <small id='modif-password'></small>
                        </div>
                    </div>
                    
                    <div className='profil-modal-button'>
                        <button onClick={validerModif}>Valider</button>
                        <button onClick={hideModal}>Annuler</button>
                    </div>
                    
                </div>
            </div>
    );
}

export default ModalModifInfos