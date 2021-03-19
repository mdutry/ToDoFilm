import React, {Component} from 'react'
import './ItemFilm.css';
import coeurFalse from '../images/coeur_violet_clair.png'
import coeurTrue from '../images/coeur_violet.png'
import { Link } from 'react-router-dom'

class ItemFilm extends Component {

    render () {

        const {id, poster, title} = this.props

        return (
            <div className="bloc-item-film">
                <Link to={`/film/${id}`}>
                    <img key={id} src={poster} alt={`Affiche ${title}`} />
                    
                    <div className="bloc-item-film-title">
                        <img src={coeurFalse} alt='coeur violet wishlist' />
                        <p>{title}</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ItemFilm