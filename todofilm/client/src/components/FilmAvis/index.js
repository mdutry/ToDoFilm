import React, {Component} from 'react'
import FilmNotes from '../FilmNotes'
import './styles.css'

class FilmAvis extends Component {

    render () {

        const {data} = this.props

        return (
            <div className="bloc-film-avis">                
                <h2>Avis spectateurs</h2>
                <a href='https://www.allocine.fr/' target='_blank'>voir tous les avis spectateurs sur allocine.fr</a>

                {data.map(({pseudo, date, avatar, note, critique, i}) => (
                    <div className='bloc-avatar-avis' key={i}>

                        <div className='avatar-spectateur'>
                            <img src={avatar} alt={`avatar ${pseudo}`} />
                            <p>{pseudo}</p>
                        </div>

                        <div className='avis-spectateur'>
                            <FilmNotes
                                id='avis'
                                value={note}
                                small={`Publié le ${date}`}
                            />
                            <p>{critique}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        )
    }
}

export default FilmAvis