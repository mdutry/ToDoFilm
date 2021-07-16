import React, { useState, useEffect } from 'react'
import HomeVisitor from './HomeVisitor'
import Header from '../../components/Header'
import FicheFilm from './FicheFilm'

const HomeConnected = (props) => {

    const isAuthenticated = localStorage.isAuthenticated

    return (
        <>
            {
                isAuthenticated ?
                <div className="bloc-central">
                    <Header />
                    <div className="bloc-central-contenu background-yellow">
                        <FicheFilm />
                    </div>
                </div>
                :
                <HomeVisitor />
            }
        </>
    )
}

export default HomeConnected;