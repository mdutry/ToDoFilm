import React, { useState } from 'react'
import ItemFilm from '../../components/Items/ItemFilm'
import ItemPerson from '../../components/Items/ItemPerson';
import ItemSerie from '../../components/Items/ItemSerie';
import './Wishlist.css';

function WishlistTheme({ wishlistMovies, wishlistSeries, wishlistPersons }) {

    const [tri, setTri] = useState('')

    const arrayDateAncienne = wishlistMovies
    ? [].concat(wishlistMovies).sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
    : wishlistSeries
    ? [].concat(wishlistSeries).sort((a, b) => new Date(a.first_air_date) - new Date(b.first_air_date))
    : wishlistPersons
    && [].concat(wishlistPersons).sort((a, b) => new Date(a.birthday) - new Date(b.birthday))

    const arrayDateRecente = wishlistMovies
    ? [].concat(wishlistMovies).sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
    : wishlistSeries
    ? [].concat(wishlistSeries).sort((a, b) => new Date(b.first_air_date) - new Date(a.first_air_date))
    : wishlistPersons
    && [].concat(wishlistPersons).sort((a, b) => new Date(b.birthday) - new Date(a.birthday))

    const wishListMoviesDureePlus = wishlistMovies
    ? [].concat(wishlistMovies).sort((a, b) => b.runtime - a.runtime)
    : wishlistSeries
    && [].concat(wishlistSeries).sort((a, b) => b.episode_run_time - a.episode_run_time)
    
    const wishListMoviesDureeMoins = wishlistMovies
    ? [].concat(wishlistMovies).sort((a, b) => a.runtime - b.runtime)
    : wishlistSeries
    && [].concat(wishlistSeries).sort((a, b) => a.episode_run_time - b.episode_run_time)

    const popularityMoins = wishlistPersons && [].concat(wishlistPersons).sort((a, b) => a.popularity - b.popularity)
    
    const popularityPlus = wishlistPersons && [].concat(wishlistPersons).sort((a, b) => b.popularity - a.popularity)
    
    return (
        <>
            {
                wishlistMovies
                && <>
                    <div className='bloc-wishlist-top'>
                        <h1>Wishlist FILMS</h1>
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
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                            {
                                tri === 'sortiePlus'
                                ? arrayDateRecente.map(movie => (
                                    <ItemFilm
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.title}
                                    />
                                ))
                                : tri === 'sortieMoins'
                                ? arrayDateAncienne.map(movie => (
                                    <ItemFilm
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.title}
                                    />
                                ))
                                : tri === 'dureePlus'
                                ? wishListMoviesDureePlus.map(movie => (
                                    <ItemFilm
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.title}
                                    />
                                ))
                                : tri === 'dureeMoins'
                                ? wishListMoviesDureeMoins.map(movie => (
                                    <ItemFilm
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.title}
                                    />
                                ))
                                : wishlistMovies.map(movie => (
                                    <ItemFilm
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.title}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </>
            }

            {
                wishlistSeries
                && <>
                    <div className='bloc-wishlist-top'>
                        <h1>Wishlist SÉRIES</h1>
                        <label>Trier par : </label>
                        <select value ={tri} onChange={(e) => setTri(e.target.value)}>
                            <option value =''>Ajout récent</option>
                            <option value ='sortiePlus'>Date de sortie la plus récente</option>
                            <option value ='sortieMoins'>Date de sortie la plus ancienne</option>
                            <option value ='dureePlus'>Durée d'épisode (du + long au + court)</option>
                            <option value ='dureeMoins'>Durée d'épisode (du + court au + long)</option>
                        </select>
                    </div>
                    <div className='bloc-wishlist-movies'>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                            {
                                tri === 'sortiePlus'
                                ? arrayDateRecente.map(movie => (
                                    <ItemSerie
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.original_name}
                                    />
                                ))
                                : tri === 'sortieMoins'
                                ? arrayDateAncienne.map(movie => (
                                    <ItemSerie
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.original_name}
                                    />
                                ))
                                : tri === 'dureePlus'
                                ? wishListMoviesDureePlus.map(movie => (
                                    <ItemSerie
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.original_name}
                                    />
                                ))
                                : tri === 'dureeMoins'
                                ? wishListMoviesDureeMoins.map(movie => (
                                    <ItemSerie
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.original_name}
                                    />
                                ))
                                : wishlistSeries.map(movie => (
                                    <ItemSerie
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.original_name}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </>
            }

            {
                wishlistPersons
                && <>
                    <div className='bloc-wishlist-top'>
                        <h1>Wishlist CÉLÉBRITÉS</h1>
                        <label>Trier par : </label>
                        <select value ={tri} onChange={(e) => setTri(e.target.value)}>
                            <option value =''>Ajout récent</option>
                            <option value ='sortiePlus'>Plus jeune</option>
                            <option value ='sortieMoins'>Plus âgé</option>
                            <option value ='dureePlus'>Plus populaire</option>
                            <option value ='dureeMoins'>Moins populaire</option>
                        </select>
                    </div>
                    <div className='bloc-wishlist-movies'>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                            {
                                tri === 'sortiePlus'
                                ? arrayDateRecente.map(movie => (
                                    <ItemPerson
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.profile_path}
                                        name={movie.name}
                                    />
                                ))
                                : tri === 'sortieMoins'
                                ? arrayDateAncienne.map(movie => (
                                    <ItemPerson
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.profile_path}
                                        name={movie.name}
                                    />
                                ))
                                : tri === 'dureePlus'
                                ? popularityPlus.map(movie => (
                                    <ItemPerson
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.profile_path}
                                        name={movie.name}
                                    />
                                ))
                                : tri === 'dureeMoins'
                                ? popularityMoins.map(movie => (
                                    <ItemPerson
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.profile_path}
                                        name={movie.name}
                                    />
                                ))
                                : wishlistPersons.map(movie => (
                                    <ItemPerson
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.profile_path}
                                        name={movie.name}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default WishlistTheme