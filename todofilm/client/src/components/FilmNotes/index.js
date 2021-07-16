import React, { Component } from 'react'
import './styles.css'

class FilmNotes extends Component {

    render () {

        const {titre, value, small, id} = this.props

        const classNote = (id === 'critique' || id === 'avis') ? 'bloc-film-notes-critiqueAvis' : 'bloc-film-notes-details'

        return (
            <div className={classNote}>
                <p>{titre}</p>
                <div className='bloc-film-notes-input'>
                    <input 
                        className="recherche-input-range-css"
                        type='range'
                        min={0}
                        max={5}
                        step={0.1}
                        value={value}
                    />
                    <small>{small}</small>
                </div>
            </div>
        )
    }
}

export default FilmNotes