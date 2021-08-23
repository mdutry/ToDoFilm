import React, { useState, useEffect } from 'react'
import Identite from '../../components/Identite'
import PersonDetail from '../../components/FilmDetail/PersonDetail'
import './FichePerson.css'
import axios from 'axios';
import Slider from '../../components/Slider'
import ItemFilm from '../../components/Items/ItemFilm';
import ItemSerie from '../../components/Items/ItemSerie';
import defaultAvatar from '../../images/default-avatar.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

function FicheSerie({ data, combinedCredits }) {

    const [srcCoeur, setScrCoeur] = useState(false)
    const [wishlist, setWishlist] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const birthDate = new Date(data.birthday)
    const deathDate = new Date(data.deathday)

    const moviesArray = []
    // si combinedCredits = [ cast: {...}, crew: {...}]
    combinedCredits.cast && combinedCredits.cast.map(cast => (
        moviesArray.push(cast)
    ))
    // si combinedCredits = [ cast: {...}, crew: {...}]
    combinedCredits.crew && combinedCredits.crew.map(crew => (
        moviesArray.push(crew)
    ))
    // une fois les films de cast et crew fusionnés, tri par popularité
    moviesArray.sort((a, b) => b.popularity - a.popularity)
    //On enlève les doublons présent dans le tableau pour ressortir un nouveau tableau
    const uniqueMoviesArray = moviesArray.filter((movie, index, self) =>
        index === self.findIndex((t) => (
            t.id === movie.id && t.id === movie.id
        ))
    )
    
    const userId = localStorage.userId
    useEffect(() => {
        axios.get(`/api/user/${userId}`)
            .then (res => {
                setWishlist(res.data.user.wishlistPerson)
                setIsLoading(false)
            })
    }, [])

    const addMovie = (id) => {
        axios.patch( `/api/user/${userId}/wishlist`, { personId: id })
            .then(function (reponse) {
                console.log(reponse);
            })
            .catch(function (erreur) {
                console.log(erreur);
            })
    }

    const removeMovie = (id) => {
        axios.delete( `/api/user/${userId}/wishlistPerson/${id}`)
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

    return (
        <div className='bloc-film'>

            <div className='bloc-film-haut'>

                <div className='bloc-film-poster'>
                    {
                        data.profile_path
                        ? <img src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt={data.name} />
                        : <img src={defaultAvatar} alt="image de profil par défaut" />
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
                        
                        <h1>{data.name}</h1>
                    </div>
                    
                    <Identite label='Date de naissance : ' data={new Intl.DateTimeFormat('fr-FR').format(birthDate)} />
                    <Identite label='Lieu de naissance : ' data={data.place_of_birth} />
                    {
                        data.deathday && <Identite label='Date de décès : ' data={new Intl.DateTimeFormat('fr-FR').format(deathDate)} />
                    }
                    <Identite label='Sexe : ' data={data.gender === 1
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M21 9c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.632 3.501 8.443 8 8.941v2.059h-3v2h3v2h2v-2h3v-2h-3v-2.059c4.499-.498 8-4.309 8-8.941zm-16 0c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"/>
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M16 2v2h3.586l-3.972 3.972c-1.54-1.231-3.489-1.972-5.614-1.972-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.125-.741-4.074-1.972-5.614l3.972-3.972v3.586h2v-7h-7zm-6 20c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
                        </svg>
                    } />
                    <Identite label='Célèbre pour ' data={data.known_for_department} />
                </div>
            </div>

            <PersonDetail
                data={data.biography}
            />

            <h2>Films notables</h2>
            <div className="bloc-erreur-text">
                <Swiper
                    effect='slide'
                    autoplay
                    delay={500}
                    slidesPerView={4}
                    spaceBetween={2}
                    slidesPerGroup={2}
                    loop={true}
                    loopFillGroupWithBlank={false}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="mySwiper"
                >
                    {
                        uniqueMoviesArray.map(movie =>
                            movie.media_type === 'movie'
                            ? <SwiperSlide key={`0-${movie.id}`}>
                                <ItemFilm id={movie.id} poster={movie.poster_path} title={movie.title} />
                            </SwiperSlide>
                            : movie.media_type ==='tv'
                            && <SwiperSlide key={`1-${movie.id}`}>
                                <ItemSerie id={movie.id} poster={movie.poster_path} title={movie.name} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default FicheSerie