import React, { useState, useContext, useEffect } from 'react'
import './ProfilUser.css'
import avatar from '../../images/avatar.png';
import coeur_blanc from '../../images/coeur_blanc.png';
import Identite from '../../components/Identite'
import { Link } from 'react-router-dom';
import { DatasUserContext } from '../../context/DatasUserContext'
import ModalModifInfos from './ModalModifInfos';
import ModalModifPassword from './ModalModifPassword'
import axios from 'axios';

function ProfilUser() {

    const [openModalPassword, setOpenModalPassword] = useState(false)
    const [openModalInfos, setOpenModalInfos] = useState(false)
    const datasUser = useContext(DatasUserContext)
 
    const userId = localStorage.userId
 
    useEffect (() => {
        axios.get(`/api/user/${userId}`)
            .then (res => {
                datasUser.prenom = res.data.user.prenom
                datasUser.nom = res.data.user.nom
                datasUser.email = res.data.user.email
            })
    }, [])

    const showModal = (e) => {
        if (e.target.name === 'modalInfos') {
            setOpenModalInfos(true)
        } else if (e.target.name === 'modalPassword') {
            setOpenModalPassword(true)
        }
    }

    const hideModal = (e) => {
        if (e.target.name === 'modalInfos') {
            setOpenModalInfos(false)
        } else if (e.target.name === 'modalPassword') {
            setOpenModalPassword(false)
        }
    }

    const deconnectFunction = () => {
        localStorage.clear()
    }

    return (
        <div className='bloc-profilUser'>

            <div className="bloc-profilUser-left">
                <img src={avatar} alt="avatar profil" />
                <Link to='/wishlist'>
                    <img src={coeur_blanc} alt='coeur blanc' />
                    Wishlist
                </Link>
            </div>

            <div className="bloc-profilUser-right">
                <h1>Hi, {datasUser.prenom}</h1>
                <Identite label="Prénom : " data={datasUser.prenom} />
                <Identite label="Nom : " data={datasUser.nom} />
                <Identite label="Adresse mail : " data={datasUser.email} />
                <button name='modalPassword' onClick={(e) => showModal(e)} className="input-modif-info">Modifier le mot de passe</button>
                <button name='modalInfos' onClick={(e) => showModal(e)} className="input-modif-info">Modifier les informations</button>
                <Link to='/' onClick={deconnectFunction} className="input-deconnexion">Déconnexion</Link>
            </div>

            <ModalModifPassword showModal={openModalPassword} hideModal={hideModal} />
            <ModalModifInfos showModal={openModalInfos} hideModal={hideModal} />

        </div>
    );
}

export default ProfilUser