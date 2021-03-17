import React, {Component} from 'react'
import Header from '../../components/Header'
import Recherche from './Recherche'
import AffichageFilm from './AffichageFilm'
import './PageRecherche.css';

class PageRecherche extends Component {
    
    render () {

        return (
            <div className='page-recherche'>
                <Header />
                <Recherche />
                <AffichageFilm />
            </div>
        );
    }
}

export default PageRecherche