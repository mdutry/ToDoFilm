import React, { useContext, useEffect, useState } from 'react'
import ItemFilm from '../../components/Items/ItemFilm'
import { DatasInputContext } from '../../context/DatasInputContext';
import logo from '../../images/logo_ToDoFilm.png'
import './styles.css';
import axios from 'axios';
import ItemSerie from '../../components/Items/ItemSerie';
import ItemPerson from '../../components/Items/ItemPerson';
import Loading from '../../components/Loading';

function AffichageFilm() {

    // state pour le loading
    const [loadingMovie, setLoadingMovie] = useState(false)
    const [loadingSerie, setLoadingSerie] = useState(false)
    const [loadingPerson, setLoadingPerson] = useState(false)

    // state pour la data du film
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])
    const [persons, setPersons] = useState([])

    const datasInputContext = useContext(DatasInputContext)
    const {remoteSearchMovie, filtreMovie, filtreSerie, filtrePerson} = datasInputContext

    useEffect(() => {
        remoteSearchMovie()
    }, [])

    useEffect(() => {
        if (filtreMovie !== '') {
            setLoadingMovie(true)
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR&query=${filtreMovie}`)
                .then (res => {
                    setMovies(res.data.results)
                    setLoadingMovie(false)
                })
        } else if (filtreMovie === '') {
            setMovies([])
        }
        
        if (filtreSerie !== '') {
            setLoadingSerie(true)
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR&query=${filtreSerie}`)
                .then (res => {
                    setSeries(res.data.results)
                    setLoadingSerie(false)
                })
        } else if (filtreSerie === '') {
            setSeries([])
        }
        
        if (filtrePerson !== '') {
            setLoadingPerson(true)
            axios.get(`https://api.themoviedb.org/3/search/person?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR&query=${filtrePerson}`)
                .then (res => {
                    setPersons(res.data.results)
                    setLoadingPerson(false)
                })
        } else if (filtrePerson === '') {
            setPersons([])
        }
    }, [datasInputContext])

    return (
        <div className='bloc-affichage-film'>
            <div className='bloc-affichage-film-search'>
                {
                    filtreMovie !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtreMovie} <span onClick={() => remoteSearchMovie('movie')}>❌</span></p>
                        </div>
                }
                {
                    filtreSerie !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtreSerie} <span onClick={() => remoteSearchMovie('serie')}>❌</span></p>
                        </div>
                }
                {
                    filtrePerson !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtrePerson} <span onClick={() => remoteSearchMovie('person')}>❌</span></p>
                        </div>
                }
            </div>

            <div className='bloc-affichage-film-item'>
                {
                    (filtreMovie !== '' || filtreSerie !== '' || filtrePerson !== '') ?
                    (
                        (loadingMovie && loadingSerie && loadingPerson)
                        ? <Loading />
                        : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', padding: '2%' }}>
                            {
                                movies.length !== 0
                                && movies.map(movie => (
                                    <ItemFilm
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.title}
                                    />
                                ))
                            }
                            {
                                series.length !== 0
                                && series.map(serie => (
                                    <ItemSerie
                                        key={serie.id}
                                        id={serie.id}
                                        poster={serie.poster_path}
                                        title={serie.name}
                                    />
                                ))
                            }
                            {
                                persons.length !== 0
                                && persons.map(person => (
                                    <ItemPerson
                                        key={person.id}
                                        id={person.id}
                                        poster={person.profile_path}
                                        name={person.name}
                                    />
                                ))
                            }
                        </div>
                    )
                    :
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '90vh' }}>
                        <img src={logo} style={{ width: '75%' }} alt='logo_ToDoFilm' />
                    </div>                        
                }
            </div>
        </div>
    );
}

export default AffichageFilm