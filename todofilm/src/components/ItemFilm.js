import React, {Component} from 'react'
import './ItemFilm.css';
import coeurFalse from '../images/coeur_violet_clair.png'
import coeurTrue from '../images/coeur_violet.png'
import { Link } from 'react-router-dom'

class ItemFilm extends Component {

    state = {
        srcCoeur: false
    }

    changeImage = () => {
        this.setState({
            srcCoeur: !this.state.srcCoeur
        })
    }

    render () {

        const {id, poster, title} = this.props

        return (
            <div className="bloc-item-film">
                <Link to={`/film/${id}`}>
                    <img key={id} src={poster} alt={`Affiche ${title}`} />
                </Link>
                    
                <div className="bloc-item-film-title">
                    <div onClick={this.changeImage}>
                        {
                            this.state.srcCoeur ? <img src={coeurTrue} alt='coeur violet wishlist' />
                            : <img src={coeurFalse} alt='coeur violet wishlist' />
                        }
                        
                    </div>
                    <Link to={`/film/${id}`}>
                        <p>{title}</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ItemFilm