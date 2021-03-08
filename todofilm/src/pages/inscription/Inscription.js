import React, {Component} from 'react'
import InputComponent from '../../components/InputComponent'
import Logo from '../../components/Logo'
import './Inscription.css'

class Inscription extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // data: {
        prenom: '',
        nom: '',
        email: '',
        password: '',
        isDisabled: true,
      // }
        conditionPrenom: false,
        conditionNom: false,
        conditionEmail: false,
        conditionPasswordInit: false,
        conditionPasswordVerif: false
    }
  }

  recupDataPrenom = (data, condition) => {
    this.setState({
      prenom: data,
      conditionPrenom: condition
    })
  }

  recupDataNom = (data, condition) => {
    this.setState({
        nom: data,
        conditionNom: condition
      })
  }

  recupDataMail = (data, condition) => {
    this.setState({
      email: data,
      conditionEmail: condition
    })
  }

  recupDataPassword = (data, condition) => {
    this.setState({
      password: data,
      conditionPasswordInit: condition
    })
  }

  recupDataPasswordVerif = (condition) => {
    this.setState({conditionPasswordVerif: condition})
  }


  showData = () => {
    console.log("PARENT => Prénom : ", this.state.prenom, "- Nom : ", this.state.nom, 
    "- Adresse mail : ", this.state.email, "- Mot de passe : ", this.state.password)
  }

  render () {
    const verifDisabled = (this.state.conditionPrenom === true && this.state.conditionNom === true &&
    this.state.conditionEmail === true && this.state.conditionPasswordInit === true &&
    this.state.conditionPasswordVerif === true) ? false : true

    return (
      <div className='bloc-inscription'>

        <div className='full-logo'>
          <Logo />
        </div>

        <div className='bloc-inscription-input'>
          <h1>Inscription</h1>
          
          <InputComponent id='prenom-input' name='Prénom :' type='text' recupData={this.recupDataPrenom} />
          <InputComponent id='nom-input' name='Nom :' type='text' recupData={this.recupDataNom} />
          <InputComponent id='email-input' name='Adresse mail :' type='email' recupData={this.recupDataMail} />
          <InputComponent id='passwordInit-input' name='Mot de passe :' type='password' passwordInit={this.state.password} recupData={this.recupDataPassword}/>
          <InputComponent id='passwordVerif-input' name='Confirmez le mot de passe :' type='password' passwordVerif={this.state.password} recupData={this.recupDataPasswordVerif} />

          <button onClick={this.showData} disabled={verifDisabled}>Valider</button>
        </div>
    </div>
    );
  }
}

export default Inscription;
