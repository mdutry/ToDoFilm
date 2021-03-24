import React, {Component} from 'react'
import './ProfilUser.css'
import avatar from '../../images/avatar.png';
import coeur_blanc from '../../images/coeur_blanc.png';
import Identite from '../../components/Identite'
import { Link } from 'react-router-dom';
import {DatasUserContext} from '../../context/DatasUserContext'

class ProfilUser extends Component {

    modifInformation = () => {
        prompt("Prénom")
    }

    static contextType = DatasUserContext;
    
    render () {

        const {prenom, nom, email} = this.context;

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
                <Link onClick={this.modifInformation} className="input-modif-info">Modifier les informations</Link>
                <Link to='/' className="input-deconnexion">Déconnexion</Link>
            </div>

        </div>
        );
    }
}

export default ProfilUser