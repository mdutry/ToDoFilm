import React, { useContext } from 'react'
import ItemFilm from '../../components/ItemFilm'
import { DatasInputContext } from '../../context/DatasInputContext';
import { movieList } from '../../datas/movieList'
import './PageRecherche.css';

function AffichageFilm() {

    const {remoteSearchMovie, filtreRecherche, filtreYear, filtreGenre, filtrePays, filtreActeur, filtreRealisateur, filtreDureeMin, filtreDureeMax, filtreNotePresse, filtreNoteSpectateur, filtreRecompense} = useContext(DatasInputContext)

    const searchMovieFiltre = movieList.filter(item => (
        (filtreRecherche !== '' && item.title.toLowerCase().includes(filtreRecherche.toLowerCase())) ||
        (filtreYear !== '' && item.year === filtreYear) ||
        (filtreGenre !== '' && item.genre.includes(filtreGenre)) ||
        (filtrePays !== '' && item.country === filtrePays) ||
        (filtreActeur !== '' && item.actors.join(' ').toLowerCase().includes(filtreActeur.toLowerCase())) ||
        (filtreRealisateur !== '' &&
        (typeof item.director === 'string' ? item.director.toLowerCase().includes(filtreRealisateur.toLowerCase()) : 
        item.director.join(' ').toLowerCase().includes(filtreRealisateur.toLowerCase()))
        ) ||
        (filtreDureeMin !== '' && item.runtime > filtreDureeMin) ||
        (filtreDureeMax !== '' && item.runtime < filtreDureeMax) ||
        (filtreNotePresse !== '' && item.pressNote >= filtreNotePresse) ||
        (filtreNoteSpectateur !== '' && item.spectatorsNote >= filtreNoteSpectateur) ||
        (filtreRecompense !== '' && (filtreRecompense ? item.recompense === true : item.recompense === false))
    ))


    return (
        <div className='bloc-affichage-film'>
            <div className='bloc-affichage-film-search'>
                {
                    filtreRecherche !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtreRecherche} <span onClick={() => remoteSearchMovie('recherche')}>❌</span></p>
                        </div>
                }
                {
                    filtreYear !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtreYear} <span onClick={() => remoteSearchMovie('year')}>❌</span></p>
                        </div>
                }
                {
                    filtreGenre !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtreGenre} <span onClick={() => remoteSearchMovie('genre')}>❌</span></p>
                        </div>
                }
                {
                    filtrePays !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtrePays} <span onClick={() => remoteSearchMovie('pays')}>❌</span></p>
                        </div>
                }
                {
                    filtreActeur !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtreActeur} <span onClick={() => remoteSearchMovie('acteur')}>❌</span></p>
                        </div>
                }
                {
                    filtreRealisateur !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtreRealisateur} <span onClick={() => remoteSearchMovie('realisateur')}>❌</span></p>
                        </div>
                }
                {
                    filtreDureeMin !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtreDureeMin} <span onClick={() => remoteSearchMovie('dureeMin')}>❌</span></p>
                        </div>
                }
                {
                    filtreDureeMax !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtreDureeMax} <span onClick={() => remoteSearchMovie('dureeMax')}>❌</span></p>
                        </div>
                }
                {
                    filtreNotePresse !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtreNotePresse} <span onClick={() => remoteSearchMovie('note-presse')}>❌</span></p>
                        </div>
                }
                {
                    filtreNoteSpectateur !== '' &&
                        <div className='affichage-film-search-item'>
                            <p>{filtreNoteSpectateur} <span onClick={() => remoteSearchMovie('note-spectateur')}>❌</span></p>
                        </div>
                }
                {
                    filtreRecompense !== '' &&
                        <div className='affichage-film-search-item'>
                            {
                                filtreRecompense ?
                                    <p>Film récompensé <span onClick={() => remoteSearchMovie('recompense')}>❌</span></p>
                                    :
                                    <p>Film non récompensé <span onClick={() => remoteSearchMovie('recompense')}>❌</span></p>
                            }
                        </div>
                }
            </div>

            <div className='bloc-affichage-film-item'>

                {
                    (filtreRecherche !== '' || filtreYear !== '' || filtreGenre !== '' || filtrePays !== '' || filtreActeur !== '' || filtreRealisateur !== '' || filtreDureeMin !== '' || filtreDureeMax !== '' || filtreNotePresse !== '' || filtreNoteSpectateur !== '' || filtreRecompense !== '') ?
                    searchMovieFiltre.map(({title, id, poster}) => (
                        <ItemFilm
                            key={id}
                            id={id}
                            poster={poster}
                            title={title}
                            numb={4}
                        />
                    ))
                    :
                    movieList.map(({title, id, poster}) => (
                        <ItemFilm
                            key={id}
                            id={id}
                            poster={poster}
                            title={title}
                            numb={4}
                        />
                    ))
                }
            </div>
        </div>
        
    );
}

export default AffichageFilm