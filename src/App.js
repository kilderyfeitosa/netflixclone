import React, {useEffect, useState}  from "react";
import Tmdb from "./apis/Tmdb";
import MovieList from "./components/Movie/MovieList";
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie";
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)

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

  return (
    <div className="page">
      {featuredData &&
      <FeaturedMovie item={featuredData} />
      }
      <section className="list">
        {movieList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
} 

