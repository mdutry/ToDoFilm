import React from 'react'
import './styles.css'

function ModalTeaser({ teaser, showModal, hideModal }) {

    return (
        showModal &&
            <div className='fiche-film-fond-modal' onClick={hideModal}>
                <div className='fiche-film-modal'>
                    <iframe
                        width="90%"
                        height='90%'
                        src={`https://www.youtube.com/embed/${teaser}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    >
                    </iframe>
                    <button onClick={hideModal}>X</button>
                </div>
            </div>
    );
}
export default ModalTeaser