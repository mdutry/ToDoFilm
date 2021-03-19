import React from 'react'
import Header from '../../components/Header'
import ProfilUser from './ProfilUser'

const PageProfile = () => {
    return (
        <div className="bloc-central">
            <Header />
            <div className="bloc-central-contenu background-yellow">
                <ProfilUser />
            </div>
        </div>
    )
}

export default PageProfile;