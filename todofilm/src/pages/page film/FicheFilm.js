import React, {Component} from 'react'
import Identite from '../../components/Identite'
import FilmNotes from '../../components/FilmNotes'
import FilmAvis from './FilmAvis'
import FilmCritique from './FilmCritique'
import './FicheFilm.css'
import coeur_violet from '../../images/coeur_violet.png';

class FicheFilm extends Component {
    
    render () {

        const {data} = this.props

        return (
        <div className='bloc-film'>

            <div className='bloc-film-haut'>

                <div className='bloc-film-poster'>
                    <img src={data.poster} alt={data.title} />
                </div>

                <div className='bloc-film-details'>
                    <div className='bloc-film-titre'>
                        <img src={coeur_violet} alt='coeur_violet' />
                        <h1>{data.title}</h1>
                    </div>
                    <Identite label='Date de sortie : ' data={data.released} />
                    <Identite label='Durée : ' data={`${data.runtime} mn`} />
                    <Identite label='Genre : ' data={data.genre} />
                    <Identite label='De ' data={data.director} />
                    <Identite label='Avec ' data={data.actors} />
                    <Identite label='Pays : ' data={data.country} />
                    <Identite label='Notes :' id='notes' />
                    <div className='notes-detail-film'>
                        <FilmNotes
                            titre='PRESSE'
                            value={data.pressNote}
                            small={`${data.pressNote}/5`}
                        />
                        <FilmNotes
                            titre='SPECTATEURS'
                            value={data.spectatorsNote}
                            small={`${data.spectatorsNote}/5`}
                        />
                    </div>
                    <Identite label='Récompense : ' data={data.awards} />
                    <a href={data.teaser} target='_blank'>Bande-annonce</a>
                </div>
            </div>

            <div>FilmDetail.js par Fabrice :-)</div>

            <FilmCritique
                data={data.critiquePresse}
            />

            <FilmAvis
                data={data.avisSpectateur}
            />

        </div>
        );
    }
}

export default FicheFilm