import React, {Component} from 'react'
import './ItemFilm.css';
import coeurFalse from '../images/coeur_violet_clair.png'
import coeurTrue from '../images/coeur_violet.png'

class ItemFilm extends Component {

    render () {

        const {id, poster, title} = this.props

        return (
            <div className="bloc-item-film">

                <img key={id} src={poster} alt={`Affiche ${title}`} />
                
                <div className="bloc-item-film-title">
                    <img src={coeurFalse} alt='coeur violet wishlist' />
                    <p>{title}</p>
                </div>

            </div>
        )
    }
}

export default ItemFilm