import React, { useState, useEffect, useContext } from 'react'
import ItemFilm from '../../components/ItemFilm'
import { movieList } from '../../datas/movieList';
import './Wishlist.css';
import { WishlistContext } from '../../context/WishlistContext'
import axios from 'axios';

function Wishlist() {

    const [tri, setTri] = useState('')
    const wishlistContext = useContext(WishlistContext)

    const userId = localStorage.userId

    useEffect(() => {
        axios.get(`/api/user/${userId}`)
            .then (res => {
                wishlistContext.liste = res.data.user.wishlist
            })
    }, [wishlistContext])
    
    const wishlistMovies = []
    wishlistContext.liste.map(id => (
        wishlistMovies.push(movieList.find(item => item.id === id)
    )))
    

    const wishListMoviesSortieMoins = [].concat(wishlistMovies)
    wishListMoviesSortieMoins.sort((a, b) => new Date(a.released) - new Date(b.released))

    const wishListMoviesSortiePlus = [].concat(wishlistMovies)
    wishListMoviesSortiePlus.sort((a, b) => new Date(b.released) - new Date(a.released))

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
                {
                    tri === 'sortiePlus' ?
                        wishListMoviesSortiePlus.map(movie => (
                            <ItemFilm
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster}
                                title={movie.title}
                                numb={3}
                            />
                        )) :
                    tri === 'sortieMoins' ?
                        wishListMoviesSortieMoins.map(movie => (
                            <ItemFilm
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster}
                                title={movie.title}
                                numb={3}
                            />
                        )) :
                    tri === 'dureePlus' ?
                        wishListMoviesDureePlus.map(movie => (
                            <ItemFilm
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster}
                                title={movie.title}
                                numb={3}
                            />
                        )) :
                    tri === 'dureeMoins' ?
                        wishListMoviesDureeMoins.map(movie => (
                            <ItemFilm
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster}
                                title={movie.title}
                                numb={3}
                            />
                        )) :
                        wishlistMovies.map(movie => (
                            <ItemFilm
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster}
                                title={movie.title}
                                numb={3}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default Wishlist