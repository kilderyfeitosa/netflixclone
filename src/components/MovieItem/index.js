import React from 'react'
import './styles.css'

export default ({img, title}) => {
    return (
        <div className='movieItem'>
            <img src={`https://image.tmdb.org/t/p/w300${img}`} alt={title} />
        </div>
    )
}