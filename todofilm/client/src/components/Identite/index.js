import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

const Identite = ({ label, data, id, dataId }) => {

    const classIdentite = id === 'notes' ? 'bloc-identite-notes' : 'bloc-identite'
    const arrayOrNot = Array.isArray(data) ? data.join(', ') : data
    const linkPerson = Array.isArray(data) && data.map(person => <><Link to={`/person/${person.id}`}>{person.name}</Link>, </>)

    return (
        <div className={classIdentite}>
            <span className='identite-span'>{label}</span>
            {
                dataId
                ? <span>{linkPerson}</span>
                : <p className='identite-par'>{arrayOrNot}</p>
            }
        </div>
    )
}

export default Identite