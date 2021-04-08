import React, {Component} from 'react'
import InputFiltre from '../../components/InputFiltre'
import { movieList } from '../../datas/movieList'
import {datasInputComponent} from '../../datas/datasInputComponent'
import './PageRecherche.css';

class Recherche extends Component {
    
    render () {
        // FILTRE AVES LES DIFFÉRENTES ANNÉES
        const selectYears = movieList.reduce(
            (acc, movie) =>
                acc.includes(movie.year) ? acc : acc.concat(movie.year), []
        )
        selectYears.sort()
       
        // FILTRE AVES LES DIFFÉRENTS GENRES
        const allGenre = movieList.reduce(
            (acc, movie) =>
                acc.includes(movie.genre) ? acc : acc.concat(movie.genre), []
        )
        const selectGenre = allGenre.reduce(
            (acc, genre) =>
                acc.includes(genre) ? acc : acc.concat(genre), []
        )
        selectGenre.sort()
        
        // FILTRE AVES LES DIFFÉRENTS PAYS
        const allCountry = movieList.reduce(
            (acc, movie) =>
                acc.includes(movie.country) ? acc : acc.concat(movie.country), []
        )
        const selectCountry = allCountry.reduce(
            (acc, movie) =>
                acc.includes(movie) ? acc : acc.concat(movie), []
        )
        selectCountry.sort()

        return (
            <div className='bloc-recherche'>

                <div className="bloc-recherche-component">
                    <h2>Recherche</h2>
                    <InputFiltre type='text' id='recherche' />

                    <h3>Filtres</h3>

                    <InputFiltre labelValue='Année :' type='select' id='year'  filtreOption={selectYears} />
                    <InputFiltre labelValue='Genre :' type='select' id='genre' filtreOption={selectGenre} />
                    <InputFiltre labelValue='Pays :' type='select' id='country' filtreOption={selectCountry} />
                    <InputFiltre labelValue='Acteur :' type='text' id='actor' />
                    <InputFiltre labelValue='Réalisateur :' type='text' id='realisateur' />
                    <InputFiltre labelValue='Durée :' spanValue='min : ' min={0} max={300} step={1} type='range' id='duree-min' />
                    <InputFiltre spanValue='max : ' type='range' max={300} step={1} id='duree-max' />
                    <InputFiltre labelValue='Note :' smallValue={datasInputComponent.filtreNote} spanValue='/5 et +' min={0} step={0.1} max={5} type='range' id='note' />
                    <InputFiltre labelValue='Film récompensé :' type='checkbox' id='recompense' />

                    <button>Valider</button>
                </div>

            </div>
        );
    }
}

export default Recherche