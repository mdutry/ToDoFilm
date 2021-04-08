import React, { useContext } from 'react'
import {WishlistContext} from '../../context/WishlistContext'
import ItemFilm from '../../components/ItemFilm'
import { movieList } from '../../datas/movieList';

function Wishlist() {

    const wishlistContext = useContext(WishlistContext)

    console.log(wishlistContext.liste)

    const wishlistMovies = []
    wishlistContext.liste.map(id => (
        wishlistMovies.push(movieList.find(item => item.id === id)
    )))

    return (
        <div>
            <p>La liste : {wishlistContext.liste}</p>

            {
                wishlistMovies.map(movie => (
                    <ItemFilm
                        key={movie.id}
                        id={movie.id}
                        poster={movie.poster}
                        title={movie.title}
                    />
                ))
            }
        </div>
    )
}

export default Wishlist