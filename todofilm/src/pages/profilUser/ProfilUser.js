import React, { useState, useContext, useEffect } from 'react'
import './ProfilUser.css'
import avatar from '../../images/avatar.png';
import coeur_blanc from '../../images/coeur_blanc.png';
import Identite from '../../components/Identite'
import { Link } from 'react-router-dom';
import {DatasUserContext} from '../../context/DatasUserContext'
import ModalModifInfos from './ModalModifInfos';

function ProfilUser() {

    const [openModal, setOpenModal] = useState(false)
    const {prenom, nom, email} = useContext(DatasUserContext)

    const showModal = () => {
        setOpenModal(true)
    }

    const hideModal = () => {
        setOpenModal(false)
    }

    useEffect(() => {
        console.log('dans le useEffect')
    }, [prenom])

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
                <h1>Hi, {prenom}</h1>
                <Identite label="Prénom : " data={prenom} />
                <Identite label="Nom : " data={nom} />
                <Identite label="Adresse mail : " data={email} />
                <button onClick={showModal} className="input-modif-info">Modifier les informations</button>
                <Link to='/' className="input-deconnexion">Déconnexion</Link>
            </div>

            <ModalModifInfos showModal={openModal} hideModal={hideModal} />

        </div>
    );
}

export default ProfilUser