import React, { useState, useEffect, useContext } from 'react'
import ItemFilm from '../../components/Items/ItemFilm'
import { movieList } from '../../datas/movieList';
import './Wishlist.css';
import { WishlistContext } from '../../context/WishlistContext'
import axios from 'axios';

function Wishlist({ wishlistMovies }) {

    const [tri, setTri] = useState('')
    const wishlistContext = useContext(WishlistContext)

    const userId = localStorage.userId

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
                {
                    tri === 'sortiePlus' ?
                        wishListMoviesSortiePlus.map(movie => (
                            <div style={{ width: '28%', marginBottom: '2em', marginLeft: '4%' }}>
                                <ItemFilm
                                    key={movie.id}
                                    id={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}
                                    numb={3}
                                />
                            </div>
                        )) :
                    tri === 'sortieMoins' ?
                        wishListMoviesSortieMoins.map(movie => (
                            <div style={{ width: '28%', marginBottom: '2em', marginLeft: '4%' }}>
                                <ItemFilm
                                    key={movie.id}
                                    id={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}
                                    numb={3}
                                />
                            </div>
                        )) :
                    tri === 'dureePlus' ?
                        wishListMoviesDureePlus.map(movie => (
                            <div style={{ width: '28%', marginBottom: '2em', marginLeft: '4%' }}>
                                <ItemFilm
                                    key={movie.id}
                                    id={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}
                                    numb={3}
                                />
                            </div>
                        )) :
                    tri === 'dureeMoins' ?
                        wishListMoviesDureeMoins.map(movie => (
                            <div style={{ width: '28%', marginBottom: '2em', marginLeft: '4%' }}>
                                <ItemFilm
                                    key={movie.id}
                                    id={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}
                                    numb={3}
                                />
                            </div>
                        )) :
                        wishlistMovies.map(movie => (
                            <div style={{ width: '28%', marginBottom: '2em', marginLeft: '4%' }}>
                                <ItemFilm
                                    key={movie.id}
                                    id={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}
                                    numb={3}
                                />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default Wishlist