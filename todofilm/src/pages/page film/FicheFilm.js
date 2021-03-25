import React, {Component} from 'react'
import Identite from '../../components/Identite'
import FilmNotes from '../../components/FilmNotes'
import FilmAvis from './FilmAvis'
import FilmCritique from './FilmCritique'
import './FicheFilm.css'
import coeur_violet from '../../images/coeur_violet.png';
import coeur_violet_clair from '../../images/coeur_violet_clair.png';
import {WishlistContext} from '../../context/WishlistContext'

class FicheFilm extends Component {

    static contextType = WishlistContext;
    
    render () {

        const {data} = this.props
        const {liste, addMovie, removeMovie} = this.context;

        return (
            <div className='bloc-film'>

                <div className='bloc-film-haut'>

                    <div className='bloc-film-poster'>
                        <img src={data.poster} alt={data.title} />
                    </div>

                    <div className='bloc-film-details'>
                        <div className='bloc-film-titre'>

                            {
                                (liste.indexOf(data.id) != -1)
                                    ? <img
                                        src={coeur_violet}
                                        onClick={(data.id) => removeMovie(data.id)}
                                        alt='coeur_violet'
                                    />
                                    : <img
                                        src={coeur_violet_clair}
                                        onClick={(data.id) => addMovie(data.id)}
                                        alt='coeur_violet_clair'
                                    />
                            }
                            
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