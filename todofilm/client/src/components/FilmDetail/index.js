import React, {Component} from 'react'
import './styles.css'

class FilmDetail extends Component {

    render () {
        const {data} = this.props

        return (
            <div className="bloc-film-detail">                
                <h2>Synopsis et détails</h2>
                <p>{data}</p>
            </div>
        )
    }
}

export default FilmDetail