import React, { useState, useContext, useEffect } from 'react'
import Header from '../../components/Header'
import ProfilUser from './ProfilUser'
import { DatasUserContext } from '../../context/DatasUserContext'
import { Redirect } from 'react-router'

const PageProfile = () => {

    const [count, setCount] = useState(5);
    const [redirection, setRedirection] = useState(false);

    const {isAuthenticated} = useContext(DatasUserContext)
    
    useEffect(() => {
        setTimeout(() => setCount(count - 1), 1000);
        setTimeout(() => setRedirection(true), 5000);
    })
    
    return (
        <div className="bloc-central">
            <Header />
            <div className="bloc-central-contenu background-yellow">
                {
                    isAuthenticated ?
                    <ProfilUser />
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

export default PageProfile;