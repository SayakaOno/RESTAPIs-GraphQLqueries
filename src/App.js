import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getFilms from './ghibli';

const App = () => {
  const [data, setData] = useState([]);

  const getFilmsWithAxios = async () => {
    try {
      const response = await axios('https://ghibliapi.herokuapp.com/films');
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderList = films => {
    return (
      <ul>
        {films.map(film => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    );
  };

  useEffect(() => {
    getFilms();
    getFilmsWithAxios();
  }, []);

  return <div className="App">{renderList(data)}</div>;
};

export default App;
