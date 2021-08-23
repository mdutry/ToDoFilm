import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/general.css'
import './styles.css'

import Header from '../../../components/Header'
import Slider from '../../../components/Slider';
import Loading from '../../../components/Loading';

const ConnectedHome = () => {

    const [popularMovies, setPopularMovies] = useState([])
    const [isLoadingPopularMovies, setIsLoadingPopularMovies] = useState(true)

    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [isLoadingUpcomingMovies, setIsLoadingUpcomingMovies] = useState(true)

    const [topRatestMovies, setTopRatestMovies] = useState([])
    const [isLoadingTopRatestMovies, setIsLoadingTopRatestMovies] = useState(true)

    const [popularSeries, setPopularSeries] = useState([])
    const [isLoadingPopularSeries, setIsLoadingPopularSeries] = useState(true)

    const [topRatestSeries, setTopRatestSeries] = useState([])
    const [isLoadingTopRatestSeries, setIsLoadingTopRatestSeries] = useState(true)

    const [popularPersons, setPopularPersons] = useState([])
    const [isLoadingPopularPersons, setIsLoadingPopularPersons] = useState(true)
 
    useEffect (() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setPopularMovies(res.data.results)
                setIsLoadingPopularMovies(false)
            })
        
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setUpcomingMovies(res.data.results)
                setIsLoadingUpcomingMovies(false)
            })
    
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setTopRatestMovies(res.data.results)
                setIsLoadingTopRatestMovies(false)
            })

        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setPopularSeries(res.data.results)
                setIsLoadingPopularSeries(false)
            })

        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setTopRatestSeries(res.data.results)
                setIsLoadingTopRatestSeries(false)
            })

        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setPopularPersons(res.data.results)
                setIsLoadingPopularPersons(false)
            })
    }, [])

    return (
        <div className="bloc-central">

            <Header />

            <div className="bloc-central-contenu background-yellow">
                <div className="bloc-erreur-text">
                    <h1>Films populaires</h1>
                    {
                        isLoadingPopularMovies
                        ? <Loading />
                        : <Slider moviesList={popularMovies} />
                    }
                </div>
                <div className="bloc-erreur-text">
                    <h1>Films les mieux notés</h1>
                    {
                        isLoadingUpcomingMovies
                        ? <Loading />
                        : <Slider moviesList={topRatestMovies} />
                    }
                </div>
                <div className="bloc-erreur-text">
                    <h1>Les prochaines sorties</h1>
                    {
                        isLoadingTopRatestMovies
                        ? <Loading />
                        : <Slider moviesList={upcomingMovies} />
                    }
                </div>
                <div className="bloc-erreur-text">
                    <h1>Séries populaires</h1>
                    {
                        isLoadingPopularSeries
                        ? <Loading />
                        : <Slider seriesList={popularSeries} />
                    }
                </div>
                <div className="bloc-erreur-text">
                    <h1>Séries les mieux notés</h1>
                    {
                        isLoadingTopRatestSeries
                        ? <Loading />
                        : <Slider seriesList={topRatestSeries} />
                    }
                </div>
                <div className="bloc-erreur-text">
                    <h1>Personnes populaires</h1>
                    {
                        isLoadingPopularPersons
                        ? <Loading />
                        : <Slider personsList={popularPersons} />
                    }
                </div>

            </div>

        </div>
    )
    
}
export default ConnectedHome