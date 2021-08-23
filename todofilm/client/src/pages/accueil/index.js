import React from 'react';
import VisitorHome from './VisitorHome';
import ConnectedHome from './ConnectedHome';

function Accueil() {

    const isAuthenticated = localStorage.isAuthenticated

    return (
        <div className="bloc-central">
            {
                isAuthenticated ?
                <ConnectedHome />
                :
                <VisitorHome />
            }
        </div>
    )
}
export default Accueil