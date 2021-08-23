import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './styles.css'

const Loading = () => {
    return (
        <div className='loader'>
            <Loader
                visible={true}
                type="TailSpin"
                color='#660099'
                height='50%'
                width='50%'
            />
        </div>
    )
}

export default Loading