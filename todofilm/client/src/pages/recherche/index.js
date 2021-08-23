import React, { useState, useEffect, Fragment } from 'react'
import Header from '../../components/Header'
import Recherche from './Recherche'
import AffichageFilm from './AffichageFilm'
import './styles.css';
import { Redirect } from 'react-router'

function PageRecherche() {

    const [count, setCount] = useState(5);
    const [redirection, setRedirection] = useState(false);

    const isAuthenticated = localStorage.isAuthenticated
    
    useEffect(() => {
        setTimeout(() => setCount(count - 1), 1000);
        setTimeout(() => setRedirection(true), 5000);
    })

    return (
        <div className='page-recherche'>
            <Header />
            {
                isAuthenticated ?
                <Fragment>
                    <Recherche />
                    <AffichageFilm />
                </Fragment>
                
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
    );
}

export default PageRecherche