import React, { useState, useEffect } from 'react'
import Identite from '../../components/Identite'
import FilmNotes from '../../components/FilmNotes'
import FilmAvis from '../../components/FilmAvis'
import FilmCritique from '../../components/FilmCritique'
import FilmDetail from '../../components/FilmDetail'
import './FicheFilm.css'
import ModalTeaser from '../../components/Modal/Teaser'
import axios from 'axios';
import defaultMovie from '../../images/default-placeholder.png'

function FicheFilm({ data, movieCredits, movieVideo }) {

    const [openModal, setOpenModal] = useState(false)
    const released = new Date(data.release_date)

    const [srcCoeur, setScrCoeur] = useState(false)
    const [wishlist, setWishlist] = useState([])

    const actorsArray = []
    movieCredits.cast.map(actor => (
        actorsArray.push({name: actor.original_name, id: actor.id})
    ))

    const directorsArray = []
    movieCredits.crew.map(director => (
        director.job === 'Director' && directorsArray.push({name: director.original_name, id: director.id})
    ))

    const userId = localStorage.userId
    useEffect(() => {
        axios.get(`/api/user/${userId}`)
            .then (res => {
                setWishlist(res.data.user.wishlist)
            })
    }, [])

    const addMovie = (id) => {
        axios.patch( `/api/user/${userId}/wishlist`, { movieId: id })
            .then(function (reponse) {
                console.log(reponse);
            })
            .catch(function (erreur) {
                console.log(erreur);
            })
    }

    const removeMovie = (id) => {
        axios.delete( `/api/user/${userId}/wishlist/${id}`)
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
                    {
                        data.poster_path
                        ? <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
                        : <img src={defaultMovie} alt="image de film par défaut" />
                    }
                </div>

                <div className='bloc-film-details'>
                    <div className='bloc-film-titre'>
                        <div onClick={() => changeImage(data.id)}>
                            {
                                wishlist.includes(data.id)
                                ? <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#660099"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                : <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#660099"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            }
                            
                        </div>
                        
                        <h1>{data.title}</h1>
                    </div>

                    <Identite label='Date de sortie : ' data={new Intl.DateTimeFormat('fr-FR').format(released)} />
                    <Identite label='Durée : ' data={`${data.runtime} mn`} />
                    <Identite label='Genre : ' data={data.genres.map(genre => genre.name)} />
                    <Identite label='Budget : ' data={`${new Intl.NumberFormat('de-DE').format(data.budget)} $`} />
                    <Identite label='De ' dataId data={directorsArray} />
                    <Identite label='Avec ' dataId data={actorsArray.filter((el, index) => index < 5)} />
                    <Identite label='Pays : ' data={data.production_countries.map(country => country.name)} />
                    <Identite label='Notes :' id='notes' />

                    <div className='notes-detail-film'>
                        <FilmNotes
                            titre='SPECTATEURS'
                            value={data.vote_average}
                            small={`${data.vote_average}/10`}
                        />
                    </div>
                    
                    <Identite label='Récompense : ' data={data.awards} />
                    {
                        (movieVideo.length < 1)
                        ? <button disabled className='disabledButton'>Bande-annonce</button>
                        : <button className='ButtonBA' onClick={showModal} >Bande-annonce</button>
                    }
                </div>
            </div>

            <FilmDetail
                data={data.overview}
            />
            
            {(movieVideo.length >= 1) && <ModalTeaser showModal={openModal} teaser={movieVideo[0].key} hideModal={hideModal} />}

        </div>
    );
}

export default FicheFilm