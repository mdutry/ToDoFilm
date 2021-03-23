import React, {Component} from 'react'
import './InputComponent.css'
import {informationText} from '../datas/informationText'
import {datasInputComponent} from '../datas/datasInputComponent'

class InputComponent extends Component {

    state = {
        value: '',
        smallValue: '',
        classSmallStyle: ''
    }

    conditionInput = (e) => {
        const {id, recupData} = this.props

        this.setState({ value: e.target.value });
        // PRENOM
        if (id === "prenom-input") {
            const textRegExp = /^[a-zA-ZÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ_-\s]{2,}$/;
            let testText = textRegExp.test(e.target.value);
            if (testText) {
                this.setState({
                    smallValue: informationText.OK,
                    classSmallStyle: "greenText",
                });
                datasInputComponent.prenom = e.target.value
                recupData('prenom', true);
            } else {
                this.setState({
                    smallValue: informationText.ERROR_InputText,
                    classSmallStyle: "redText",
                });
                datasInputComponent.prenom = e.target.value
                recupData('prenom', false);
            }
        }

        // NOM
        else if (id === 'nom-input') {
            const textRegExp = /^[a-zA-ZÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ_-\s]{2,}$/
            let testText = textRegExp.test(e.target.value)
            if (testText) {
                this.setState({
                    smallValue: informationText.OK,
                    classSmallStyle:'greenText'
                })
                datasInputComponent.nom = e.target.value
                recupData('nom', true);
            } else {
                this.setState({
                    smallValue: informationText.ERROR_InputText,
                    classSmallStyle:'redText'})
                datasInputComponent.nom = e.target.value
                recupData('nom', false);
            }
        }

        // ADRESSE MAIL
        else if (id === 'email-input') {
            const emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/
            let testMail = emailRegExp.test(e.target.value)
            if (testMail) {
                this.setState({
                    smallValue: informationText.OK_Mail,
                    classSmallStyle:'greenText'
                })
                datasInputComponent.email = e.target.value
                recupData('email', true);
            } else {
                this.setState({
                    smallValue: informationText.ERROR_Mail,
                    classSmallStyle:'redText'})
                datasInputComponent.email = e.target.value
                recupData('email', false);
            }
        }

        // PASSWORD INIT
        else if (id === 'passwordInit-input') {
            const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{8,}$/
            let testPassword = passwordRegExp.test(e.target.value)
            if (testPassword) {
                this.setState({
                    smallValue: informationText.OK_Password,
                    classSmallStyle:'greenText'
                })
                datasInputComponent.password = e.target.value
                recupData('passwordInit', true);
            } else {
                this.setState({
                    smallValue: informationText.ERROR_PasswordInit,
                    classSmallStyle:'redText'})
                datasInputComponent.password = e.target.value
                recupData('passwordInit', false);
            }
        }
        
        // PASSWORD VERIF
        else if (id === 'passwordVerif-input') {
            if (e.target.value === datasInputComponent.password) {
                this.setState({
                    smallValue: informationText.OK,
                    classSmallStyle:'greenText'
                })
                recupData('passwordVerif', true);
            } else {
                this.setState({
                    smallValue: informationText.ERROR_PasswordVerif,
                    classSmallStyle:'redText'})
                recupData('passwordVerif', false);
            }
        }
    }
    
    render () {
        const {placeholder, type, value} = this.props

        const input = (type === "button") ? 
        (<input 
            type={type}
            value={value}
        />) : 
        (<input 
            type={type}
            placeholder={placeholder}
            value={this.state.value}
            onChange={this.conditionInput}
        />)

        return (
        <div className='input-style'>
            {input}
            <small className={this.state.classSmallStyle}>{this.state.smallValue}</small>
        </div>
        );
    }
}

export default InputComponent