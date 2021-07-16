import React, {Component} from 'react'
import './styles.css'

class Identite extends Component {

    render () {

        const {label, data, id} = this.props
        const classIdentite = id === 'notes' ? 'bloc-identite-notes' : 'bloc-identite'
        const arrayOrNot = Array.isArray(data) ? data.join(', ') : data

        return (
            <div className={classIdentite}>
                <span className='identite-span'>{label}</span>
                <p className='identite-par'>{arrayOrNot}</p>
            </div>
        )
    }
}

export default Identite