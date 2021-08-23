import React, {Component} from 'react'
import '../styles.css'

class PersonDetail extends Component {

    render () {
        const {data} = this.props

        return (
            <div className="bloc-film-detail">                
                <h2>Biographie</h2>
                <p>{data}</p>
            </div>
        )
    }
}

export default PersonDetail