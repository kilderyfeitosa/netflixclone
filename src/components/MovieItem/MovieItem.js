import React from 'react'
import './MovieItem.css'

export default ({key, img, title}) => {
    return (
        <div key={key}>
            <img src={`https://image.tmdb.org/t/p/w300${img}`} alt={title} />
        </div>
    )
}