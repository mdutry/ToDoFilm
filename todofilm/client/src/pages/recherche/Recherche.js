import React, { useState, useContext, useEffect, Fragment } from 'react'
import { DatasInputContext } from '../../context/DatasInputContext'
import './styles.css';

function Recherche() {

    const datasInputContext = useContext(DatasInputContext)
    const [stateTitleMovie, setStateTitleMovie] = useState('')
    const [stateTitleSerie, setStateTitleSerie] = useState('')
    const [statePerson, setStatePerson] = useState('')

    useEffect(() => {
        remoteSearchMovie()
    }, [])

    useEffect(() => {
        setStateTitleMovie(datasInputContext.filtreMovie)
        setStateTitleSerie(datasInputContext.filtreSerie)
        setStatePerson(datasInputContext.filtrePerson)
    }, [datasInputContext.remoteSearch])

    const functionSearchMovie = () => {
        datasInputContext.functionRecupValue('movie', stateTitleMovie)
        datasInputContext.functionRecupValue('serie', stateTitleSerie)
        datasInputContext.functionRecupValue('person', statePerson)
        datasInputContext.remoteSearch = false
    }

    const remoteSearchMovie = () => {
        setStateTitleMovie('')
        setStateTitleSerie('')
        setStatePerson('')
        datasInputContext.remoteSearchMovie()
    }

    return (
        <div className='bloc-recherche'>

            <div className="bloc-recherche-component">
                <h2>Recherche</h2>
                <div className="bloc-recherche-input-filtre">
                    <input
                        type='text'
                        placeholder='Titre du film'
                        value={stateTitleMovie}
                        onChange={(e) => setStateTitleMovie(e.target.value)}
                    />
                </div>
                <div className="bloc-recherche-input-filtre">
                    <input
                        type='text'
                        placeholder='Titre de la série'
                        value={stateTitleSerie}
                        onChange={(e) => setStateTitleSerie(e.target.value)}
                    />
                </div>
                <div className="bloc-recherche-input-filtre">
                    <input
                        type='text'
                        placeholder="Nom de l'acteur·rice, réalisateur·rice"
                        value={statePerson}
                        onChange={(e) => setStatePerson(e.target.value)}
                    />
                </div>

                <div className='bloc-recherche-button'>
                    <button onClick={functionSearchMovie}>Valider</button>
                    <button onClick={remoteSearchMovie}>Réinitialiser</button>
                </div>
                
            </div>

        </div>
    );
}

export default Recherche