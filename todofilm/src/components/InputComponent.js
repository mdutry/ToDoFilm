import React, { useState, useContext } from 'react'
import './InputComponent.css'
import {informationText} from '../datas/informationText'
import {DatasInputContext} from '../context/DatasInputContext'

function InputComponent({id, placeholder, type, value}) {

    const [inputValue, setInputValue] = useState('')
    const [smallValue, setSmallValue] = useState('')
    const [classSmallStyle, setClassSmallStyle] = useState('')

    const datasInputContext = useContext(DatasInputContext)

    const conditionInput = (e) => {

        setInputValue(e.target.value)
        // PRENOM
        if (id === "prenom-input") {
            const textRegExp = /^[a-zA-ZÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ_-\s]{2,}$/;
            let testText = textRegExp.test(e.target.value);
            if (testText) {
                setSmallValue(informationText.OK)
                setClassSmallStyle("greenText")
                datasInputContext.prenom = e.target.value
                datasInputContext.functionRecupValue('prenom', e.target.value)
                datasInputContext.functionDisabledButton('prenom', true)
            } else {
                setSmallValue(informationText.ERROR_InputText)
                setClassSmallStyle("redText")
                datasInputContext.prenom = e.target.value
                datasInputContext.functionDisabledButton('prenom', false)
            }
        }

        // NOM
        else if (id === 'nom-input') {
            const textRegExp = /^[a-zA-ZÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ_-\s]{2,}$/
            let testText = textRegExp.test(e.target.value)
            if (testText) {
                setSmallValue(informationText.OK)
                setClassSmallStyle("greenText")
                datasInputContext.nom = e.target.value
                datasInputContext.functionRecupValue('nom', e.target.value)
                datasInputContext.functionDisabledButton('nom', true)
            } else {
                setSmallValue(informationText.ERROR_InputText)
                setClassSmallStyle("redText")
                datasInputContext.nom = e.target.value
                datasInputContext.functionDisabledButton('nom', false)
            }
        }

        // ADRESSE MAIL
        else if (id === 'email-input') {
            const emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/
            let testMail = emailRegExp.test(e.target.value)
            if (testMail) {
                setSmallValue(informationText.OK_Mail)
                setClassSmallStyle("greenText")
                datasInputContext.email = e.target.value
                datasInputContext.functionRecupValue('email', e.target.value)
                datasInputContext.functionDisabledButton('email', true)
            } else {
                setSmallValue(informationText.ERROR_Mail)
                setClassSmallStyle("redText")
                datasInputContext.email = e.target.value
                datasInputContext.functionDisabledButton('email', false)
            }
        }

        // PASSWORD INIT
        else if (id === 'passwordInit-input') {
            const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{8,}$/
            let testPassword = passwordRegExp.test(e.target.value)
            if (testPassword) {
                setSmallValue(informationText.OK_Password)
                setClassSmallStyle("greenText")
                datasInputContext.password = e.target.value
                datasInputContext.functionRecupValue('passwordInit', e.target.value)
                datasInputContext.functionDisabledButton('passwordInit', true)
            } else {
                setSmallValue(informationText.ERROR_PasswordInit)
                setClassSmallStyle("redText")
                datasInputContext.password = e.target.value
                datasInputContext.functionDisabledButton('passwordInit', false)
            }
        }
        
        // PASSWORD VERIF
        else if (id === 'passwordVerif-input') {
            if (e.target.value === datasInputContext.password) {
                setSmallValue(informationText.OK)
                setClassSmallStyle("greenText")
                datasInputContext.functionDisabledButton('passwordVerif', true)
            } else {
                setSmallValue(informationText.ERROR_PasswordVerif)
                setClassSmallStyle("redText")
                datasInputContext.functionDisabledButton('passwordVerif', false)
            }
        }
    }

    const input = (type === "button") ? 
    (<input 
        type={type}
        value={value}
    />) : 
    (<input 
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={conditionInput}
    />)

    return (
    <div className='input-style'>
        {input}
        <small className={classSmallStyle}>{smallValue}</small>
    </div>
    );
}

export default InputComponent