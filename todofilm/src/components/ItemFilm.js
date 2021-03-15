import React, {Component} from 'react'
import './ItemFilm.css';

class ItemFilm extends Component {

    render () {

        const {id, poster, title} = this.props

        return (
            <div className="bloc-item-film">

                <img key={id} src={poster} alt={`Affiche ${title}`} />
                
                <div className="bloc-item-film-title">
                    <img />
                    <p>{title}</p>
                </div>

            </div>
        )
    }
}

export default ItemFilm