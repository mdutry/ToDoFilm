import React from 'react'
import Header from '../../components/Header'
import ProfilUser from './ProfilUser'

const PageProfile = () => {
    return (
        <div className="bloc-erreur">
            <Header />

            <div className="bloc-erreur-contenu background-yellow">

                <ProfilUser />

            </div>

        </div>
    )
}

export default PageProfile;