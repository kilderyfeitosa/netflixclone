import React, {useEffect, useState}  from "react";
import Tmdb from "./apis/Tmdb";
import MovieList from "./components/Movie/MovieList";
import './App.css'
export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="list">
        {movieList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
} 

