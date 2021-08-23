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
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])

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
                
                if (wishlistContext.liste.length === wishlistMovies.length) {
                    setIsLoading(false)
                }
            })
    }

    useEffect(() => {
        axios.get(`/api/user/${userId}`)
            .then (res => {
                wishlistContext.liste = res.data.user.wishlist

                wishlistContext.liste.map(id =>
                    getMovieListRequest(id)
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
                        isLoading
                        ? <Loading />
                        : <Wishlist wishlistMovies={movies} />
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