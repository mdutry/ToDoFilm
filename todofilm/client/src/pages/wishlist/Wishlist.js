import React, { useEffect, useContext } from 'react'
import './Wishlist.css';
import { WishlistContext } from '../../context/WishlistContext'
import axios from 'axios';
import WishlistTheme from './WishlistTheme';

function Wishlist({ wishlistMovies, wishlistSeries, wishlistPersons }) {

    const wishlistContext = useContext(WishlistContext)
    const userId = localStorage.userId

    useEffect(() => {
        axios.get(`/api/user/${userId}`)
            .then (res => {
                wishlistContext.movieListe = res.data.user.wishlistMovie
                console.log(wishlistContext.movieListe)
            })
    }, [wishlistContext])

    return (
        <div className='bloc-wishlist'>
            <WishlistTheme wishlistMovies={wishlistMovies} />
            <WishlistTheme wishlistSeries={wishlistSeries}/>
            <WishlistTheme wishlistPersons={wishlistPersons} />
        </div>
    )
}

export default Wishlist