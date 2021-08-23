import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import FichePerson from './FichePerson'
import { Redirect } from 'react-router'
import axios from 'axios'
import Loading from '../../components/Loading'

const PageSerie = (props) => {

    // state pour la redirection
    const [count, setCount] = useState(5);
    const [redirection, setRedirection] = useState(false);
    const isAuthenticated = localStorage.isAuthenticated

    // state pour le loading
    const [loadingPerson, setLoadingPerson] = useState(true)
    const [loadingCombinedCredits, setLoadingCombinedCredits] = useState(true)

    // state pour la data du film
    const [person, setPerson] = useState([])
    const [combinedCredits, setCombinedCredits] = useState([])
    
    useEffect(() => {
        setTimeout(() => setCount(count - 1), 1000);
        setTimeout(() => setRedirection(true), 5000);
    })

    const { id } = props.match.params
    useEffect (() => {
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setPerson(res.data)
                setLoadingPerson(false)
            })
        axios.get(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=110a89f9e0ed33a47e88e198745d278b&language=fr-FR`)
            .then (res => {
                setCombinedCredits(res.data)
                setLoadingCombinedCredits(false)
            })
    }, [])

    return (
        <div className="bloc-central">
            <Header />
            <div className="bloc-central-contenu background-yellow">
                {
                    isAuthenticated ? (
                        (!loadingPerson && !loadingCombinedCredits) ?
                        <FichePerson data={person} combinedCredits={combinedCredits} />
                        :
                        <Loading />
                    ) : (
                        <div className='bloc-authenticated-false'>
                            {
                                redirection && <Redirect to='/connexion' />
                            }
                            <h1>Vous n'êtes pas connecté !</h1>
                            <p>Pour accéder à ce contenu, vous devez être connecté. Dans <span>{count}</span> secondes, vous serez redirigé vers la page d'accueil pour pouvoir vous connecter.</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PageSerie;