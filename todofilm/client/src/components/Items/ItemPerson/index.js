import React, { useState, useContext, useEffect } from 'react'
import '../styles.css';
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../../context/WishlistContext'
import axios from 'axios';
import Loading from '../../Loading';
import defaultAvatar from '../../../images/default-avatar.jpg'

function ItemPerson({ id, poster, name }) {

    const wishlistContext = useContext(WishlistContext)
    const [srcCoeur, setScrCoeur] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [wishlist, setWishlist] = useState([])

    const userId = localStorage.userId

    useEffect(() => {
        axios.get(`/api/user/${userId}`)
            .then (res => {
                setWishlist(res.data.user.wishlistPerson)
                setIsLoading(false)
            })
    }, [])

    const addMovie = (id) => {
        axios.patch( `/api/user/${userId}/wishlist`, { personId: id })
            .then(function (reponse) {
                console.log(reponse);
                wishlistContext.addPerson(id)
            })
            .catch(function (erreur) {
                console.log(erreur);
            })
    }

    const removeMovie = (id) => {
        axios.delete( `/api/user/${userId}/wishlistPerson/${id}`)
            .then(function (reponse) {
                console.log(id, reponse);
                wishlistContext.removePerson(id)
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
        } else {
            addMovie(id)
            addMovieLocal(id)
        }
    }

    return (
        <>
            {
                isLoading
                ? <Loading />
                : <div className={`bloc-item-film`}>
                    <Link className='link-poster' to={`/person/${id}`}>
                        {
                            poster
                            ? <img key={id} className='bloc-item-poster' src={`https://image.tmdb.org/t/p/w500${poster}`} alt={`Affiche ${name}`} />
                            : <img key={id} className='bloc-item-poster' src={defaultAvatar} alt="image de profil par défaut" />
                        }
                    </Link>
                        
                    <div className="bloc-item-film-title">
                        <div className='bloc-heart' onClick={() => changeImage(id)} >
                            {
                                wishlist.includes(id)
                                ? <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#660099"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                : <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#660099"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            }
                        </div>
                        <Link className='link-title' to={`/person/${id}`}>
                            <p className='title-item-film'>{name}</p>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemPerson