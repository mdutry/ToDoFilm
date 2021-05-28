import React, { useState, useContext, useEffect, Fragment } from 'react'
import {DatasInputContext} from '../../context/DatasInputContext'
import './PageRecherche.css';
import { optionYear, optionGenre, optionCountry } from './RechercheFunctions'
import menuNoir from '../../images/menu_noir.png';
import croixNoir from '../../images/croix_noir.png';
import useScreenSize from "../../components/useScreenSize"

function Recherche() {

    const datasInputContext = useContext(DatasInputContext)
    const [stateTitle, setStateTitle] = useState('')
    const [stateYear, setStateYear] = useState('')
    const [stateGenre, setStateGenre] = useState('')
    const [stateCountry, setStateCountry] = useState('')
    const [stateActor, setStateActor] = useState('')
    const [stateRealisateur, setStateRealisateur] = useState('')
    const [stateDureeMin, setStateDureeMin] = useState('')
    const [stateDureeMax, setStateDureeMax] = useState('')
    const [stateNotePresse, setStateNotePresse] = useState('')
    const [stateNoteSpectateur, setStateNoteSpectateur] = useState('')
    const [isChecked, setIsChecked] = useState('')

    useEffect(() => {
        setStateTitle(datasInputContext.filtreRecherche)
        setStateYear(datasInputContext.filtreYear)
        setStateGenre(datasInputContext.filtreGenre)
        setStateCountry(datasInputContext.filtrePays)
        setStateActor(datasInputContext.filtreActeur)
        setStateRealisateur(datasInputContext.filtreRealisateur)
        setStateDureeMin(datasInputContext.filtreDureeMin)
        setStateDureeMax(datasInputContext.filtreDureeMax)
        setStateNotePresse(datasInputContext.filtreNotePresse)
        setStateNoteSpectateur(datasInputContext.filtreNoteSpectateur)
        setIsChecked(datasInputContext.filtreRecompense)
    }, [datasInputContext.remoteSearch])

    const functionSearchMovie = () => {
        datasInputContext.functionRecupValue('recherche', stateTitle)
        datasInputContext.functionRecupValue('year', stateYear)
        datasInputContext.functionRecupValue('genre', stateGenre)
        datasInputContext.functionRecupValue('country', stateCountry)
        datasInputContext.functionRecupValue('actor', stateActor)
        datasInputContext.functionRecupValue('realisateur', stateRealisateur)
        datasInputContext.functionRecupValue('duree-min', stateDureeMin)
        datasInputContext.functionRecupValue('duree-max', stateDureeMax)
        datasInputContext.functionRecupValue('note-presse', stateNotePresse)
        datasInputContext.functionRecupValue('note-spectateur', stateNoteSpectateur)
        datasInputContext.functionRecupValue('recompense', isChecked)
        datasInputContext.remoteSearch = false
    }

    const remoteSearchMovie = () => {
        setStateTitle('')
        setStateYear('')
        setStateGenre('')
        setStateCountry('')
        setStateActor('')
        setStateRealisateur('')
        setStateDureeMin('')
        setStateDureeMax('')
        setStateNotePresse('')
        setStateNoteSpectateur('')
        setIsChecked('')
        datasInputContext.remoteSearchMovie()
    }

    const [showMenu, setShowMenu] = useState(false) 
    const screenWidth = useScreenSize().width 
    const functionShowMenu = () => {
       if (showMenu === true) {
             setShowMenu(false)
       } else if (showMenu === false) {
             setShowMenu(true)
       }
    }

    const responsiveFiltres = showMenu ?
       <Fragment>
           <div className='filtre-responsive-click' onClick={functionShowMenu}>
               <h3>Filtres</h3>
               <img src={croixNoir} alt={croixNoir} />
           </div>
          

            <div className='bloc-recherche-filtre'>
                <div className="bloc-recherche-input-filtre">
                    <label>Année :</label>
                    <select value={stateYear} onChange={(e) => setStateYear(e.target.value)}>
                        <option value=''>- Choisir une option -</option>
                        {optionYear}
                    </select>
                </div>
                
                <div className="bloc-recherche-input-filtre">
                    <label>Genre :</label>
                    <select value={stateGenre} onChange={(e) => setStateGenre(e.target.value)}>
                        <option value=''>- Choisir une option -</option>
                        {optionGenre}
                    </select>
                </div>
                
                <div className="bloc-recherche-input-filtre">
                    <label>Pays :</label>
                    <select value={stateCountry} onChange={(e) => setStateCountry(e.target.value)}>
                        <option value=''>- Choisir une option -</option>
                        {optionCountry}
                    </select>
                </div>
                
                <div className="bloc-recherche-input-filtre">
                    <label>Acteur :</label>
                    <input
                        type='text'
                        value={stateActor}
                        onChange={(e) => setStateActor(e.target.value)}
                    />
                </div>
                
                <div className="bloc-recherche-input-filtre">
                    <label>Réalisateur :</label>
                    <input
                        type='text'
                        value={stateRealisateur}
                        onChange={(e) => setStateRealisateur(e.target.value)}
                    />
                </div>
            </div>                    

            <label>Durée :</label>
            <div className='bloc-recherche-filtre'>
                <div className="bloc-recherche-input-filtre">
                    <small><span>min :</span>{stateDureeMin}</small>
                    <input
                        value={stateDureeMin}
                        type='range'
                        min={0}
                        max={300}
                        step={1}
                        onChange={(e) => setStateDureeMin(e.target.value)}
                    />
                </div>
                
                <div className="bloc-recherche-input-filtre">
                    <small><span>max :</span>{stateDureeMax}</small>
                    <input
                        value={stateDureeMax}
                        type='range'
                        min={stateDureeMin}
                        max={300}
                        step={1}
                        onChange={(e) => setStateDureeMax(e.target.value)}
                    />
                </div>
            </div>
                
            <label>Note :</label>
            <div className='bloc-recherche-filtre'>
                <div className="bloc-recherche-input-filtre">
                    <small>{`Presse : ${stateNotePresse}/5 et +`}</small>
                    <input
                        value={stateNotePresse}
                        type='range'
                        min={0}
                        max={5}
                        step={0.1}
                        onChange={(e) => setStateNotePresse(e.target.value)}
                    />
                </div>
                
                <div className="bloc-recherche-input-filtre">
                    <small>{`Spectateur : ${stateNoteSpectateur}/5 et +`}</small>
                    <input
                        value={stateNoteSpectateur}
                        type='range'
                        min={0}
                        max={5}
                        step={0.1}
                        onChange={(e) => setStateNoteSpectateur(e.target.value)}
                    />
                </div>
                
                <div className="bloc-recherche-input-checkbox">
                    <label>Film récompensé :</label>
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                </div>
            </div>
       </Fragment>
    :
        
        <div className='filtre-responsive-click' onClick={functionShowMenu}>
            <h3>Filtres</h3>
            <img src={menuNoir} alt={menuNoir} />
        </div>

    return (
        <div className='bloc-recherche'>

            <div className="bloc-recherche-component">
                <h2>Recherche</h2>
                <div className="bloc-recherche-input-filtre">
                    <input
                        type='text'
                        placeholder='Titre du film'
                        value={stateTitle}
                        onChange={(e) => setStateTitle(e.target.value)}
                    />
                </div>

                {
                    screenWidth <= 768 ?
                        responsiveFiltres
                    :
                        <Fragment>
                            <h3>Filtres</h3>

                            <div className='bloc-recherche-filtre'>
                                <div className="bloc-recherche-input-filtre">
                                    <label>Année :</label>
                                    <select value={stateYear} onChange={(e) => setStateYear(e.target.value)}>
                                        <option value=''>- Choisir une option -</option>
                                        {optionYear}
                                    </select>
                                </div>
                                
                                <div className="bloc-recherche-input-filtre">
                                    <label>Genre :</label>
                                    <select value={stateGenre} onChange={(e) => setStateGenre(e.target.value)}>
                                        <option value=''>- Choisir une option -</option>
                                        {optionGenre}
                                    </select>
                                </div>
                                
                                <div className="bloc-recherche-input-filtre">
                                    <label>Pays :</label>
                                    <select value={stateCountry} onChange={(e) => setStateCountry(e.target.value)}>
                                        <option value=''>- Choisir une option -</option>
                                        {optionCountry}
                                    </select>
                                </div>
                                
                                <div className="bloc-recherche-input-filtre">
                                    <label>Acteur :</label>
                                    <input
                                        type='text'
                                        value={stateActor}
                                        onChange={(e) => setStateActor(e.target.value)}
                                    />
                                </div>
                                
                                <div className="bloc-recherche-input-filtre">
                                    <label>Réalisateur :</label>
                                    <input
                                        type='text'
                                        value={stateRealisateur}
                                        onChange={(e) => setStateRealisateur(e.target.value)}
                                    />
                                </div>
                            </div>                    

                            <label>Durée :</label>
                            <div className='bloc-recherche-filtre'>
                                <div className="bloc-recherche-input-filtre">
                                    <small><span>min :</span>{stateDureeMin}</small>
                                    <input
                                        value={stateDureeMin}
                                        type='range'
                                        min={0}
                                        max={300}
                                        step={1}
                                        onChange={(e) => setStateDureeMin(e.target.value)}
                                    />
                                </div>
                                
                                <div className="bloc-recherche-input-filtre">
                                    <small><span>max :</span>{stateDureeMax}</small>
                                    <input
                                        value={stateDureeMax}
                                        type='range'
                                        min={stateDureeMin}
                                        max={300}
                                        step={1}
                                        onChange={(e) => setStateDureeMax(e.target.value)}
                                    />
                                </div>
                            </div>
                                
                            <label>Note :</label>
                            <div className='bloc-recherche-filtre'>
                                <div className="bloc-recherche-input-filtre">
                                    <small>{`Presse : ${stateNotePresse}/5 et +`}</small>
                                    <input
                                        value={stateNotePresse}
                                        type='range'
                                        min={0}
                                        max={5}
                                        step={0.1}
                                        onChange={(e) => setStateNotePresse(e.target.value)}
                                    />
                                </div>
                                
                                <div className="bloc-recherche-input-filtre">
                                    <small>{`Spectateur : ${stateNoteSpectateur}/5 et +`}</small>
                                    <input
                                        value={stateNoteSpectateur}
                                        type='range'
                                        min={0}
                                        max={5}
                                        step={0.1}
                                        onChange={(e) => setStateNoteSpectateur(e.target.value)}
                                    />
                                </div>
                                
                                <div className="bloc-recherche-input-checkbox">
                                    <label>Film récompensé :</label>
                                    <input
                                        type='checkbox'
                                        checked={isChecked}
                                        onChange={(e) => setIsChecked(e.target.checked)}
                                    />
                                </div>
                            </div>
                        </Fragment>
                }

                <div className='bloc-recherche-button'>
                    <button onClick={functionSearchMovie}>Valider</button>
                    <button onClick={remoteSearchMovie}>Réinitialiser</button>
                </div>
                
            </div>

        </div>
    );
}

export default Recherche