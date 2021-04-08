import React, {Component} from 'react'
import './InputFiltre.css';
import {datasInputComponent} from '../datas/datasInputComponent'

class InputFiltre extends Component {

    state = {
        value: '',
        isChecked: false
    }

    filtreValue = (e) => {
        const {id} = this.props

        this.setState({ value: e.target.value });
        
        switch (id) {
            case "recherche" :
                datasInputComponent.filtreRecherche = e.target.value
                break;
            case "year" :
                datasInputComponent.filtreYear = e.target.value
                break;
            case "genre" :
                datasInputComponent.filtreGenre = e.target.value
                break;
            case "country" :
                datasInputComponent.filtrePays = e.target.value
                break;
            case "actor" :
                datasInputComponent.filtreActeur = e.target.value
                break;
            case "duree-min" :
                datasInputComponent.filtreRealisateur = e.target.value
                break;
            case "duree-max" :
                datasInputComponent.filtreDureeMin = e.target.value
                break;
            case "note" :
                datasInputComponent.filtreNote = e.target.value
                break;
            case "recompense" :
                this.setState({isChecked: !this.state.isChecked})
                datasInputComponent.filtreRecompense = this.state.isChecked
                break;
        }
    }

    render () {

        console.log(datasInputComponent.filtreNote)

        const {isChecked} = this.state
        const {labelValue, smallValue, spanValue, type, id, min, max, step, filtreOption} = this.props

        const option = (id === 'year') ?
        (
            filtreOption.map((year) => (
                <option key={year} value={year}>{year}</option>
            ))
        ) : (id === 'genre') ?
        (
            filtreOption.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
            ))
        ) : (id === 'country') ?
        (
            filtreOption.map((country) => (
                <option key={country} value={country}>{country}</option>
            ))
        ) : (null)

        const input = (type === "select") ? 
        (<select onChange={this.filtreValue}>
            <option>- Choisir une option -</option>
            {option}
        </select> ) : (type === "range") ? 
        (<input 
            className="recherche-input-range-css"
            type={type}
            min={min}
            max={max}
            step={step}
            onChange={this.filtreValue}
        />) : (type === "checkbox") ?
        (<input 
            type={type}
            onChange={this.filtreValue}
            checked={isChecked}
        />) :
        (<input 
            type={type}
            onChange={this.filtreValue}
        />)

        return (
            <div className="bloc-recherche-input-filtre">

                <label>{labelValue}</label>
                <small>{smallValue}<span>{spanValue}</span></small>
                {input}

            </div>
        )
    }
}

export default InputFiltre