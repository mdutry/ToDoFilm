import React, { useState, useContext } from 'react'
import { informationText } from '../../datas/informationText'
import { nameRegExp, emailRegExp } from '../../datas/textRegExp'
import { DatasUserContext } from '../../context/DatasUserContext'

import axios from 'axios';

function ModalModifInfos({ showModal, hideModal }) {

    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const datasUser = useContext(DatasUserContext)

    const userId = localStorage.userId

    const validerModif = (e) => {
        if (prenom !== '') {
            let testText = nameRegExp.test(prenom);
            if (testText) {
                axios.patch( `http://localhost:5000/api/user/${userId}`, { prenom: prenom })
                    .then(function (reponse) {
                        console.log(reponse)
                    })
                    .catch(function (erreur) {
                        console.log(erreur);
                    })
                datasUser.prenom = prenom
                setPrenom('')
                document.getElementById('modif-prenom').innerHTML = ''
                document.getElementById('modif-prenom').className = ''
            } else {
                document.getElementById('modif-prenom').innerHTML = informationText.ERROR_InputText
                document.getElementById('modif-prenom').className = "redText"
            }
        }
        
        if (nom !== '') {
            let testText = nameRegExp.test(nom);
            if (testText) {
                axios.patch( `http://localhost:5000/api/user/${userId}`, { nom: nom })
                    .then(function (reponse) {
                        console.log(reponse);
                    })
                    .catch(function (erreur) {
                        console.log(erreur);
                    })
                datasUser.nom = nom
                setNom('')
                document.getElementById('modif-nom').innerHTML = ''
                document.getElementById('modif-nom').className = ''
            } else {
                document.getElementById('modif-nom').innerHTML = informationText.ERROR_Mail
                document.getElementById('modif-nom').className = "redText"
            }
        } 
        
        if (email !== '') {
            let testText = emailRegExp.test(email);
            if (testText) {
                axios.patch( `http://localhost:5000/api/user/${userId}`, { email: email })
                    .then(function (reponse) {
                        console.log(reponse);
                    })
                    .catch(function (erreur) {
                        console.log(erreur);
                    })
                datasUser.email = email
                setEmail('')
                document.getElementById('modif-email').innerHTML = ''
                document.getElementById('modif-email').className = ''
            } else {
                document.getElementById('modif-email').innerHTML = informationText.ERROR_Mail
                document.getElementById('modif-email').className = "redText"
            }
        }

        if (document.getElementById('modif-prenom').className === '' &&
        document.getElementById('modif-nom').className === '' &&
        document.getElementById('modif-email').className === ''
        ) {
            hideModal(e)
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
                    </div>
                    
                    <div className='profil-modal-button'>
                        <button name='modalInfos' onClick={(e) => validerModif(e)}>Valider</button>
                        <button name='modalInfos' onClick={(e) => hideModal(e)}>Annuler</button>
                    </div>
                    
                </div>
            </div>
    );
}

export default ModalModifInfos