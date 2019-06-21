import React, { useState, useEffect } from 'react';
import axios from 'axios';

const query = `
query {
  title
  description
}
`;

const App = () => {
  const [data, setData] = useState([]);

  const getFilms = async query => {
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
    getFilms(query);
  }, []);

  return <div className="App">{renderList(data)}</div>;
};

export default App;
