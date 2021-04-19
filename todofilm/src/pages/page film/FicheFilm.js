import React, { useState, useContext } from 'react'
import Identite from '../../components/Identite'
import FilmNotes from '../../components/FilmNotes'
import FilmAvis from './FilmAvis'
import FilmCritique from './FilmCritique'
import './FicheFilm.css'
import coeurTrue from '../../images/coeur_violet.png';
import coeurFalse from '../../images/coeur_violet_clair.png';
import {WishlistContext} from '../../context/WishlistContext'
import ModalTeaser from './ModalTeaser'

function FicheFilm({data}) {

    const [srcCoeur, setSrcCoeur] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const wishlistContext = useContext(WishlistContext);

    const changeImage = () => {
        setSrcCoeur(!srcCoeur)
        
        if (wishlistContext.liste.indexOf(data.id) === -1) {
            wishlistContext.addMovie(data.id)
        } else {
            wishlistContext.removeMovie(data.id)
        }
    }

    const showModal = () => {
        setOpenModal(true)
    }

    const hideModal = () => {
        setOpenModal(false)
    }
    

    return (
        <div className='bloc-film'>

            <div className='bloc-film-haut'>

                <div className='bloc-film-poster'>
                    <img src={data.poster} alt={data.title} />
                </div>

                <div className='bloc-film-details'>
                    <div className='bloc-film-titre'>
                        <div onClick={changeImage}>
                            {
                                (wishlistContext.liste.indexOf(data.id) !== -1)
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
                    <button onClick={showModal} >Bande-annonce</button>
                </div>
            </div>

            <div>FilmDetail.js par Fabrice :-)</div>

            <FilmCritique
                data={data.critiquePresse}
            />

            <FilmAvis
                data={data.avisSpectateur}
            />

            <ModalTeaser showModal={openModal} teaser={data.teaser} hideModal={hideModal} />

        </div>
    );
}

export default FicheFilm