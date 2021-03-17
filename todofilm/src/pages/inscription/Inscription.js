import React, {Component} from 'react'
import InputComponent from '../../components/InputComponent'
import Logo from '../../components/Logo'
import '../../styles/general.css'
import {datasUser} from '../../datas/datasUser'
import {datasInputComponent} from '../../datas/datasInputComponent'
import { Link } from 'react-router-dom';

class Inscription extends Component {

    state = {
        conditionPrenom: false,
        conditionNom: false,
        conditionEmail: false,
        conditionPasswordInit: false,
        conditionPasswordVerif: false
    }

    recupData = (id, condition) => {
        if (id === 'prenom') {
            this.setState({
                conditionPrenom: condition
            })
        }
        else if (id === 'nom') {
            this.setState({
                conditionNom: condition
            })
        }
        else if (id === 'email') {
            this.setState({
                conditionEmail: condition
            })
        }
        else if (id === 'passwordInit') {
            this.setState({
                conditionPasswordInit: condition
            })
        }
        else if (id === 'passwordVerif') {
            this.setState({
                conditionPasswordVerif: condition
            })
        }
    }

    showData = () => {
        datasUser.prenom = datasInputComponent.prenom
        datasUser.nom = datasInputComponent.nom
        datasUser.email = datasInputComponent.email
        datasUser.password = datasInputComponent.password
        console.log("Prénom : ", datasUser.prenom, "- Nom : ", datasUser.nom, 
        "- Adresse mail : ", datasUser.email, "- Mot de passe : ", datasUser.password)
    }

    render () {

        const {conditionPrenom, conditionNom, conditionEmail, conditionPasswordInit, conditionPasswordVerif} = this.state
      
        const verifDisabled = (conditionPrenom === true && conditionNom === true && conditionEmail === true && conditionPasswordInit === true &&
        conditionPasswordVerif === true) ? false : true;

        return (
        <div className='bloc-identify background-yellow'>

            <div className='full-logo'>
                <Logo />
            </div>

            <div className='bloc-identify-input'>
                <h1>Inscription</h1>
                
                <InputComponent id='prenom-input' placeholder='Prénom' type='text' recupData={this.recupData} />
                <InputComponent id='nom-input' placeholder='Nom' type='text' recupData={this.recupData} />
                <InputComponent id='email-input' placeholder='Adresse mail' type='email' recupData={this.recupData} />
                <InputComponent id='passwordInit-input' placeholder='Mot de passe' type='password' recupData={this.recupData} />
                <InputComponent id='passwordVerif-input' placeholder='Vérification mot de passe' type='password' recupData={this.recupData} />

                <Link to='/connexion' className='bloc-identify-button'>
                    <button onClick={this.showData} disabled={verifDisabled}>Valider</button>
                </Link>
            </div>
        </div>
        );
    }
}

export default Inscription;