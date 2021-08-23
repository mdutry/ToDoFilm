import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import FicheFilm from './FicheFilm'
import { Redirect } from 'react-router'
import axios from 'axios'
import Loading from '../../components/Loading'

const PageFilm = (props) => {

    // state pour la redirection
    const [count, setCount] = useState(5);
    const [redirection, setRedirection] = useState(false);
    const isAuthenticated = localStorage.isAuthenticated

    // state pour le loading
    const [loadingMovie, setLoadingMovie] = useState(true)
    const [loadingMovieCredits, setLoadingMovieCredits] = useState(true)
    const [loadingMovieVideo, setLoadingMovieVideo] = useState(true)

    // state pour la data du film
    const [movie, setMovie] = useState([])
    const [movieCredits, setMovieCredits] = useState([])
    const [movieVideo, setMovieVideo] = useState([])
    
    useEffect(() => {
        setTimeout(() => setCount(count - 1), 1000);
        setTimeout(() => setRedirection(true), 5000);
    })

    const { id } = props.match.params
    useEffect (() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setMovie(res.data)
                setLoadingMovie(false)
            })
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setMovieCredits(res.data)
                setLoadingMovieCredits(false)
            })
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setMovieVideo(res.data.results)
                setLoadingMovieVideo(false)
            })
    }, [])

    return (
        <div className="bloc-central">
            <Header />
            <div className="bloc-central-contenu background-yellow">
                {
                    isAuthenticated ? (
                        (!loadingMovie && !loadingMovieVideo && !loadingMovieCredits) ?
                        <FicheFilm data={movie} movieCredits={movieCredits} movieVideo={movieVideo} />
                        :
                        <Loading />
                    ) : (
                        <div className='bloc-authenticated-false'>
                            {
                                redirection && <Redirect to='/connexion' />
                            }
                            <h1>Vous n'êtes pas connecté !</h1>
                            <p>Pour accéder à ce contenu, vous devez être connecté. Dans <span>{count}</span> secondes, vous serez redirigé vers la page d'accueil pour pouvoir vous connecter.</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PageFilm;