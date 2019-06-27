import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
// import getFilms from './Cards';
import { url, google, googleApi } from './config';
import Cards from './Cards';

const uri = 'https://ghibliapi.herokuapp.com/';

// setup your `RestLink` with your endpoint
const restLink = new RestLink({
  endpoints: { google: googleApi },
  uri
});

// setup your client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
});

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

  useEffect(() => {
    // getFilms();
    // getFilmsWithAxios();
  }, []);

  return (
    <div className="app ui container">
      <h1>Ghibli characters</h1>
      <Cards />
    </div>
  );
};

const ApolloApp = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default ApolloApp;
