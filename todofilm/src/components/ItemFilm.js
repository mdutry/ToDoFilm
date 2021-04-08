import React, { useState, useContext } from 'react'
import './ItemFilm.css';
import coeurFalse from '../images/coeur_violet_clair.png'
import coeurTrue from '../images/coeur_violet.png'
import { Link } from 'react-router-dom'
import {WishlistContext} from '../context/WishlistContext'

function ItemFilm({id, poster, title}) {

    const [srcCoeur, setScrCoeur] = useState(false)
    const wishlistContext = useContext(WishlistContext)

    const changeImage = () => {
        
        setScrCoeur(!srcCoeur)
        
        if (wishlistContext.liste.indexOf(id) === -1) {
            wishlistContext.addMovie(id)
        } else {
            wishlistContext.removeMovie(id)
        }
    }

    return (
        <div className="bloc-item-film">
            <Link to={`/film/${id}`}>
                <img key={id} src={poster} alt={`Affiche ${title}`} />
            </Link>
                
            <div className="bloc-item-film-title">
                <div onClick={changeImage} >
                    {
                        (wishlistContext.liste.indexOf(id) !== -1) ? <img src={coeurTrue} alt='coeur violet wishlist' />
                        : <img src={coeurFalse} alt='coeur violet wishlist' />
                    }
                    
                </div>
                <Link to={`/film/${id}`}>
                    <p>{title}</p>
                </Link>
            </div>
        </div>
    )
}

export default ItemFilm