import React, {Component} from 'react'
import './InputFiltre.css';

class InputFiltre extends Component {

    render () {

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
        (<select>
            {option}
        </select> ) : (type === "range") ? 
        (<input 
            type={type}
            min={min}
            max={max}
            step={step}
        />) :
        (<input 
            type={type}
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