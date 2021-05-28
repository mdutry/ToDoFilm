import React, {Component} from 'react'
import FilmNotes from '../../components/FilmNotes'

class FilmCritique extends Component {

    render () {

        const {data} = this.props

        return (
            <div className="bloc-film-critique">                
                <h2>Critique de presse</h2>
                {data.map(({titrePresse, journaliste, note, critique, i}) => (
                    <div key={i}>
                        <FilmNotes
                            id='critique'
                            titre={titrePresse}
                            value={note}
                            small={`par ${journaliste}`}
                        />
                        <p>{critique}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default FilmCritique