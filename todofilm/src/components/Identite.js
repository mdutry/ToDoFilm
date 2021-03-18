import React, {Component} from 'react'
import './Identite.css'

class Identite extends Component {

    render () {

        const {label, data} = this.props

        return (
            <div className="bloc-identite">
                <span className='identite-span'>{label}</span>
                <p className='identite-par'>{data}</p>
            </div>
        )
    }
}

export default Identite