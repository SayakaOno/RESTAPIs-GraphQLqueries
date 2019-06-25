import React, { useState, useEffect } from 'react';
import getFilms from './ghibli';
import { url, google, googleApi } from './config';

const App = () => {
  const [data, setData] = useState([]);

  const getFilmsWithAxios = async () => {
    try {
      const response = await axios(URL);
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getImagesWithAxios = async () => {
    const response = await google.get(url, {
      params: {
        searchType: 'image',
        q: 'dog' + '+' + 'cat'
      }
    });
    let data = response.data.items;
    console.log(data);
    if (!data) {
      throw Error;
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
    // getFilmsWithAxios();
  }, []);

  return <div className="App">{renderList(data)}</div>;
};

export default App;
