import React, { useContext } from 'react'
import Header from '../../components/Header'
import { movieList } from '../../datas/movieList'
import Wishlist from './Wishlist'
import {WishlistContext} from '../../context/WishlistContext'

function PageWishlist() {

    const wishlistContext = useContext(WishlistContext)

    const movie = movieList.find(item => item.id === wishlistContext.id)
    console.log('movie', movie)

    return (
        <div className="bloc-central">
            <Header />
            <div className="bloc-central-contenu background-yellow">
                <Wishlist data={movie} />
            </div>
        </div>
    )
}

export default PageWishlist
