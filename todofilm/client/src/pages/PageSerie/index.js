import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import FicheSerie from './FicheSerie'
import { Redirect } from 'react-router'
import axios from 'axios'
import Loading from '../../components/Loading'

const PageSerie = (props) => {

    // state pour la redirection
    const [count, setCount] = useState(5);
    const [redirection, setRedirection] = useState(false);
    const isAuthenticated = localStorage.isAuthenticated

    // state pour le loading
    const [loadingSerie, setLoadingSerie] = useState(true)
    const [loadingSerieCredits, setLoadingSerieCredits] = useState(true)
    const [loadingSerieVideo, setLoadingSerieVideo] = useState(true)

    // state pour la data du film
    const [serie, setSerie] = useState([])
    const [serieCredits, setSerieCredits] = useState([])
    const [serieVideo, setSerieVideo] = useState([])
    
    useEffect(() => {
        setTimeout(() => setCount(count - 1), 1000);
        setTimeout(() => setRedirection(true), 5000);
    })

    const { id } = props.match.params
    useEffect (() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setSerie(res.data)
                setLoadingSerie(false)
            })
        axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setSerieCredits(res.data)
                setLoadingSerieCredits(false)
            })
        axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setSerieVideo(res.data.results)
                setLoadingSerieVideo(false)
            })
    }, [])

    return (
        <div className="bloc-central">
            <Header />
            <div className="bloc-central-contenu background-yellow">
                {
                    isAuthenticated ? (
                        (!loadingSerie && !loadingSerieCredits && !loadingSerieVideo) ?
                        <FicheSerie data={serie} serieCredits={serieCredits} serieVideo={serieVideo} />
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

export default PageSerie;