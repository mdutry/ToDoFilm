import React from 'react'
import Header from '../../components/Header'
import Wishlist from './Wishlist'

function PageWishlist() {

    return (
        <div className="bloc-central">
            <Header />
            <div className="bloc-central-contenu background-yellow">
                <Wishlist />
            </div>
        </div>
    )
}

export default PageWishlist