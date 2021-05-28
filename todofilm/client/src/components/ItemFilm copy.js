import React, { useState, useContext, useEffect } from 'react'
import './ItemFilm.css';
import coeurFalse from '../images/coeur_violet_clair.png'
import coeurTrue from '../images/coeur_violet.png'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../context/WishlistContext'
import axios from 'axios';

function ItemFilm({id, poster, title, numb}) {

    const [srcCoeur, setScrCoeur] = useState(false)
    const [wishlist, setWishlist] = useState([])
    const wishlistContext = useContext(WishlistContext)

    const userId = localStorage.userId

    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/${userId}`)
            .then (res => {
                setWishlist(res.data.user.wishlist)
                wishlistContext.liste = wishlist
            })
    }, [])

    const addMovie = (id) => {
        axios.patch( `http://localhost:5000/api/user/${userId}/wishlist`, { movieId: id })
            .then(function (reponse) {
                console.log(reponse);
            })
            .catch(function (erreur) {
                console.log(erreur);
            })
    }

    const removeMovie = (id) => {
        axios.delete( `http://localhost:5000/api/user/${userId}/wishlist/${id}`)
            .then(function (reponse) {
                console.log(reponse);
            })
            .catch(function (erreur) {
                console.log(erreur);
            })
    }

    const addMovieLocal = (target) => {
        const array = wishlist
        array.push(target)
        setWishlist(array)
    }

    const removeMovieLocal = (target) => {
        const array = wishlist
        const index = array.indexOf(target)
        array.splice(index, 1)
        setWishlist(array)
    }

    const changeImage = (id) => {
        setScrCoeur(!srcCoeur)
        
        if (wishlist.includes(id)) {
            removeMovie(id)
            removeMovieLocal(id)
            wishlistContext.removeMovie(id)
            console.log('item film - film enlevé !', wishlistContext.liste)
        } else {
            addMovie(id)
            addMovieLocal(id)
            wishlistContext.addMovie(id)
            console.log('item film - film ajouté !')
        }
    }

    return (
        <div className={`bloc-item-film-${numb}`}>
            <Link to={`/film/${id}`}>
                <img key={id} src={poster} alt={`Affiche ${title}`} />
            </Link>
                
            <div className="bloc-item-film-title">
                <div onClick={() => changeImage(id)} >
                    {
                        wishlist.includes(id) ? <img src={coeurTrue} alt='coeur violet wishlist' />
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