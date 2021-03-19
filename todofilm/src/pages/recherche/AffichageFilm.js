import React, {Component} from 'react'
import ItemFilm from '../../components/ItemFilm'
import { movieList } from '../../datas/movieList'
import './PageRecherche.css';

class AffichageFilm extends Component {
    
    render () {

        

        return (
            <div className='bloc-affichage-film'>

                {movieList.map(({title, id, poster}) => (
                    <ItemFilm
                        key={id}
                        id={id}
                        poster={poster}
                        title={title}
                    />
                ))}

            </div>
        );
    }
}

export default AffichageFilm