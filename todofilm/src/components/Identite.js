import React, {Component} from 'react'
import './Identite.css'

class Identite extends Component {

    render () {

<<<<<<< HEAD
        const {label, data} = this.props

        return (
            <div className="bloc-identite">
                <span className='identite-span'>{label}</span>
                <p className='identite-par'>{data}</p>
=======
        const {label, data, id} = this.props
        const classIdentite = id === 'notes' ? 'bloc-identite-notes' : 'bloc-identite'
        const arrayOrNot = Array.isArray(data) ? data.join(', ') : data

        return (
            <div className={classIdentite}>
                <span className='identite-span'>{label}</span>
                <p className='identite-par'>{arrayOrNot}</p>
>>>>>>> 53417f2c1df72891dddc073bd462eb1b08a13e6e
            </div>
        )
    }
}

export default Identite