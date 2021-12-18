import React, { useState } from 'react'
import PreviewModal from '../PreviewModal'
import './styles.css'

export default ({ item, img, title, setisModalVisible = () => { }, setItemSelected = () => { }, Children }) => {

    const handleSelected = () => {
        setItemSelected(item);
        setisModalVisible(true);
    }

    return (
        <>
            <div className='movieItem' onClick={() => handleSelected()} >
                <img src={`https://image.tmdb.org/t/p/w300${img}`} alt={title} />
            </div>
        </>
    )
}