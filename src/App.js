import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getName from './example';

const query = `
  films {
    title
    description
  }
}
`;

const App = () => {
  const [data, setData] = useState([]);

  const getFilms = async query => {
    try {
      const response = await axios('https://ghibliapi.herokuapp.com/films', {
        query
      });
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
    getName();
    getFilms(query);
  }, []);

  return <div className="App">{renderList(data)}</div>;
};

export default App;
