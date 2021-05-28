import React from 'react'
import { movieList } from '../../datas/movieList'

// FILTRE AVES LES DIFFÉRENTES ANNÉES
const selectYears = movieList.reduce(
    (acc, movie) =>
        acc.includes(movie.year) ? acc : acc.concat(movie.year), []
)
selectYears.sort()

export const optionYear = selectYears.map((year) => (
    <option key={year} value={year}>{year}</option>
))


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

export const optionGenre = selectGenre.map((genre) => (
    <option key={genre} value={genre}>{genre}</option>
))


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

export const optionCountry = selectCountry.map((country) => (
    <option key={country} value={country}>{country}</option>
))