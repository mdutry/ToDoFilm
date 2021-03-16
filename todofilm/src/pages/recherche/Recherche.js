import React, {Component} from 'react'
import InputFiltre from '../../components/InputFiltre'
import { movieList } from '../../datas/movieList'
import './PageRecherche.css';

class Recherche extends Component {
    
    render () {
        // FILTRE AVES LES DIFFÉRENTES ANNÉES
        const selectYears = movieList.reduce(
            (acc, movie) =>
                acc.includes(movie.year) ? acc : acc.concat(movie.year), []
        )
       
        // FILTRE AVES LES DIFFÉRENTS GENRES
        const allGenre = movieList.reduce(
            (acc, movie) =>
                acc.includes(movie.genre) ? acc : acc.concat(movie.genre), []
        )
        const selectGenre = allGenre.reduce(
            (acc, genre) =>
                acc.includes(genre) ? acc : acc.concat(genre), []
        )
        
        // FILTRE AVES LES DIFFÉRENTS PAYS
        const allCountry = movieList.reduce(
            (acc, movie) =>
                acc.includes(movie.country) ? acc : acc.concat(movie.country), []
        )
        const selectCountry = allCountry.reduce(
            (acc, movie) =>
                acc.includes(movie) ? acc : acc.concat(movie), []
        )

        return (
            <div className='bloc-recherche'>

                <div className="bloc-recherche-component">
                    <h2>Recherche</h2>
                    <InputFiltre type='text' />

                    <h3>Filtres</h3>

                    <InputFiltre labelValue='Année :' type='select' id='year'  filtreOption={selectYears} />
                    <InputFiltre labelValue='Genre :' type='select' id='genre' filtreOption={selectGenre} />
                    <InputFiltre labelValue='Pays :' type='select' id='country' filtreOption={selectCountry} />
                    <InputFiltre labelValue='Acteur :' type='text' />
                    <InputFiltre labelValue='Réalisateur :' type='text' />
                    <InputFiltre labelValue='Durée :' smallValue='min : ' min={0} step={1} type='range' />
                    <InputFiltre smallValue='max : ' type='range' />
                    <InputFiltre labelValue='Note :' spanValue='/5 et +' min={0} step={0.1} max={5} type='range' />
                    <InputFiltre labelValue='Film récompensé :' type='checkbox' />

                    <button>Valider</button>
                </div>

            </div>
        );
    }
}

export default Recherche