import React from 'react';
import './styles.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://www.animesxis.com.br/wp-content/uploads/2017/10/Netflix-Logo.png' alt='netflix' />
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png' alt='usuário' />
                </a>
            </div>
        </header>
    )
}