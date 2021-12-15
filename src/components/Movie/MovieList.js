import React from 'react'
import MovieItem from '../MovieItem/MovieItem'
import './MovieList.css'

export default ({title, items}) => {
    return (
        <div className='movieList'>
            <h2>{title}</h2>
            <div className='movieList--area'>
                <div className='movieList--all'>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className='movieList--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                        // <MovieItem key={key} img={item.poster_path} title={item.original_title} />
                    ))}
                </div>
            </div>
        </div>
    )
}