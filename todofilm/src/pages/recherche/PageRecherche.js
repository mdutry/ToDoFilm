import React, {Component} from 'react'
import Recherche from './Recherche'
import AffichageFilm from './AffichageFilm'
import './PageRecherche.css';

class PageRecherche extends Component {
    
    render () {

        return (
            <div className='page-recherche'>
                <div id="header">HEADER PRENANT TOUTE LA PLACE</div>
                
                <Recherche />
                <AffichageFilm />

            </div>
        );
    }
}

export default PageRecherche