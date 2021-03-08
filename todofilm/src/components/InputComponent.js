import React, {Component} from 'react'
import './InputComponent.css'
import {informationText} from './informationText'

class InputComponent extends Component {

    state = {
        value: '',
        smallValue: '',
        classSmallStyle: ''
    }

    conditionInput = (e) => {
        const {id, recupData, type} = this.props

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
                recupData(e.target.value, true);
            } else {
                this.setState({
                    smallValue: informationText.ERROR_InputText,
                    classSmallStyle: "redText",
                });
                recupData(e.target.value, false);
            }
        }

        // NOM
        if (id === 'nom-input') {
            const textRegExp = /^[a-zA-ZÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ_-\s]{2,}$/
            let testText = textRegExp.test(e.target.value)
            if (testText) {
                this.setState({
                    smallValue: informationText.OK,
                    classSmallStyle:'greenText'
                })
                recupData(e.target.value, true)
            } else {
                this.setState({
                    smallValue: informationText.ERROR_InputText,
                    classSmallStyle:'redText'})
                recupData(e.target.value, false);
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
                recupData(e.target.value, true)
            } else {
                this.setState({
                    smallValue: informationText.ERROR_Mail,
                    classSmallStyle:'redText'})
                recupData(e.target.value, false);
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
                recupData(e.target.value, true)
            } else {
                this.setState({
                    smallValue: informationText.ERROR_PasswordInit,
                    classSmallStyle:'redText'})
                recupData(e.target.value, false);
            }
        }
        
        // PASSWORD VERIF
        else if (id === 'passwordVerif-input') {
            if (e.target.value === this.props.passwordVerif) {
                this.setState({
                    smallValue: informationText.OK,
                    classSmallStyle:'greenText'
                })
                recupData(true)
            } else {
                this.setState({
                    smallValue: informationText.ERROR_PasswordVerif,
                    classSmallStyle:'redText'})
                recupData(false);
            }
        }
    }
    
    render () {
        const {name, type} = this.props

        const input = (type === "button") ? 
        (<input 
            type={type}
            value={this.props.value}
        />) : 
        (<input 
            type={type}
            value={this.state.value}
            onChange={this.conditionInput}
        />)

        return (
        <div className='input-style'>
            <label>{name}</label>
            {input}
            <small className={this.state.classSmallStyle}>{this.state.smallValue}</small>
        </div>
        );
    }
}

export default InputComponent