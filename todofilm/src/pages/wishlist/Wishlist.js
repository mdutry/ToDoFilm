import React, { useContext, useState, useEffect } from 'react'
import {WishlistContext} from '../../context/WishlistContext'
import ItemFilm from '../../components/ItemFilm'
import { movieList } from '../../datas/movieList';
import './Wishlist.css';

function Wishlist() {

    const wishlistContext = useContext(WishlistContext)
    const [tri, setTri] = useState('')

    const wishlistMovies = []
    wishlistContext.liste.map(id => (
        wishlistMovies.push(movieList.find(item => item.id === id)
    )))

    const wishListMoviesSortiePlus = wishlistMovies.sort((a, b) => new Date(a.released) - new Date(b.released))
    const wishListMoviesSortieMoins = wishlistMovies.sort((a, b) => new Date(b.released) - new Date(a.released))
    const wishListMoviesDureePlus = wishlistMovies.sort((a, b) => a.runtime - b.runtime)
    const wishListMoviesDureeMoins = wishlistMovies.sort((a, b) => b.runtime - a.runtime)
    console.log('Film du + long au plus + court', wishListMoviesDureePlus)
    console.log('Film du + court au plus + long', wishListMoviesDureeMoins)

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

                    // wishlistMovies.map(movie => (
                    //     <ItemFilm
                    //         key={movie.id}
                    //         id={movie.id}
                    //         poster={movie.poster}
                    //         title={movie.title}
                    //         numb={3}
                    //     />
                    // ))
                }
            </div>
            

            
        </div>
    )
}

export default Wishlist