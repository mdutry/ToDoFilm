import React from 'react'
import './PageErreur.css'
import Header from '../../components/Header'
import logoErreur from '../../images/erreur_404.png'

const PageErreur = () => {

    return (
        <div className="bloc-central">

            <Header />

            <div className="bloc-central-contenu background-yellow">
                <div className="bloc-erreur-text">
                    <h1>Erreur 404</h1>
                    <p>La page que vous cherchez n'existe pas... 😕</p>
                </div>

                <img src={logoErreur} alt='erreur_404'/>
            </div>

        </div>
    )
}

export default PageErreur;