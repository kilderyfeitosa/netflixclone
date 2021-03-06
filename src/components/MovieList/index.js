import React, { useState } from 'react'
import MovieItem from '../MovieItem'
import './styles.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PreviewModal from '../PreviewModal';

export default ({ title, items }) => {

    const [scrollX, setScrollx] = useState(0);
    const [itemSelected, setItemSelected] = useState(null);
    const [isModalVisible, setisModalVisible] = useState(false);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollx(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollx(x)
    }

    return (
        <div className='movieList'>
            <h2>{title}</h2>
            <div className='movieList--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className='movieList--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className='movieList--area'>
                <div className='movieList--all' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        // <div key={key} className='movieList--item'>
                        //     <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        // </div>
                        <MovieItem key={key} item={item} img={item.poster_path} title={item.original_title}
                            setisModalVisible={() => { setisModalVisible(true) }}
                            setItemSelected={() => { setItemSelected(item) }} />
                    ))}
                </div>
            </div>
            {isModalVisible &&
                <PreviewModal onClose={() => { setisModalVisible(false) }} itemSelected={itemSelected} />
            }
        </div>
    )
}