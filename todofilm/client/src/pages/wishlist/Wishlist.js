import React, { useState, useEffect, useContext } from 'react'
import ItemFilm from '../../components/Items/ItemFilm'
import './Wishlist.css';
import { WishlistContext } from '../../context/WishlistContext'
import axios from 'axios';

function Wishlist({ wishlistMovies }) {

    const [tri, setTri] = useState('')
    const [wishlist, setWishlist] = useState('')
    const wishlistContext = useContext(WishlistContext)

    const userId = localStorage.userId

    useEffect(() => {
        setWishlist(wishlistMovies)
    }, [])

    useEffect(() => {
        axios.get(`/api/user/${userId}`)
            .then (res => {
                wishlistContext.liste = res.data.user.wishlist
                console.log(wishlistContext.liste)
            })
    }, [wishlistContext])
    
    // const wishlistMovies = []
    // wishlistContext.liste.map(id => (
    //     wishlistMovies.push(movieList.find(item => item.id === id)
    // )))    

    const wishListMoviesSortieMoins = [].concat(wishlistMovies)
    wishListMoviesSortieMoins.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))

    const wishListMoviesSortiePlus = [].concat(wishlistMovies)
    wishListMoviesSortiePlus.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))

    const wishListMoviesDureePlus = [].concat(wishlistMovies)
    wishListMoviesDureePlus.sort((a, b) => a.runtime - b.runtime)

    const wishListMoviesDureeMoins = [].concat(wishlistMovies)
    wishListMoviesDureeMoins.sort((a, b) => b.runtime - a.runtime)

    return (
        <div className='bloc-wishlist'>
            <div className='bloc-wishlist-top'>
                <h1>Wishlist</h1>
                <label>Trier par : </label>
                <select value ={tri} onChange={(e) => setTri(e.target.value)}>
                    <option value =''>Ajout récent</option>
                    <option value ='sortiePlus'>Date de sortie la plus récente</option>
                    <option value ='sortieMoins'>Date de sortie la plus ancienne</option>
                    <option value ='dureePlus'>Durée (du + long au + court)</option>
                    <option value ='dureeMoins'>Durée (du + court au + long)</option>
                </select>
            </div>
            <div className='bloc-wishlist-movies'>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    {
                        tri === 'sortiePlus'
                        ? wishListMoviesSortiePlus.map(movie => (
                            <ItemFilm
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}
                            />
                        ))
                        : tri === 'sortieMoins'
                        ? wishListMoviesSortieMoins.map(movie => (
                            <ItemFilm
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}
                            />
                        ))
                        : tri === 'dureePlus'
                        ? wishListMoviesDureePlus.map(movie => (
                            <ItemFilm
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}
                            />
                        ))
                        : tri === 'dureeMoins'
                        ? wishListMoviesDureeMoins.map(movie => (
                            <ItemFilm
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}
                            />
                        ))
                        : wishlistMovies.map(movie => (
                            <ItemFilm
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Wishlist