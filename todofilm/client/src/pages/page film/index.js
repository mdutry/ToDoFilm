import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { movieList } from '../../datas/movieList'
import FicheFilm from './FicheFilm'
import { Redirect } from 'react-router'

const PageFilm = (props) => {

    const [count, setCount] = useState(5);
    const [redirection, setRedirection] = useState(false);

    const isAuthenticated = localStorage.isAuthenticated
    
    useEffect(() => {
        setTimeout(() => setCount(count - 1), 1000);
        setTimeout(() => setRedirection(true), 5000);
    })

    const { id } = props.match.params
    const movie = movieList.find(item => item.id === id)

    return (
        <div className="bloc-central">
            <Header />
            <div className="bloc-central-contenu background-yellow">
                {
                    isAuthenticated ?
                    <FicheFilm data={movie} />
                    :
                    <div className='bloc-authenticated-false'>
                        {
                            redirection && <Redirect to='/connexion' />
                        }
                        <h1>Vous n'êtes pas connecté !</h1>
                        <p>Pour accéder à ce contenu, vous devez être connecté. Dans <span>{count}</span> secondes, vous serez redirigé vers la page d'accueil pour pouvoir vous connecter.</p>
                    </div>
                    
                }
            </div>
        </div>
    )
}

export default PageFilm;