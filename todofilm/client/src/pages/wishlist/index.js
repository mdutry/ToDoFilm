import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header'
import Wishlist from './Wishlist'
import { Redirect } from 'react-router'
import Loading from '../../components/Loading'
import { WishlistContext } from '../../context/WishlistContext'
import axios from 'axios';

function PageWishlist() {

    const [count, setCount] = useState(5);
    const [redirection, setRedirection] = useState(false);

    const [isLoadingMov, setIsLoadingMov] = useState(true)
    const [movies, setMovies] = useState([])

    const [isLoadingSer, setIsLoadingSer] = useState(true)
    const [series, setSeries] = useState([])

    const [isLoadingPer, setIsLoadingPer] = useState(true)
    const [persons, setPersons] = useState([])

    const isAuthenticated = localStorage.isAuthenticated
    const wishlistContext = useContext(WishlistContext)
    const userId = localStorage.userId

    
    useEffect(() => {
        setTimeout(() => setCount(count - 1), 1000);
        setTimeout(() => setRedirection(true), 5000);
    })

    const wishlistMovies = []
    const getMovieListRequest = async (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                wishlistMovies.push(res.data)
                setMovies(oldArray => [...oldArray, res.data])
                
                if (wishlistContext.movieListe.length === wishlistMovies.length) {
                    setIsLoadingMov(false)
                }
            })
    }

    const wishlistSeries = []
    const getSerieListRequest = async (id) => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                wishlistSeries.push(res.data)
                setSeries(oldArray => [...oldArray, res.data])
                
                if (wishlistContext.serieListe.length === wishlistSeries.length) {
                    setIsLoadingSer(false)
                }
            })
    }

    const wishlistPersons = []
    const getPersonListRequest = async (id) => {
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                wishlistPersons.push(res.data)
                setPersons(oldArray => [...oldArray, res.data])
                
                if (wishlistContext.personListe.length === wishlistPersons.length) {
                    setIsLoadingPer(false)
                }
            })
    }

    useEffect(() => {
        axios.get(`/api/user/${userId}`)
            .then (res => {
                wishlistContext.movieListe = res.data.user.wishlistMovie
                wishlistContext.serieListe = res.data.user.wishlistSerie
                wishlistContext.personListe = res.data.user.wishlistPerson

                wishlistContext.movieListe.map(id =>
                    getMovieListRequest(id)
                )
                wishlistContext.serieListe.map(id =>
                    getSerieListRequest(id)
                )
                wishlistContext.personListe.map(id =>
                    getPersonListRequest(id)
                )
            })
    }, [])

    return (
        <div className="bloc-central">
            <Header />


            <div className="bloc-central-contenu background-yellow">
                {
                    isAuthenticated
                    ? (
                        isLoadingMov && isLoadingSer && isLoadingPer
                        ? <Loading />
                        : <Wishlist wishlistMovies={movies} wishlistSeries={series} wishlistPersons={persons} />
                    )
                    :
                    <div className='bloc-authenticated-false'>
                        {
                            redirection && <Redirect to='/connexion' />
                        }
                        <h1>Vous n'êtes pas connecté !</h1>
                        <p>Pour accéder à ce contenu, vous devez être connecté. Dans <span>{count}</span> secondes, vous serez redirigé vers la page d'accueil pour pouvoir vous connecter.</p>
                    </div>
                    
                }
            </div>
        </div>
    )
}

export default PageWishlist