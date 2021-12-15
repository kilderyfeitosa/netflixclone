import React, {useEffect}  from "react";
import Tmdb from "./app/apis/Tmdb";

export default () => {

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list)
    }

    loadAll();
  }, []);

  return (
    <div>
      Hello Word
    </div>
  );
} 

