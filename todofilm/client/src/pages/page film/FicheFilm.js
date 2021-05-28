import React, { useState, useEffect } from 'react'
import Identite from '../../components/Identite'
import FilmNotes from '../../components/FilmNotes'
import FilmAvis from './FilmAvis'
import FilmCritique from './FilmCritique'
import FilmDetail from './FilmDetail'
import './FicheFilm.css'
import coeurTrue from '../../images/coeur_violet.png';
import coeurFalse from '../../images/coeur_violet_clair.png';
import ModalTeaser from './ModalTeaser'
import axios from 'axios';

function FicheFilm({ data }) {

    const [openModal, setOpenModal] = useState(false)
    const released = new Date(data.released)

    const [srcCoeur, setScrCoeur] = useState(false)
    const [wishlist, setWishlist] = useState([])

    const userId = localStorage.userId

    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/${userId}`)
            .then (res => {
                setWishlist(res.data.user.wishlist)
            })
    }, [])

    const addMovie = (id) => {
        axios.patch( `http://localhost:5000/api/user/${userId}/wishlist`, { movieId: id })
            .then(function (reponse) {
                console.log(reponse);
            })
            .catch(function (erreur) {
                console.log(erreur);
            })
    }

    const removeMovie = (id) => {
        axios.delete( `http://localhost:5000/api/user/${userId}/wishlist/${id}`)
            .then(function (reponse) {
                console.log(reponse);
            })
            .catch(function (erreur) {
                console.log(erreur);
            })
    }

    const addMovieLocal = (target) => {
        const array = wishlist
        array.push(target)
        setWishlist(array)
    }

    const removeMovieLocal = (target) => {
        const array = wishlist
        const index = array.indexOf(target)
        array.splice(index, 1)
        setWishlist(array)
    }

    const changeImage = (id) => {
        setScrCoeur(!srcCoeur)
        
        if (wishlist.includes(id)) {
            removeMovie(id)
            removeMovieLocal(id)
        } else {
            addMovie(id)
            addMovieLocal(id)
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
                        <div onClick={() => changeImage(data.id)}>
                            {
                                wishlist.includes(data.id)
                                ? <img src={coeurTrue} alt='coeur violet wishlist' />
                                : <img src={coeurFalse} alt='coeur violet wishlist' />
                            }                            
                        </div>
                        
                        <h1>{data.title}</h1>
                    </div>

                    <Identite label='Date de sortie : ' data={new Intl.DateTimeFormat('fr-FR').format(released)} />
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

            <FilmDetail
                data={data.synopsis}
            />

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