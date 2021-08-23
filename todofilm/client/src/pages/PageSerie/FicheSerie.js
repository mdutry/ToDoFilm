import React, { useState, useEffect } from 'react'
import Identite from '../../components/Identite'
import FilmNotes from '../../components/FilmNotes'
import FilmDetail from '../../components/FilmDetail'
import './FicheSerie.css'
import ModalTeaser from '../../components/Modal/Teaser'
import axios from 'axios';
import defaultMovie from '../../images/default-placeholder.png'

function FicheSerie({ data, serieCredits, serieVideo }) {

    const [openModal, setOpenModal] = useState(false)
    const [srcCoeur, setScrCoeur] = useState(false)
    const [wishlist, setWishlist] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const firstDate = new Date(data.first_air_date)
    const lastDate = new Date(data.last_air_date)

    const actorsArray = []
    serieCredits.cast.map(actor => (
        actorsArray.push({name: actor.original_name, id: actor.id})
    ))
    
    const creatorsArray = []
    data.created_by.map(creator => (
        creatorsArray.push({name: creator.name, id: creator.id})
    ))
    
    const genreArray = []
    data.genres.map(genre => (
        genreArray.push(genre.name)
    ))
    
    const countryArray = []
    data.production_countries.map(country => (
        countryArray.push(country.name)
    ))

    const userId = localStorage.userId
    useEffect(() => {
        axios.get(`/api/user/${userId}`)
            .then (res => {
                setWishlist(res.data.user.wishlistSerie)
                setIsLoading(false)
            })
    }, [])

    const addMovie = (id) => {
        axios.patch( `/api/user/${userId}/wishlist`, { serieId: id })
            .then(function (reponse) {
                console.log(reponse);
            })
            .catch(function (erreur) {
                console.log(erreur);
            })
    }

    const removeMovie = (id) => {
        axios.delete( `/api/user/${userId}/wishlistSerie/${id}`)
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
                                !isLoading
                                ? (
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
                                )
                                : <svg xmlns="http://www.w3.org/2000/svg" className='svg-loader' viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                    <g transform="rotate(0 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#660099">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(30 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#660099">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(60 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#660099">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(90 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#660099">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(120 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#660099">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(150 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#660099">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(180 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#660099">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(210 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#660099">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(240 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#660099">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(270 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#660099">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(300 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#660099">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(330 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#660099">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g>
                                </svg>
                            }
                        </div>
                        
                        <h1>{data.original_name}</h1>
                    </div>
                    
                    <Identite label='Date du premier épisode : ' data={new Intl.DateTimeFormat('fr-FR').format(firstDate)} />
                    {
                        !data.in_production && <Identite label='Date du dernier épisode : ' data={new Intl.DateTimeFormat('fr-FR').format(lastDate)} />
                    }
                    <Identite label="Durée d'un épisode : " data={`${data.episode_run_time.toString()} mn`} />
                    <Identite label='Genre : ' data={genreArray.length <= 1 ? genreArray.toString() : genreArray} />
                    <Identite label='De ' dataId data={creatorsArray} />
                    <Identite label='Avec ' dataId data={actorsArray.filter((el, index) => index < 5)} />
                    <Identite label='Pays : ' data={countryArray.length <= 1 ? countryArray.toString() : countryArray} />

                    <Identite label='Notes :' id='notes' />
                    <div className='notes-detail-film'>
                        <FilmNotes
                            titre='SPECTATEURS'
                            value={data.vote_average}
                            small={`${data.vote_average}/10`}
                        />
                    </div>

                    {
                        (serieVideo.length < 1)
                        ? <button disabled className='disabledButton'>Bande-annonce</button>
                        : <button className='ButtonBA' onClick={showModal} >Bande-annonce</button>
                    }
                </div>
            </div>

            <FilmDetail
                data={data.overview}
            />

            <h2>Saisons</h2>
            <div className='details-season'>
                {
                    data.seasons.map(season =>
                        <div className='season-item'>
                            <div className='season-image'>
                                {
                                    season.poster_path
                                    ? <img src={`https://image.tmdb.org/t/p/w500${season.poster_path}`} alt={data.title} style={{ width: '100%' }} />
                                    : <img src={defaultMovie} alt="image de film par défaut" style={{ width: '100%' }} />
                                }
                            </div>
                            <div className='season-text'>
                                <h3>{season.name}<span>{season.episode_count} épisodes</span></h3>
                                <p>La saison {season.season_number} de {data.original_name} a été diffusée à partir du {new Intl.DateTimeFormat('fr-FR').format(new Date(season.air_date))}.</p>
                                <p>{season.overview}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            
            {(serieVideo.length >= 1) && <ModalTeaser showModal={openModal} teaser={serieVideo[0].key} hideModal={hideModal} />}

        </div>
    );
}

export default FicheSerie