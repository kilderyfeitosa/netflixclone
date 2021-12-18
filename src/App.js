import React, { useEffect, useState } from "react";
import Tmdb from "./apis/Tmdb";
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //list all
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //featured movie
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMoreInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)

    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className="list">
        {movieList.map((item, key) => (
          <MovieList title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com <span role='img' aria-label='coração'>❤️</span> por Kildery e B7Web<br />
        Direitos de imagem para netflix<br />
        Dados pegos do site Themoviedb.org
      </footer>
      {movieList.length <= 0 &&
        <div className='loading'>
          <img className='loading--img' src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='carregando' />
        </div>
      }
    </div>
  );
}

