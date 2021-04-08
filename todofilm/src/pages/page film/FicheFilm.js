import React, {Component} from 'react'
import Identite from '../../components/Identite'
import FilmNotes from '../../components/FilmNotes'
import FilmAvis from './FilmAvis'
import FilmCritique from './FilmCritique'
import './FicheFilm.css'
import coeurTrue from '../../images/coeur_violet.png';
import coeurFalse from '../../images/coeur_violet_clair.png';
import {WishlistContext} from '../../context/WishlistContext'

class FicheFilm extends Component {

    state = {
        srcCoeur: false
    }

    static contextType = WishlistContext;

    changeImage = () => {
        this.setState({
            srcCoeur: !this.state.srcCoeur
        })
        
        if (this.context.liste.indexOf(this.props.data.id) === -1) {
            this.context.addMovie(this.props.data.id)
        } else {
            this.context.removeMovie(this.props.data.id)
        }
    }
    
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
                            <div onClick={this.changeImage}>
                                {
                                    (this.context.liste.indexOf(data.id) !== -1)
                                    ? <img src={coeurTrue} alt='coeur violet wishlist' />
                                    : <img src={coeurFalse} alt='coeur violet wishlist' />
                                }
                                
                            </div>
                            
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