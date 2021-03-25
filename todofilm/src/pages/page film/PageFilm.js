import React from 'react'
import Header from '../../components/Header'
import { movieList } from '../../datas/movieList'
import FicheFilm from './FicheFilm'

const PageFilm = (props) => {

    const {id} = props.match.params
    const movie = movieList.find(item => item.id === id)

    return (
        <div className="bloc-central">
            <Header />
            <div className="bloc-central-contenu background-yellow">
                <FicheFilm data={movie} />
            </div>
        </div>
    )
}

export default PageFilm;