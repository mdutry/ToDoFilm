import React, { useContext } from 'react'
import {WishlistContext} from '../../context/WishlistContext'
import ItemFilm from '../../components/ItemFilm'
import { movieList } from '../../datas/movieList';
import './Wishlist.css';

function Wishlist() {

    const wishlistContext = useContext(WishlistContext)

    const wishlistMovies = []
    wishlistContext.liste.map(id => (
        wishlistMovies.push(movieList.find(item => item.id === id)
    )))

    return (
        <div className='bloc-wishlist'>
            <div className='bloc-wishlist-top'>
                <h1>Wishlist</h1>
                <label>Trier par : </label>
                <select>
                    <option>Ajout récent</option>
                </select>
            </div>
            <div className='bloc-wishlist-movies'>
                {
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